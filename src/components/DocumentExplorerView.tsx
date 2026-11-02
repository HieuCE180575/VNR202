'use client';

import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Search, 
  ChevronRight, 
  AlertTriangle, 
  ExternalLink, 
  Calendar, 
  Layers, 
  Filter,
  CheckCircle,
  Hash
} from 'lucide-react';
import { data, sessionMap, DocumentUnit, SourceUnit } from '../lib/history-search';
import { FormattedSlideContent } from './FormattedSlideContent';

interface DocumentExplorerViewProps {
  initialSession?: number;
  initialUnitNumber?: number;
}

export const DocumentExplorerView: React.FC<DocumentExplorerViewProps> = ({
  initialSession = 1,
  initialUnitNumber = 1
}) => {
  const [selectedSessionNum, setSelectedSessionNum] = useState<number>(initialSession);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [docSearchQuery, setDocSearchQuery] = useState<string>('');
  const [chapterFilter, setChapterFilter] = useState<number | 'all'>('all');

  // Filter sources by chapter
  const filteredSources = useMemo(() => {
    return data.sources.filter(s => {
      if (chapterFilter !== 'all' && s.chapter !== chapterFilter) return false;
      return true;
    });
  }, [chapterFilter]);

  // Documents of currently selected session
  const sessionDocs = useMemo(() => {
    return data.documents
      .filter(d => d.session === selectedSessionNum)
      .sort((a, b) => a.unitNumber - b.unitNumber);
  }, [selectedSessionNum]);

  // Search inside documents (across current session or all)
  const matchingDocs = useMemo(() => {
    if (!docSearchQuery.trim()) return sessionDocs;
    const q = docSearchQuery.toLowerCase();
    return sessionDocs.filter(d => 
      d.title.toLowerCase().includes(q) || 
      d.text.toLowerCase().includes(q)
    );
  }, [sessionDocs, docSearchQuery]);

  // Current selected document
  const activeDoc = useMemo(() => {
    if (selectedDocId) {
      const found = sessionDocs.find(d => d.id === selectedDocId);
      if (found) return found;
    }
    return sessionDocs[0] || null;
  }, [selectedDocId, sessionDocs]);

  const currentSource = sessionMap.get(selectedSessionNum);

  // Editorial notes for active document
  const activeDocNotes = useMemo(() => {
    if (!activeDoc) return [];
    return data.editorialNotes.filter(n => n.sourceRefs.includes(activeDoc.id));
  }, [activeDoc]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Banner */}
      <div className="bg-[#FAF7F2] border border-[#E7DFD5] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold uppercase tracking-wider text-crimson-primary">
              Kho tư liệu gốc
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-crimson-50 text-crimson-primary border border-crimson-200">
              29 Sessions · 435 Slides/Trang
            </span>
          </div>
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-[#111827] mt-1.5 leading-snug">
            Tra cứu trực tiếp 29 tài liệu &amp; văn bản nguồn
          </h1>
          <p className="text-sm sm:text-base text-[#4B5563] mt-1.5">
            Mở xem từng trang, từng slide với nội dung trích xuất 100% nguyên gốc kèm đối chiếu hiệu đính
          </p>
        </div>

        {/* Chapter Filter Pill */}
        <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#D5C7B2] text-xs sm:text-sm">
          <button
            onClick={() => setChapterFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              chapterFilter === 'all' ? 'bg-crimson-primary text-white' : 'text-[#4B5563] hover:bg-[#F3EDE2]'
            }`}
          >
            Tất cả (29)
          </button>
          <button
            onClick={() => setChapterFilter(0)}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              chapterFilter === 0 ? 'bg-crimson-primary text-white' : 'text-[#4B5563] hover:bg-[#F3EDE2]'
            }`}
          >
            Chương 0
          </button>
          <button
            onClick={() => setChapterFilter(1)}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              chapterFilter === 1 ? 'bg-crimson-primary text-white' : 'text-[#4B5563] hover:bg-[#F3EDE2]'
            }`}
          >
            Chương 1
          </button>
          <button
            onClick={() => setChapterFilter(2)}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              chapterFilter === 2 ? 'bg-crimson-primary text-white' : 'text-[#4B5563] hover:bg-[#F3EDE2]'
            }`}
          >
            Chương 2
          </button>
          <button
            onClick={() => setChapterFilter(3)}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              chapterFilter === 3 ? 'bg-crimson-primary text-white' : 'text-[#4B5563] hover:bg-[#F3EDE2]'
            }`}
          >
            Chương 3
          </button>
        </div>
      </div>

      {/* Main 3-column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Column 1: 29 Sessions List (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-[#E7DFD5] shadow-xs flex flex-col h-[700px] overflow-hidden">
          <div className="p-4 bg-[#FAF7F2] border-b border-[#E7DFD5]">
            <h3 className="font-heading font-bold text-base text-[#111827] flex items-center justify-between">
              <span>Danh mục 29 Session</span>
              <span className="text-xs font-normal text-[#6B7280]">{filteredSources.length} nguồn</span>
            </h3>
          </div>

          <div className="overflow-y-auto divide-y divide-[#EAE2D7] p-2 space-y-1">
            {filteredSources.map((s) => {
              const isSelected = s.session === selectedSessionNum;
              return (
                <div
                  key={s.id}
                  onClick={() => {
                    setSelectedSessionNum(s.session);
                    setSelectedDocId(null);
                  }}
                  className={`p-3.5 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-crimson-primary text-white shadow-xs'
                      : 'hover:bg-[#FAF8F5] text-[#1F2937]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-bold ${isSelected ? 'text-amber-200' : 'text-crimson-primary'}`}>
                      Session {s.session}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded font-medium uppercase ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#EFE9DC] text-[#4B5563]'
                    }`}>
                      {s.format.toUpperCase()} · {s.unitCount} {s.unitType === 'slide' ? 'slides' : 'trang'}
                    </span>
                  </div>

                  <div className="font-heading font-semibold text-sm sm:text-base line-clamp-1 leading-snug">
                    {s.title}
                  </div>

                  <div className={`text-xs mt-1.5 truncate ${isSelected ? 'text-white/80' : 'text-[#6B7280]'}`}>
                    File: {s.fileName}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Column 2: Slides of Selected Session (3 cols) */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-[#E7DFD5] shadow-xs flex flex-col h-[700px] overflow-hidden">
          <div className="p-3.5 bg-[#FAF7F2] border-b border-[#E7DFD5] space-y-2">
            <div className="text-xs font-bold text-crimson-primary flex items-center justify-between">
              <span>Session {selectedSessionNum}</span>
              <span className="text-[#6B7280] font-normal">{sessionDocs.length} slides</span>
            </div>

            {/* In-session Search */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-2.5 top-2.5 text-[#9CA3AF]" />
              <input
                type="text"
                value={docSearchQuery}
                onChange={(e) => setDocSearchQuery(e.target.value)}
                placeholder="Lọc từ trong slide..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#D5C7B2] rounded-lg focus:outline-none focus:border-crimson-primary text-[#1F2937]"
              />
            </div>
          </div>

          <div className="overflow-y-auto p-2 space-y-1.5">
            {matchingDocs.map((doc) => {
              const isDocActive = activeDoc?.id === doc.id;
              const hasNotes = data.editorialNotes.some(n => n.sourceRefs.includes(doc.id));

              return (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDocId(doc.id)}
                  className={`p-3 rounded-xl cursor-pointer border text-xs transition-all ${
                    isDocActive
                      ? 'bg-amber-50 border-amber-400 text-amber-950 font-semibold shadow-2xs'
                      : 'bg-[#FAF8F5] border-[#E8DFD1] hover:bg-white text-[#374151]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-crimson-primary text-xs">
                      {doc.unitType === 'slide' ? 'Slide' : 'Trang'} #{doc.unitNumber}
                    </span>
                    {hasNotes && (
                      <span className="text-[10px] bg-amber-200 text-amber-950 px-1.5 py-0.2 rounded font-bold">
                        Lưu ý
                      </span>
                    )}
                  </div>
                  <p className="line-clamp-2 text-xs text-[#4B5563] leading-relaxed">
                    {doc.text.replace(/\n/g, ' ') || '(Trang bìa hoặc hình ảnh)'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Column 3: Slide Content & Inspector (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E7DFD5] shadow-xs flex flex-col h-[700px] overflow-hidden">
          {activeDoc ? (
            <>
              {/* Header */}
              <div className="p-4 sm:p-5 bg-[#FAF7F2] border-b border-[#E7DFD5] flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="font-bold text-crimson-primary">
                      Session {activeDoc.session}
                    </span>
                    <span className="text-[#9CA3AF]">·</span>
                    <span className="font-semibold text-[#111827]">
                      {activeDoc.unitType === 'slide' ? 'Slide' : 'Trang'} {activeDoc.unitNumber} / {currentSource?.unitCount}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-[#111827] mt-1.5 leading-snug">
                    {activeDoc.title}
                  </h4>
                </div>

                <div className="text-right text-xs text-[#6B7280]">
                  ID: <span className="font-mono">{activeDoc.id}</span>
                </div>
              </div>

              {/* Body */}
              <div className="overflow-y-auto p-5 sm:p-6 space-y-5 flex-1 text-sm sm:text-base">
                
                {/* Editorial Notes on this unit if any */}
                {activeDocNotes.length > 0 && (
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl space-y-1.5">
                    <div className="flex items-center text-xs sm:text-sm font-bold text-amber-950">
                      <AlertTriangle className="w-4 h-4 mr-2 text-amber-600 shrink-0" />
                      Lưu ý kiểm chứng đối chiếu trên slide này:
                    </div>
                    {activeDocNotes.map(n => (
                      <div key={n.id} className="text-xs sm:text-sm text-amber-950 space-y-1 leading-relaxed">
                        <p><strong>Slide ghi:</strong> {n.issue}</p>
                        <p><strong>Hiệu đính:</strong> {n.correction}</p>
                        {n.url && (
                          <a 
                            href={n.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center text-crimson-primary hover:underline font-semibold mt-1"
                          >
                            <span>Mở nguồn đối chiếu</span>
                            <ExternalLink className="w-3.5 h-3.5 ml-1" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Raw Extracted Slide Content */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-2 flex items-center justify-between">
                    <span>Nội dung chi tiết slide</span>
                    <span className="text-xs font-normal lowercase bg-[#F4EFE6] px-2.5 py-0.5 rounded text-[#4B5563]">
                      Tài liệu gốc
                    </span>
                  </div>
                  <FormattedSlideContent 
                    rawText={activeDoc.text}
                    unitLabel={activeDoc.unitType === 'slide' ? 'Slide' : 'Trang'}
                    unitNumber={activeDoc.unitNumber}
                  />
                </div>

                {/* Date mentions on this slide */}
                {activeDoc.dateMentions && activeDoc.dateMentions.length > 0 && (
                  <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E7DFD5]">
                    <div className="text-xs sm:text-sm font-semibold text-[#374151] flex items-center mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-gold-500 shrink-0" />
                      Mốc thời gian nhận diện trên slide:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeDoc.dateMentions.map((dm, i) => (
                        <span key={i} className="text-xs sm:text-sm px-2.5 py-1 rounded bg-white border border-[#D5C7B2] font-mono text-crimson-primary font-medium">
                          {dm}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Footer info */}
              <div className="p-3.5 bg-[#FAF7F2] border-t border-[#E7DFD5] text-xs text-[#6B7280] flex items-center justify-between">
                <span>File: {currentSource?.fileName}</span>
                <span>SHA-256: {currentSource?.sha256.substring(0, 10)}...</span>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center p-8 text-center text-[#6B7280] text-sm">
              Chọn một slide để xem nội dung chi tiết
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
