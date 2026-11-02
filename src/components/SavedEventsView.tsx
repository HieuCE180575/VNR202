'use client';

import React from 'react';
import { 
  Bookmark, 
  Trash2, 
  Printer, 
  ArrowRight, 
  Calendar, 
  BookOpen, 
  Lightbulb, 
  FileText 
} from 'lucide-react';
import { EnrichedEvent, formatEventDate } from '../lib/history-search';

interface SavedEventsViewProps {
  savedEvents: EnrichedEvent[];
  onRemoveSave: (id: string) => void;
  onClearAll: () => void;
  onOpenDetail: (event: EnrichedEvent) => void;
  onOpenSessionViewer: (sessionNum: number, pageNum?: number) => void;
  onGoToTimeline: () => void;
}

export const SavedEventsView: React.FC<SavedEventsViewProps> = ({
  savedEvents,
  onRemoveSave,
  onClearAll,
  onOpenDetail,
  onOpenSessionViewer,
  onGoToTimeline
}) => {
  const handlePrint = () => {
    window.print();
  };

  if (savedEvents.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200 shadow-xs">
          <Bookmark className="w-8 h-8" />
        </div>
        <h2 className="font-heading font-bold text-2xl text-[#111827]">
          Chưa có mốc thời gian nào được lưu
        </h2>
        <p className="text-sm sm:text-base text-[#6B7280] max-w-md mx-auto leading-relaxed">
          Khi tra cứu hoặc xem dòng thời gian, bấm vào biểu tượng Bookmark trên mỗi mốc để đưa vào danh sách &ldquo;Mốc của tôi&rdquo; phục vụ ôn thi cấp tốc.
        </p>
        <button
          onClick={onGoToTimeline}
          className="mt-4 px-6 py-3 rounded-xl font-semibold bg-crimson-primary text-white hover:bg-crimson-dark transition-colors shadow-xs"
        >
          Khám phá Dòng thời gian ngay
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Banner */}
      <div className="bg-[#FAF7F2] border border-[#E7DFD5] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold uppercase tracking-wider text-crimson-primary">
              Mục ôn tập cá nhân
            </span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300">
              {savedEvents.length} mốc đã lưu
            </span>
          </div>
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-[#111827] mt-1.5 leading-snug">
            Mốc của tôi — Sổ tay ôn thi
          </h1>
          <p className="text-sm sm:text-base text-[#4B5563] mt-1.5">
            Tổng hợp các sự kiện, đại hội và văn kiện bạn đã đánh dấu để ôn nhanh trước kỳ thi
          </p>
        </div>

        <div className="flex items-center space-x-2.5">
          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-[#D5C7B2] text-[#374151] hover:bg-[#F3EDE2] transition-colors shadow-xs"
          >
            <Printer className="w-4 h-4" />
            <span>In / Xuất PDF ôn bài</span>
          </button>
          <button
            onClick={onClearAll}
            className="flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-red-700 hover:bg-red-50 border border-transparent hover:border-red-200 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            <span>Xóa tất cả</span>
          </button>
        </div>
      </div>

      {/* Cards List */}
      <div className="space-y-4">
        {savedEvents.map((event) => {
          const primaryRef = event.sourceRefs[0] || '';
          const matchUnit = primaryRef.match(/(page|slide)-0*(\d+)/i);
          const unitNum = matchUnit ? parseInt(matchUnit[2], 10) : 1;
          const unitLabel = event.sourceUnit?.unitType === 'slide' ? 'Slide' : 'Trang';

          return (
            <div 
              key={event.id}
              className="bg-white rounded-xl border border-[#E7DFD5] p-5 sm:p-6 shadow-xs hover:border-crimson-primary/40 transition-all space-y-3.5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center text-xs sm:text-sm font-semibold px-3 py-1 rounded-lg bg-crimson-primary text-white">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {formatEventDate(event.date, event.datePrecision)}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-[#FAF7F2] text-[#4B5563] border border-[#E7DFD5]">
                    {event.period}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                    Session {event.session} · {unitLabel} {unitNum}
                  </span>
                </div>

                <button
                  onClick={() => onRemoveSave(event.id)}
                  className="text-[#9CA3AF] hover:text-red-600 p-1.5 rounded-lg transition-colors"
                  title="Bỏ lưu mốc này"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <h3 
                onClick={() => onOpenDetail(event)}
                className="font-heading font-bold text-lg sm:text-xl text-[#111827] hover:text-crimson-primary cursor-pointer transition-colors leading-snug"
              >
                {event.title}
              </h3>

              <div className="bg-crimson-50/70 p-3.5 rounded-xl border border-crimson-100 flex items-start space-x-2.5">
                <Lightbulb className="w-4 h-4 text-crimson-primary shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-[#580A11] font-medium leading-relaxed">
                  {event.quickSummary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2.5 border-t border-[#F3EDE2] text-xs sm:text-sm">
                <button
                  onClick={() => onOpenSessionViewer(event.session, unitNum)}
                  className="text-[#4B5563] hover:text-crimson-primary font-medium flex items-center space-x-1.5"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Xem tài liệu Session {event.session}</span>
                </button>

                <button
                  onClick={() => onOpenDetail(event)}
                  className="inline-flex items-center text-crimson-primary font-semibold hover:text-crimson-dark"
                >
                  <span>Mở chi tiết &amp; Bối cảnh</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
