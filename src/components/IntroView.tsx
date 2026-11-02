'use client';

import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  Compass, 
  Layers, 
  FileText,
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { INTRO_SECTIONS, IntroTopic } from '../data/intro-curriculum';

interface IntroViewProps {
  onOpenSessionViewer: (sessionNum: number, pageNum?: number) => void;
}

export const IntroView: React.FC<IntroViewProps> = ({
  onOpenSessionViewer
}) => {
  const [activeTopicId, setActiveTopicId] = useState<string>(INTRO_SECTIONS[0].id);

  const currentTopic = INTRO_SECTIONS.find(t => t.id === activeTopicId) || INTRO_SECTIONS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Banner */}
      <div className="bg-[#FAF7F2] border border-[#E7DFD5] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="p-3.5 rounded-2xl bg-crimson-primary text-white shadow-xs">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase tracking-wider text-crimson-primary">
                  Chương Nhập Môn · Session 1 &amp; 2
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-crimson-50 text-crimson-primary border border-crimson-200">
                  24 Trang tài liệu
                </span>
              </div>
              <h1 className="font-heading font-bold text-2xl sm:text-3xl text-[#111827] mt-1.5 leading-snug">
                Đối tượng, Chức năng, Nhiệm vụ &amp; Phương pháp học
              </h1>
              <p className="text-sm sm:text-base text-[#4B5563] mt-1.5">
                Nền tảng lý luận và phương pháp luận cốt lõi trước khi đi vào các mốc lịch sử cụ thể
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2.5">
            <button
              onClick={() => onOpenSessionViewer(1, 1)}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-[#D5C7B2] text-[#374151] hover:bg-crimson-primary hover:text-white transition-all shadow-xs flex items-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Xem Session 1 (11 trang)</span>
            </button>
            <button
              onClick={() => onOpenSessionViewer(2, 1)}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-[#D5C7B2] text-[#374151] hover:bg-crimson-primary hover:text-white transition-all shadow-xs flex items-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Xem Session 2 (13 trang)</span>
            </button>
          </div>
        </div>

        {/* 4 Topic Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-6">
          {INTRO_SECTIONS.map((topic, idx) => (
            <button
              key={topic.id}
              onClick={() => setActiveTopicId(topic.id)}
              className={`p-4 rounded-xl text-left transition-all border ${
                activeTopicId === topic.id
                  ? 'bg-white border-crimson-primary shadow-md ring-2 ring-crimson-primary/20'
                  : 'bg-white/70 border-[#E5DDD2] hover:bg-white hover:border-[#D5C7B2]'
              }`}
            >
              <div className="text-xs font-bold text-crimson-primary mb-1">
                Mục #{idx + 1}
              </div>
              <div className="font-heading font-bold text-sm sm:text-base text-[#111827] line-clamp-1 leading-snug">
                {topic.title.replace(/^\d+\.\s*/, '')}
              </div>
              <div className="text-xs text-[#6B7280] mt-1.5 font-medium">
                {topic.sessionRef}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Topic Content Card */}
      <div className="bg-white rounded-2xl border border-[#E7DFD5] shadow-xs p-6 sm:p-8 space-y-6">
        
        {/* Topic Header */}
        <div className="border-b border-[#E7DFD5] pb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#111827] leading-snug">
              {currentTopic.title}
            </h2>
            <div className="text-xs sm:text-sm text-amber-900 font-semibold mt-1.5">
              Căn cứ nguồn: {currentTopic.sessionRef}
            </div>
          </div>

          <button
            onClick={() => onOpenSessionViewer(currentTopic.id.includes('phuong-phap') ? 2 : 1, 3)}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-[#F4EFE6] text-[#374151] hover:bg-crimson-primary hover:text-white transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Mở slide gốc đối chiếu</span>
          </button>
        </div>

        {/* Summary Block */}
        <div className="bg-[#FCFAF6] border-l-4 border-crimson-primary p-5 rounded-r-xl">
          <h3 className="text-xs font-bold uppercase tracking-wider text-crimson-primary mb-1.5">
            Khái niệm then chốt cần nắm
          </h3>
          <p className="text-sm sm:text-base text-[#1F2937] leading-relaxed-vn">
            {currentTopic.summary}
          </p>
        </div>

        {/* Details Sections */}
        <div className="grid grid-cols-1 gap-6 pt-2">
          {currentTopic.details.map((detail, idx) => (
            <div key={idx} className="bg-[#FAF8F5] rounded-xl p-5 sm:p-6 border border-[#EDE5DA] space-y-3.5">
              <h4 className="font-heading font-bold text-base sm:text-lg text-[#111827] flex items-center">
                <span className="w-6 h-6 rounded-full bg-crimson-50 text-crimson-primary border border-crimson-200 flex items-center justify-center text-xs font-bold mr-2.5 shrink-0">
                  {idx + 1}
                </span>
                {detail.heading}
              </h4>
              <ul className="space-y-3">
                {detail.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start text-sm sm:text-base text-[#374151] leading-relaxed-vn">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0 mt-1" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Review Questions Box */}
        <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-5 sm:p-6 space-y-3.5 shadow-2xs">
          <div className="flex items-center text-amber-950 font-bold text-sm sm:text-base">
            <HelpCircle className="w-5 h-5 mr-2 text-amber-700 shrink-0" />
            <span>Câu hỏi tự luận &amp; ôn tập kiểm tra</span>
          </div>

          <div className="space-y-2.5">
            {currentTopic.reviewQuestions.map((q, qIdx) => (
              <div key={qIdx} className="bg-white p-4 rounded-xl border border-amber-200/80 text-sm sm:text-base text-[#1F2937] leading-relaxed">
                <strong className="text-amber-950">Câu {qIdx + 1}:</strong> {q}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
