import rawData from '../data/lich-su-dang.json';
import { EVENT_ENRICHMENT_MAP, EnrichedEventInfo } from '../data/event-enrichment';

export interface SourceUnit {
  id: string;
  session: number;
  title: string;
  chapter: number;
  fileName: string;
  format: 'pdf' | 'pptx';
  unitType: 'page' | 'slide';
  unitCount: number;
  sha256: string;
  publicPath: string | null;
}

export interface DocumentUnit {
  id: string;
  sourceId: string;
  session: number;
  chapter: number;
  unitType: 'page' | 'slide';
  unitNumber: number;
  title: string;
  text: string;
  dateMentions: string[];
  contentType: string;
  reviewStatus: string;
}

export interface EditorialNote {
  id: string;
  sourceRefs: string[];
  issue: string;
  correction: string;
  url: string | null;
}

export interface RawEvent {
  id: string;
  date: string;
  datePrecision: 'day' | 'month' | 'year';
  title: string;
  chapter: number;
  session: number;
  kind: 'event' | 'goal' | string;
  sourceRefs: string[];
  sourceText: string;
  reviewStatus: string;
  note?: string;
}

export interface EnrichedEvent extends RawEvent {
  period: string;
  location: string;
  context: string;
  keyPoints: string[];
  significance: string;
  quickSummary: string;
  commonMistakes: string;
  relatedEvents: string[];
  editorialNotes: EditorialNote[];
  sourceUnit?: SourceUnit;
}

export const data = rawData as {
  schemaVersion: string;
  language: string;
  title: string;
  scope: string;
  sources: SourceUnit[];
  documents: DocumentUnit[];
  events: RawEvent[];
  editorialNotes: EditorialNote[];
};

export const sourceMap = new Map<string, SourceUnit>(data.sources.map(s => [s.id, s]));
export const sessionMap = new Map<number, SourceUnit>(data.sources.map(s => [s.session, s]));
export const docMap = new Map<string, DocumentUnit>(data.documents.map(d => [d.id, d]));

export const PERIODS = [
  'Tất cả giai đoạn',
  'Trước năm 1930',
  '1930–1945',
  '1945–1954',
  '1954–1975',
  '1975–1986',
  'Từ 1986'
] as const;

export function normalize(value: string = ''): string {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

// Format date nicely based on datePrecision
export function formatEventDate(dateStr: string, precision: string = 'day'): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  const y = parts[0];
  const m = parts[1] ? parseInt(parts[1], 10) : null;
  const d = parts[2] ? parseInt(parts[2], 10) : null;

  if (precision === 'year' || parts.length === 1) {
    return `Năm ${y}`;
  }
  if (precision === 'month' || parts.length === 2) {
    return `Tháng ${m}/${y}`;
  }
  return `Ngày ${d}/${m}/${y}`;
}

export function getEventEnriched(id: string): EnrichedEvent | null {
  const raw = data.events.find(e => e.id === id);
  if (!raw) return null;

  const enrichment: EnrichedEventInfo | undefined = EVENT_ENRICHMENT_MAP[id];
  const notes = data.editorialNotes.filter(n =>
    raw.sourceRefs.some(ref => n.sourceRefs.includes(ref))
  );
  const src = sessionMap.get(raw.session);

  return {
    ...raw,
    period: enrichment?.period || 'Khác',
    location: enrichment?.location || '',
    context: enrichment?.context || '',
    keyPoints: enrichment?.keyPoints || [raw.title],
    significance: enrichment?.significance || '',
    quickSummary: enrichment?.quickSummary || raw.title,
    commonMistakes: enrichment?.commonMistakes || '',
    relatedEvents: enrichment?.relatedEvents || [],
    editorialNotes: notes,
    sourceUnit: src
  };
}

export function getAllEnrichedEvents(): EnrichedEvent[] {
  return data.events.map(e => getEventEnriched(e.id)!);
}

export interface FilterOptions {
  query?: string;
  chapter?: number;
  period?: string;
  session?: number;
  kind?: string;
  includeGoals?: boolean;
  sortOrder?: 'asc' | 'desc';
}

export function searchAndFilterEvents(options: FilterOptions = {}): EnrichedEvent[] {
  const {
    query = '',
    chapter,
    period,
    session,
    kind,
    includeGoals = true,
    sortOrder = 'asc'
  } = options;

  const trimmed = String(query || '').trim();
  const dateMatch = trimmed.match(/^(\d{1,2})[/.](\d{1,2})[/.](\d{4})$/);
  const yearMatch = trimmed.match(/^(\d{4})$/);
  const tokens = normalize(trimmed).split(' ').filter(Boolean);

  const all = getAllEnrichedEvents();

  const filtered = all.filter(event => {
    // Exclude goals if requested
    if (!includeGoals && event.kind === 'goal') return false;

    // Filter by chapter
    if (chapter !== undefined && chapter !== null && event.chapter !== Number(chapter)) {
      return false;
    }

    // Filter by period
    if (period && period !== 'Tất cả giai đoạn' && event.period !== period) {
      return false;
    }

    // Filter by session
    if (session !== undefined && session !== null && event.session !== Number(session)) {
      return false;
    }

    // Filter by kind
    if (kind && kind !== 'all') {
      if (kind === 'goal' && event.kind !== 'goal') return false;
      if (kind === 'event' && event.kind !== 'event') return false;
      if (kind === 'dai-hoi' && !event.title.toLowerCase().includes('đại hội') && !event.title.toLowerCase().includes('hội nghị')) return false;
      if (kind === 'van-kien' && !event.title.toLowerCase().includes('cương lĩnh') && !event.title.toLowerCase().includes('nghị quyết') && !event.title.toLowerCase().includes('chỉ thị') && !event.title.toLowerCase().includes('luật') && !event.title.toLowerCase().includes('luận cương')) return false;
    }

    // Filter by search query
    if (!tokens.length) return true;

    // Search by exact date e.g. 3/2/1930
    if (dateMatch) {
      const day = String(parseInt(dateMatch[1], 10)).padStart(2, '0');
      const month = String(parseInt(dateMatch[2], 10)).padStart(2, '0');
      const year = dateMatch[3];
      const targetDay = `${year}-${month}-${day}`;
      const targetMonth = `${year}-${month}`;
      if (event.date === targetDay || event.date.startsWith(targetMonth)) {
        return true;
      }
    }

    // Search by year e.g. 1986
    if (yearMatch) {
      const yr = yearMatch[1];
      if (event.date.startsWith(yr) || event.sourceText.includes(yr)) {
        return true;
      }
    }

    // Combine all searchable fields
    const searchableText = normalize(`
      ${event.title} 
      ${event.date} 
      ${event.period} 
      ${event.location} 
      ${event.context} 
      ${event.quickSummary} 
      ${event.significance} 
      ${event.commonMistakes} 
      ${event.sourceText}
    `);

    // Every token must match
    return tokens.every(token => searchableText.includes(token));
  });

  // Calculate score and sort
  filtered.sort((a, b) => {
    if (tokens.length > 0) {
      const aTitleNorm = normalize(a.title);
      const bTitleNorm = normalize(b.title);
      const aScore = tokens.reduce((acc, t) => acc + (aTitleNorm.includes(t) ? 5 : 0), 0);
      const bScore = tokens.reduce((acc, t) => acc + (bTitleNorm.includes(t) ? 5 : 0), 0);
      if (bScore !== aScore) return bScore - aScore;
    }

    return sortOrder === 'desc'
      ? b.date.localeCompare(a.date)
      : a.date.localeCompare(b.date);
  });

  return filtered;
}

export function getDocument(id: string): DocumentUnit | null {
  return docMap.get(id) || null;
}

export function getDocumentsBySession(sessionNum: number): DocumentUnit[] {
  return data.documents.filter(d => d.session === sessionNum).sort((a, b) => a.unitNumber - b.unitNumber);
}

export function searchAllRawDocuments(query: string, session?: number): (DocumentUnit & { source?: SourceUnit })[] {
  const tokens = normalize(query).split(' ').filter(Boolean);
  if (!tokens.length) return [];

  return data.documents
    .filter(doc => {
      if (session && doc.session !== session) return false;
      const textNorm = normalize(`${doc.title} ${doc.text}`);
      return tokens.every(t => textNorm.includes(t));
    })
    .map(doc => ({
      ...doc,
      source: sessionMap.get(doc.session)
    }));
}

