'use client';

import React from 'react';
import { 
  X, 
  Calendar, 
  MapPin, 
  FileText, 
  AlertTriangle, 
  ExternalLink, 
  Bookmark, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Lightbulb, 
  Compass,
  Layers,
  BookOpen
} from 'lucide-react';
import { EnrichedEvent, formatEventDate } from '../lib/history-search';
import { FormattedSlideContent } from './FormattedSlideContent';

interface EventDetailModalProps {
  event: EnrichedEvent | null;
  onClose: () => void;
  onSelectEventId: (id: string) => void;
  onOpenSessionViewer: (sessionNum: number, pageNum?: number) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  onClose,
  onSelectEventId,
  onOpenSessionViewer,
  isSaved,
  onToggleSave,
}) => {
  if (!event) return null;

  // Extract page or slide number from sourceRefs
  const primaryRef = event.sourceRefs[0] || '';
  const matchUnit = primaryRef.match(/(page|slide)-0*(\d+)/i);
  const unitNum = matchUnit ? parseInt(matchUnit[2], 10) : 1;
  const unitLabel = event.sourceUnit?.unitType === 'slide' ? 'Slide' : 'Trang';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-[#D5C7B2]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="bg-[#FAF7F2] border-b border-[#E7DFD5] px-6 py-5 flex items-start justify-between">
          <div className="space-y-2 pr-6">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-full font-semibold bg-crimson-50 text-crimson-primary border border-crimson-200">
                {event.period}
              </span>

              <span className="px-3 py-1 rounded-full bg-[#EFE9DC] text-[#44403C] border border-[#DDD3C3] font-medium">
                {event.kind === 'goal' ? 'Mục tiêu định hướng' : 'Sự kiện lịch sử'}
              </span>

              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-semibold">
                {unitLabel} {unitNum} · Session {event.session}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111827] mt-1.5 leading-snug">
              {event.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#4B5563] pt-1">
              <div className="flex items-center text-crimson-primary font-semibold">
                <Calendar className="w-4 h-4 mr-1.5" />
                <span>{formatEventDate(event.date, event.datePrecision)}</span>
                <span className="text-xs font-normal text-[#6B7280] ml-2 bg-white px-2 py-0.5 rounded border border-[#E5E7EB]">
                  {event.datePrecision === 'day' ? 'Độ chính xác: Ngày' : event.datePrecision === 'month' ? 'Độ chính xác: Tháng' : 'Độ chính xác: Năm'}
                </span>
              </div>

              {event.location && (
                <div className="flex items-center text-[#374151]">
                  <MapPin className="w-4 h-4 mr-1.5 text-gold-500 shrink-0" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={() => onToggleSave(event.id)}
              className={`p-2.5 rounded-xl border transition-colors ${
                isSaved
                  ? 'bg-amber-50 text-amber-600 border-amber-300'
                  : 'bg-white text-[#6B7280] border-[#D5C7B2] hover:bg-[#F3EDE2]'
              }`}
              title={isSaved ? 'Đã lưu trong Mốc của tôi' : 'Lưu vào Mốc của tôi'}
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-amber-500' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white text-[#6B7280] border border-[#D5C7B2] hover:bg-[#F3EDE2] hover:text-[#111827]"
              title="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-[#1F2937] text-sm sm:text-base leading-relaxed-vn">

          {/* Section 1: Ghi chú đối chiếu nguồn (Editorial Note if any) */}
          {event.editorialNotes.length > 0 && (
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-xl space-y-2">
              <div className="flex items-center text-amber-950 font-bold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 mr-2 text-amber-600 shrink-0" />
                <span>Ghi chú đối chiếu nguồn tài liệu</span>
              </div>
              {event.editorialNotes.map((note) => (
                <div key={note.id} className="text-sm text-amber-950 space-y-1.5 leading-relaxed">
                  <p><strong>Nội dung slide gốc:</strong> {note.issue}</p>
                  <p><strong>Hiệu đính đối chiếu:</strong> {note.correction}</p>
                  {note.url && (
                    <a
                      href={note.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs sm:text-sm text-crimson-primary hover:underline font-semibold mt-1"
                    >
                      <span>Xem tư liệu đối chiếu xác thực</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Section 2: Ôn nhanh - Cần nhớ */}
          <div className="bg-crimson-50/80 border border-crimson-200 rounded-xl p-5 flex items-start space-x-3.5 shadow-2xs">
            <Lightbulb className="w-5 h-5 text-crimson-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-crimson-primary mb-1">
                Cần nhớ ôn thi nhanh
              </h4>
              <p className="text-sm sm:text-base font-semibold text-[#4A0A10] leading-relaxed">
                {event.quickSummary}
              </p>
            </div>
          </div>

          {/* Section 3: Bối cảnh lịch sử */}
          <div>
            <div className="flex items-center text-[#8B1515] font-heading font-bold text-base sm:text-lg mb-2.5">
              <Compass className="w-5 h-5 mr-2 shrink-0" />
              <span>Bối cảnh lịch sử: Vì sao sự kiện diễn ra?</span>
            </div>
            <p className="text-[#374151] bg-[#FAF8F5] p-4 sm:p-5 rounded-xl border border-[#EDE5DA] text-sm sm:text-base leading-relaxed-vn">
              {event.context}
            </p>
          </div>

          {/* Section 4: Nội dung chính */}
          <div>
            <div className="flex items-center text-[#8B1515] font-heading font-bold text-base sm:text-lg mb-2.5">
              <Layers className="w-5 h-5 mr-2 shrink-0" />
              <span>Nội dung chính: Các quyết định, chủ trương quan trọng</span>
            </div>
            <ul className="space-y-2.5">
              {event.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start bg-white p-3.5 sm:p-4 rounded-xl border border-[#E7DFD5] text-sm sm:text-base leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3 shrink-0 mt-1" />
                  <span className="text-[#1F2937]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5: Ý nghĩa lịch sử */}
          <div>
            <div className="flex items-center text-[#8B1515] font-heading font-bold text-base sm:text-lg mb-2.5">
              <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600 shrink-0" />
              <span>Ý nghĩa: Sự kiện tạo chuyển biến gì?</span>
            </div>
            <p className="text-[#1F2937] bg-emerald-50/50 p-4 sm:p-5 rounded-xl border border-emerald-200/70 text-sm sm:text-base leading-relaxed-vn">
              {event.significance}
            </p>
          </div>

          {/* Section 6: Điểm dễ nhầm lẫn */}
          {event.commonMistakes && (
            <div className="bg-[#FFF9EB] border border-[#F3DEAA] rounded-xl p-5 flex items-start space-x-3.5 shadow-2xs">
              <HelpCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                  Điểm dễ nhầm lẫn cần lưu ý
                </h4>
                <p className="text-sm sm:text-base text-amber-950 font-medium leading-relaxed">
                  {event.commonMistakes}
                </p>
              </div>
            </div>
          )}

          {/* Section 7: Trích nguyên văn tài liệu gốc */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center text-[#374151] font-heading font-bold text-sm sm:text-base">
                <FileText className="w-4 h-4 mr-2 text-crimson-primary" />
                <span>Nội dung chi tiết tài liệu gốc ({unitLabel} {unitNum})</span>
              </div>
              <span className="text-xs text-[#6B7280] bg-[#F4EFE6] px-2.5 py-1 rounded font-medium">
                Văn bản gốc
              </span>
            </div>
            
            <FormattedSlideContent 
              rawText={event.sourceText}
              unitLabel={unitLabel}
              unitNumber={unitNum}
            />
          </div>

          {/* Section 8: Sự kiện liên quan */}
          {event.relatedEvents.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-2.5">
                Sự kiện liên quan trực tiếp
              </h4>
              <div className="flex flex-wrap gap-2">
                {event.relatedEvents.map((relId) => (
                  <button
                    key={relId}
                    onClick={() => onSelectEventId(relId)}
                    className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#F3EDE2] text-[#374151] hover:bg-crimson-primary hover:text-white transition-colors border border-[#DDD3C3]"
                  >
                    <span>Mở sự kiện liên quan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="bg-[#FAF7F2] border-t border-[#E7DFD5] px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs sm:text-sm text-[#6B7280]">
            Nguồn: <strong className="text-[#374151]">Session {event.session}</strong> ({event.sourceUnit?.title})
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                onClose();
                onOpenSessionViewer(event.session, unitNum);
              }}
              className="flex items-center space-x-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-crimson-primary text-white hover:bg-crimson-dark transition-colors shadow-xs"
            >
              <BookOpen className="w-4 h-4" />
              <span>Xem {unitLabel} {unitNum} trong Session {event.session}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-white border border-[#D5C7B2] text-[#374151] hover:bg-[#F3EDE2]"
            >
              Đóng
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
