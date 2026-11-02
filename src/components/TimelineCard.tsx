'use client';

import React from 'react';
import {
  Calendar,
  MapPin,
  Bookmark,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Layers,
  Lightbulb
} from 'lucide-react';
import { EnrichedEvent, formatEventDate } from '../lib/history-search';

interface TimelineCardProps {
  event: EnrichedEvent;
  readingMode: 'quick' | 'detailed';
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenDetail: (event: EnrichedEvent) => void;
  onOpenSessionViewer: (sessionNum: number, pageNum?: number) => void;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  event,
  readingMode,
  isSaved,
  onToggleSave,
  onOpenDetail,
  onOpenSessionViewer,
}) => {
  const primaryRef = event.sourceRefs[0] || '';
  const matchUnit = primaryRef.match(/(page|slide)-0*(\d+)/i);
  const unitNum = matchUnit ? parseInt(matchUnit[2], 10) : 1;
  const unitLabel = event.sourceUnit?.unitType === 'slide' ? 'Slide' : 'Trang';

  return (
    <div className="relative bg-white rounded-xl border border-[#E7DFD5] hover:border-crimson-primary/40 hover:shadow-md transition-all p-5 sm:p-6 group">

      {/* Top Meta Row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex flex-wrap items-center gap-2">
          {/* Date Badge */}
          <div className="inline-flex items-center text-xs sm:text-sm font-semibold px-3 py-1 rounded-lg bg-crimson-primary text-white shadow-2xs tracking-tight">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            <span>{formatEventDate(event.date, event.datePrecision)}</span>
          </div>

          {/* Period Badge */}
          <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#FAF7F2] text-[#4B5563] border border-[#E5E7EB]">
            {event.period}
          </span>

          {/* Session / Slide Badge */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenSessionViewer(event.session, unitNum);
            }}
            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors"
            title="Bấm để mở xem slide trong Session này"
          >
            Session {event.session} · {unitLabel} {unitNum}
          </button>

          {/* Editorial Alert Badge */}
          {event.editorialNotes.length > 0 && (
            <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md bg-amber-100 text-amber-950 border border-amber-300">
              <AlertTriangle className="w-3.5 h-3.5 mr-1.5 text-amber-700" />
              Lưu ý đối chiếu nguồn
            </span>
          )}
        </div>

        {/* Bookmark Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(event.id);
          }}
          className={`p-2 rounded-lg border transition-colors ${isSaved
              ? 'bg-amber-50 text-amber-600 border-amber-300'
              : 'bg-white text-[#9CA3AF] border-[#E5E7EB] hover:text-crimson-primary hover:border-crimson-200'
            }`}
          title={isSaved ? 'Bỏ lưu mốc này' : 'Lưu vào Mốc của tôi'}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500' : ''}`} />
        </button>
      </div>

      {/* Title */}
      <h3
        onClick={() => onOpenDetail(event)}
        className="font-heading font-bold text-lg sm:text-xl text-[#111827] hover:text-crimson-primary cursor-pointer transition-colors leading-snug mb-2.5"
      >
        {event.title}
      </h3>

      {/* Location if any */}
      {event.location && (
        <div className="flex items-center text-xs sm:text-sm text-[#4B5563] mb-3">
          <MapPin className="w-4 h-4 mr-1.5 text-gold-500 shrink-0" />
          <span>{event.location}</span>
        </div>
      )}

      {/* QUICK READING MODE */}
      {readingMode === 'quick' && (
        <div className="space-y-3">
          <p className="text-sm text-[#374151] leading-relaxed line-clamp-3">
            {event.quickSummary}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-[#F3EDE2] text-xs sm:text-sm">
            <span className="text-[#6B7280]">
              Bấm vào tiêu đề để xem bối cảnh, ý nghĩa &amp; đối chiếu
            </span>
            <button
              onClick={() => onOpenDetail(event)}
              className="inline-flex items-center text-crimson-primary font-semibold hover:text-crimson-dark group-hover:translate-x-0.5 transition-all"
            >
              <span>Xem chi tiết</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )}

      {/* DETAILED READING MODE */}
      {readingMode === 'detailed' && (
        <div className="space-y-3.5 pt-1">
          {/* Cần nhớ */}
          <div className="bg-crimson-50/70 p-3.5 rounded-xl border border-crimson-100 flex items-start space-x-2.5">
            <Lightbulb className="w-4 h-4 text-crimson-primary shrink-0 mt-0.5" />
            <p className="text-sm text-[#580A11] font-medium leading-relaxed">
              {event.quickSummary}
            </p>
          </div>

          {/* Context Preview */}
          <div className="text-sm text-[#374151] leading-relaxed">
            <strong className="text-[#111827] font-semibold">Bối cảnh lịch sử:</strong> {event.context}
          </div>

          {/* Key points preview */}
          <div className="space-y-1.5">
            <div className="text-xs sm:text-sm font-semibold text-[#374151] flex items-center">
              <Layers className="w-4 h-4 mr-1.5 text-crimson-primary" />
              Nội dung chính:
            </div>
            <ul className="space-y-1.5 pl-1">
              {event.keyPoints.slice(0, 2).map((kp, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-[#374151] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{kp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Action Strip */}
          <div className="flex items-center justify-between pt-3 border-t border-[#F3EDE2] text-xs sm:text-sm">
            <div className="text-[#6B7280] truncate max-w-[200px] sm:max-w-xs">
              File nguồn: <span className="font-medium text-[#374151]">{event.sourceUnit?.fileName}</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <button
                onClick={() => onOpenSessionViewer(event.session, unitNum)}
                className="inline-flex items-center text-xs sm:text-sm text-[#4B5563] hover:text-crimson-primary font-medium transition-colors"
                title="Mở tài liệu slide gốc"
              >
                <BookOpen className="w-4 h-4 mr-1" />
                <span>Xem slide</span>
              </button>
              <button
                onClick={() => onOpenDetail(event)}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-crimson-primary text-white font-medium hover:bg-crimson-dark transition-colors shadow-2xs text-xs sm:text-sm"
              >
                <span>Học chi tiết</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
