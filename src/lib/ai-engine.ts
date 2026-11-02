import { data, sessionMap, normalize, formatEventDate, EnrichedEvent, getEventEnriched } from './history-search';
import { COMPARISON_TOPICS, ComparisonTopic } from '../data/comparisons';
import { INTRO_SECTIONS } from '../data/intro-curriculum';
import { EVENT_ENRICHMENT_MAP } from '../data/event-enrichment';

export interface Citation {
  session: number;
  unitType: 'page' | 'slide';
  unitNumber: number;
  title: string;
  preview?: string;
}

export interface AIResponse {
  answer: string;
  citations: Citation[];
  suggestions: string[];
  isComparison?: boolean;
}

// Check if query is asking for comparison
function isComparisonQuery(text: string): boolean {
  const norm = normalize(text);
  const comparisonKeywords = [
    'so sanh', 'khac nhau', 'giong nhau', 'phan biet', 'doi chieu', 
    'so voi', 'diem khac', 'diem giong', 'uu diem', 'han che so voi',
    'vs', 'va'
  ];
  return comparisonKeywords.some(kw => norm.includes(kw));
}

// Find matched predefined comparison topic
function findMatchingComparison(query: string): ComparisonTopic | null {
  const norm = normalize(query);

  if ((norm.includes('cuong linh') && norm.includes('luan cuong')) || (norm.includes('1930') && norm.includes('tran phu'))) {
    return COMPARISON_TOPICS.find(t => t.id === 'cuong-linh-vs-luan-cuong') || null;
  }
  if ((norm.includes('khoan 100') && norm.includes('khoan 10')) || (norm.includes('khoan') && norm.includes('so sanh'))) {
    return COMPARISON_TOPICS.find(t => t.id === 'khoan-100-vs-khoan-10') || null;
  }
  if ((norm.includes('1930 1931') || norm.includes('xo viet nghe tinh')) && (norm.includes('1936 1939') || norm.includes('dan chu'))) {
    return COMPARISON_TOPICS.find(t => t.id === 'phong-trao-30-31-vs-36-39') || null;
  }
  if (norm.includes('trung uong 6') || norm.includes('trung uong 7') || norm.includes('trung uong 8') || norm.includes('chuyen huong chien luoc')) {
    return COMPARISON_TOPICS.find(t => t.id === 'trung-uong-6-7-8') || null;
  }
  if ((norm.includes('viet bac') && norm.includes('bien gioi')) || (norm.includes('1947') && norm.includes('1950'))) {
    return COMPARISON_TOPICS.find(t => t.id === 'viet-bac-vs-bien-gioi') || null;
  }
  if ((norm.includes('dac biet') && norm.includes('cuc bo')) || (norm.includes('viet nam hoa') && (norm.includes('cuc bo') || norm.includes('dac biet'))) || norm.includes('ba chien luoc') || norm.includes('3 chien luoc')) {
    return COMPARISON_TOPICS.find(t => t.id === 'ba-chien-luoc-chien-tranh-my') || null;
  }
  if (norm.includes('dai hoi') && (norm.includes('so sanh') || norm.includes('cac ky') || norm.includes('tong bi thu qua cac dai hoi') || norm.includes('iv den xiii'))) {
    return COMPARISON_TOPICS.find(t => t.id === 'cac-ky-dai-hoi-iv-den-xiii') || null;
  }

  return null;
}

// Generate response for predefined comparison
function generatePredefinedComparisonResponse(topic: ComparisonTopic): AIResponse {
  const citations: Citation[] = topic.sources.map(s => {
    const src = sessionMap.get(s.session);
    return {
      session: s.session,
      unitType: s.unitType as 'page' | 'slide',
      unitNumber: s.unitNumber,
      title: src ? src.title : `Session ${s.session}`
    };
  });

  let tableMarkdown = `### ⚖️ So sánh đối chiếu: ${topic.title}\n\n`;
  tableMarkdown += `> **Mục tiêu đối chiếu**: ${topic.subtitle}\n\n`;

  // Markdown Table
  const colHeaders = topic.columns.map(c => `**${c.label}** (${c.sessionRef})`).join(' | ');
  tableMarkdown += `| Tiêu chí đối chiếu | ${colHeaders} |\n`;
  tableMarkdown += `| :--- | ${topic.columns.map(() => ':---').join(' | ')} |\n`;

  topic.rows.forEach(r => {
    const cells = topic.columns.map(c => r.items[c.key]?.replace(/\|/g, '-') || '—').join(' | ');
    tableMarkdown += `| **${r.criterion}** | ${cells} |\n`;
  });

  tableMarkdown += `\n---\n\n`;
  tableMarkdown += `#### ⚠️ Điểm dễ nhầm lẫn trong bài thi:\n${topic.mistakeAlert}\n\n`;
  tableMarkdown += `#### 💡 Mẹo ôn thi & Từ khóa cốt lõi:\n${topic.examTip}\n\n`;
  tableMarkdown += `#### 📚 Căn cứ tài liệu kiểm chứng:\n`;
  citations.forEach(c => {
    tableMarkdown += `- **Session ${c.session}** (${c.title}) — *${c.unitType === 'slide' ? 'Slide' : 'Trang'} ${c.unitNumber}*\n`;
  });

  const suggestions = [
    'So sánh Cương lĩnh 2/1930 và Luận cương 10/1930',
    'Khoán 100 (1981) và Khoán 10 (1988) khác nhau điểm nào?',
    'Chiến dịch Việt Bắc 1947 khác gì Biên giới 1950?',
    '3 Chiến lược chiến tranh của Mỹ: Đặc biệt, Cục bộ, Việt Nam hóa'
  ].filter(s => !topic.title.includes(s.slice(0, 10)));

  return {
    answer: tableMarkdown,
    citations,
    suggestions: suggestions.slice(0, 3),
    isComparison: true
  };
}

// Generate answer for general / event query
export function queryPartyHistoryKnowledge(query: string): AIResponse {
  const norm = normalize(query);
  const tokens = norm.split(' ').filter(Boolean);

  if (!tokens.length) {
    return {
      answer: 'Xin vui lòng nhập câu hỏi, mốc thời gian, tên sự kiện hoặc nội dung bạn cần tra cứu hoặc so sánh trong 29 Session môn Lịch sử Đảng.',
      citations: [],
      suggestions: [
        'So sánh Cương lĩnh 2/1930 và Luận cương 10/1930',
        'Ý nghĩa Đại hội VI và ba chương trình kinh tế lớn',
        'Khoán 100 và Khoán 10 khác nhau thế nào?',
        'Hội nghị TW 8 (5/1941) có ý nghĩa gì?'
      ]
    };
  }

  // 1. Check for predefined comparisons
  const matchedComp = findMatchingComparison(query);
  if (matchedComp) {
    return generatePredefinedComparisonResponse(matchedComp);
  }

  // 2. Check for Introduction (Chương Nhập môn)
  if (norm.includes('nhap mon') || norm.includes('doi tuong') || norm.includes('chuc nang') || norm.includes('nhiem vu') || norm.includes('phuong phap nghien cuu') || norm.includes('tinh dang')) {
    const matchedIntro = INTRO_SECTIONS.find(sec => {
      const secNorm = normalize(sec.title + ' ' + sec.summary);
      return tokens.some(t => secNorm.includes(t));
    }) || INTRO_SECTIONS[0];

    const citations: Citation[] = [
      {
        session: matchedIntro.id.includes('phuong-phap') ? 2 : 1,
        unitType: 'page',
        unitNumber: matchedIntro.id.includes('phuong-phap') ? 3 : 4,
        title: matchedIntro.sessionRef
      }
    ];

    let ans = `### 📖 Chương Nhập Môn: ${matchedIntro.title}\n\n`;
    ans += `> **Căn cứ nguồn**: ${matchedIntro.sessionRef}\n\n`;
    ans += `${matchedIntro.summary}\n\n`;

    matchedIntro.details.forEach((d, i) => {
      ans += `#### ${i + 1}. ${d.heading}\n`;
      d.points.forEach(p => {
        ans += `- ${p}\n`;
      });
      ans += `\n`;
    });

    ans += `#### 💡 Câu hỏi ôn tập tự luận liên quan:\n`;
    matchedIntro.reviewQuestions.forEach((q, i) => {
      ans += `${i + 1}. ${q}\n`;
    });

    return {
      answer: ans,
      citations,
      suggestions: [
        'Đối tượng nghiên cứu của môn Lịch sử Đảng',
        '3 chức năng của môn Lịch sử Đảng',
        'Phương pháp nghiên cứu môn Lịch sử Đảng'
      ]
    };
  }

  // 3. Search events
  const stopWords = new Set(['cua', 'la', 'gi', 'y', 'trong', 'cac', 'nhung', 'cho', 've', 'nhu', 'voi', 'mot', 'duoc', 'nam', 'thoi']);
  const meaningfulTokens = tokens.filter(t => !stopWords.has(t) || /^\d+$/.test(t));
  const searchTokens = meaningfulTokens.length > 0 ? meaningfulTokens : tokens;

  // Exact year match in query e.g. 1986, 1930, 1945
  const queryYearMatch = norm.match(/\b(19\d\d|20\d\d)\b/);
  const queryYear = queryYearMatch ? queryYearMatch[1] : null;

  const allEvents = Object.values(EVENT_ENRICHMENT_MAP);
  const scoredEvents = allEvents.map(e => {
    const eNorm = normalize(`${e.title} ${e.date} ${e.location} ${e.context} ${e.significance} ${e.quickSummary} ${e.commonMistakes} ${e.keyPoints.join(' ')}`);
    const titleNorm = normalize(e.title);
    let score = 0;

    // Exact title phrase match
    if (norm.includes(titleNorm)) {
      score += 50;
    }

    // Check specific congress / conference match like 'dai hoi vi', 'dai hoi vii'
    const congressMatch = norm.match(/\bdai hoi (vi|vii|viii|ix|x|xi|xii|xiii|iv|v|ii|iii|i)\b/);
    if (congressMatch && titleNorm.includes(congressMatch[0])) {
      score += 40;
    }

    // Exact year match
    if (queryYear && e.date.startsWith(queryYear)) {
      score += 35;
    }

    searchTokens.forEach(t => {
      // Word boundary match in title
      const wordRegex = new RegExp(`\\b${t}\\b`);
      if (wordRegex.test(titleNorm)) score += 12;
      else if (titleNorm.includes(t)) score += 6;
      else if (wordRegex.test(eNorm)) score += 4;
      else if (eNorm.includes(t)) score += 1;
    });

    return { event: e, score };
  }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);

  // 4. Search raw slides for deep citation
  const scoredDocs = data.documents.map(doc => {
    const dNorm = normalize(`${doc.title} ${doc.text}`);
    let score = 0;
    tokens.forEach(t => {
      if (dNorm.includes(t)) score += 1;
      if (normalize(doc.title).includes(t)) score += 3;
    });
    return { doc, score };
  }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);

  // If top event found
  if (scoredEvents.length > 0) {
    const top = scoredEvents[0].event;
    const rawEv = data.events.find(e => e.id === top.id);
    const src = sessionMap.get(top.session);

    const citations: Citation[] = [];

    if (rawEv && rawEv.sourceRefs.length > 0) {
      rawEv.sourceRefs.forEach(ref => {
        const doc = data.documents.find(d => d.id === ref);
        if (doc) {
          citations.push({
            session: doc.session,
            unitType: doc.unitType,
            unitNumber: doc.unitNumber,
            title: doc.title,
            preview: doc.text.slice(0, 150)
          });
        }
      });
    }

    if (!citations.length) {
      citations.push({
        session: top.session,
        unitType: 'slide',
        unitNumber: 1,
        title: src ? src.title : `Session ${top.session}`
      });
    }

    // Check editorial notes
    const editorialNotes = data.editorialNotes.filter(n =>
      rawEv?.sourceRefs.some(ref => n.sourceRefs.includes(ref))
    );

    let ans = `### 🏛️ ${top.title}\n\n`;
    ans += `📅 **Thời gian**: ${formatEventDate(top.date, top.datePrecision)}`;
    if (top.location) ans += ` · 📍 **Địa điểm**: ${top.location}`;
    ans += `\n📚 **Nguồn tài liệu**: Session ${top.session} (${src?.title || ''}) — *${src?.unitType === 'slide' ? 'Slide' : 'Trang'} ${citations[0]?.unitNumber || 1}*\n\n`;

    ans += `> **Cần nhớ ôn thi**: ${top.quickSummary}\n\n`;

    ans += `#### 1. Bối cảnh lịch sử:\n${top.context}\n\n`;

    ans += `#### 2. Nội dung cốt lõi & Quyết định quan trọng:\n`;
    top.keyPoints.forEach(kp => {
      ans += `- ${kp}\n`;
    });
    ans += `\n`;

    ans += `#### 3. Ý nghĩa lịch sử:\n${top.significance}\n\n`;

    if (top.commonMistakes) {
      ans += `#### ⚠️ Điểm dễ nhầm lẫn cần lưu ý:\n${top.commonMistakes}\n\n`;
    }

    if (editorialNotes.length > 0) {
      ans += `#### 🔍 Lưu ý đối chiếu nguồn tài liệu gốc:\n`;
      editorialNotes.forEach(n => {
        ans += `- **Slide ghi**: ${n.issue}\n- **Hiệu đính xác thực**: ${n.correction}`;
        if (n.url) ans += ` ([Xem kiểm chứng](${n.url}))`;
        ans += `\n`;
      });
      ans += `\n`;
    }

    // If second event exists and is relevant, summarize it too
    if (scoredEvents.length > 1 && scoredEvents[1].score > 8) {
      const second = scoredEvents[1].event;
      ans += `---\n\n### 🔗 Sự kiện liên quan trực tiếp: **${second.title}** (${formatEventDate(second.date, second.datePrecision)})\n`;
      ans += `${second.quickSummary}\n`;
      ans += `*(Thuộc Session ${second.session})*\n\n`;
    }

    return {
      answer: ans,
      citations,
      suggestions: [
        'Bối cảnh và nội dung Đại hội VI (12/1986)',
        '3 bước đột phá tư duy kinh tế trước Đổi mới',
        'Khoán 100 (1981) và Khoán 10 (1988)',
        'Cương lĩnh năm 1991 có những đặc trưng gì?'
      ]
    };
  }

  // 5. Fallback to raw slide documents search
  if (scoredDocs.length > 0) {
    const topDoc = scoredDocs[0].doc;
    const src = sessionMap.get(topDoc.session);
    const citations: Citation[] = scoredDocs.slice(0, 3).map(d => ({
      session: d.doc.session,
      unitType: d.doc.unitType,
      unitNumber: d.doc.unitNumber,
      title: d.doc.title,
      preview: d.doc.text.slice(0, 150)
    }));

    let ans = `### 📄 Kết quả tra cứu từ tài liệu gốc\n\n`;
    ans += `Tìm thấy nội dung liên quan trong **Session ${topDoc.session}** (${src?.title}):\n\n`;
    ans += `> **Trích đoạn từ ${topDoc.unitType === 'slide' ? 'Slide' : 'Trang'} ${topDoc.unitNumber}**:\n\n`;
    ans += `\`\`\`text\n${topDoc.text}\n\`\`\`\n\n`;

    if (scoredDocs.length > 1) {
      ans += `#### Các slide/trang liên quan khác:\n`;
      scoredDocs.slice(1, 3).forEach(d => {
        ans += `- **Session ${d.doc.session}** · *${d.doc.unitType === 'slide' ? 'Slide' : 'Trang'} ${d.doc.unitNumber}*: ${d.doc.title}\n`;
      });
    }

    return {
      answer: ans,
      citations,
      suggestions: [
        'So sánh Cương lĩnh 2/1930 và Luận cương 10/1930',
        'Đại hội VI khởi xướng đường lối Đổi mới',
        'Chỉ thị 100 và Nghị quyết 10 về khoán sản phẩm'
      ]
    };
  }

  // If nothing found
  return {
    answer: `Rất tiếc tôi chưa tìm thấy tài liệu phù hợp trực tiếp với từ khóa **"${query}"** trong 29 Session.\n\nBạn có thể thử các câu hỏi mẫu sau:`,
    citations: [],
    suggestions: [
      'So sánh Cương lĩnh 2/1930 và Luận cương 10/1930',
      'Khoán 100 và Khoán 10 khác nhau thế nào?',
      'Đại hội VI diễn ra khi nào và bầu ai làm Tổng Bí thư?',
      '3 bước đột phá tư duy kinh tế trước Đổi mới',
      'Chiến dịch Việt Bắc 1947 khác gì Biên giới 1950?'
    ]
  };
}

