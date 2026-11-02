'use client';

import React, { useState } from 'react';
import { 
  Scale, 
  AlertTriangle, 
  Lightbulb, 
  BookOpen, 
  Check, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';
import { COMPARISON_TOPICS, ComparisonTopic } from '../data/comparisons';

interface ComparisonViewProps {
  onOpenSessionViewer: (sessionNum: number, pageNum?: number) => void;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({
  onOpenSessionViewer
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(COMPARISON_TOPICS[0].id);

  const activeTopic = COMPARISON_TOPICS.find(t => t.id === selectedTopicId) || COMPARISON_TOPICS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Intro Header */}
      <div className="bg-[#FAF7F2] border border-[#E7DFD5] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex items-center space-x-3.5 mb-2">
          <div className="p-3 rounded-xl bg-crimson-primary text-white shadow-xs">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl text-[#111827] tracking-tight">
              Mục “So sánh để nhớ”
            </h1>
            <p className="text-sm sm:text-base text-[#4B5563] mt-1">
              Phân biệt chính xác các nội dung then chốt, sự kiện hay nhầm lẫn trong bài thi môn Lịch sử Đảng
            </p>
          </div>
        </div>

        {/* Topic Selector Tabs */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {COMPARISON_TOPICS.map((topic, idx) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopicId(topic.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                selectedTopicId === topic.id
                  ? 'bg-crimson-primary text-white border-crimson-primary shadow-sm'
                  : 'bg-white text-[#374151] border-[#D8CABE] hover:bg-[#F3EDE2] hover:text-[#111827]'
              }`}
            >
              <span className="font-bold mr-1.5 opacity-80">#{idx + 1}</span>
              {topic.title.split('(')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Comparison Card */}
      <div className="bg-white rounded-2xl border border-[#E7DFD5] shadow-sm overflow-hidden">
        
        {/* Topic Title Banner */}
        <div className="bg-[#FAF7F2] border-b border-[#E7DFD5] p-6 sm:p-8">
          <span className="text-xs font-bold uppercase tracking-wider text-crimson-primary">
            Chủ đề so sánh đối chiếu
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111827] mt-1.5 leading-snug">
            {activeTopic.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] mt-1.5">
            {activeTopic.subtitle}
          </p>

          {/* Source badges */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs sm:text-sm text-[#6B7280] font-medium mr-1">Tài liệu kiểm chứng:</span>
            {activeTopic.sources.map((s, idx) => (
              <button
                key={idx}
                onClick={() => onOpenSessionViewer(s.session, s.unitNumber)}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors"
                title="Bấm để mở slide kiểm chứng"
              >
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>Session {s.session} · {s.unitType === 'slide' ? 'Slide' : 'Trang'} {s.unitNumber}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mistakes & Exam tips alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 sm:p-8 bg-[#FCFAF6] border-b border-[#E7DFD5]">
          {/* Mistake alert */}
          <div className="bg-[#FFF8E6] border border-[#F5DC9A] rounded-xl p-5 flex items-start space-x-3.5 shadow-2xs">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1.5">
                Bẫy đề thi &amp; Điểm dễ nhầm
              </h4>
              <p className="text-sm text-amber-950 leading-relaxed font-medium">
                {activeTopic.mistakeAlert}
              </p>
            </div>
          </div>

          {/* Exam Tip */}
          <div className="bg-crimson-50/80 border border-crimson-200 rounded-xl p-5 flex items-start space-x-3.5 shadow-2xs">
            <Lightbulb className="w-5 h-5 text-crimson-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-crimson-primary mb-1.5">
                Từ khóa cốt lõi ôn thi nhanh
              </h4>
              <p className="text-sm text-[#4A0A10] leading-relaxed font-medium">
                {activeTopic.examTip}
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-[#FAF7F2] border-b border-[#E7DFD5]">
                <th className="py-4 px-5 sm:px-6 font-heading font-bold text-[#111827] w-52 sm:w-64 min-w-[200px]">
                  Tiêu chí đối chiếu
                </th>
                {activeTopic.columns.map((col) => (
                  <th key={col.key} className="py-4 px-5 sm:px-6 font-heading font-bold text-[#111827] min-w-[260px]">
                    <div className="space-y-1.5">
                      <div className="text-base sm:text-lg text-crimson-primary font-bold">
                        {col.label}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-normal px-2.5 py-0.5 rounded bg-white border border-[#D8CABE] text-[#4B5563]">
                          {col.periodBadge}
                        </span>
                        <span className="text-xs font-semibold text-amber-900">
                          {col.sessionRef}
                        </span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE2D7]">
              {activeTopic.rows.map((row, rowIdx) => (
                <tr 
                  key={rowIdx} 
                  className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] transition-colors'}
                >
                  <td className="py-4 sm:py-5 px-5 sm:px-6 font-semibold text-[#374151] align-top bg-[#FAF7F2]/40 border-r border-[#EAE2D7] leading-relaxed">
                    {row.criterion}
                  </td>
                  {activeTopic.columns.map((col) => (
                    <td key={col.key} className="py-4 sm:py-5 px-5 sm:px-6 text-[#1F2937] align-top leading-relaxed-vn border-r last:border-r-0 border-[#EAE2D7]">
                      {row.items[col.key] || '—'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};
