'use client';

import React from 'react';
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  Scale, 
  GraduationCap, 
  Zap, 
  Bot 
} from 'lucide-react';

export type ActiveTab = 'timeline' | 'comparison' | 'chat' | 'intro' | 'documents' | 'saved';
export type ReadingMode = 'quick' | 'detailed';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  readingMode: ReadingMode;
  setReadingMode: (mode: ReadingMode) => void;
  savedCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  readingMode,
  setReadingMode
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DFD5] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Title (Single Line, Clean) */}
          <div 
            onClick={() => setActiveTab('timeline')}
            className="flex items-center space-x-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-crimson-primary flex items-center justify-center text-white shadow-md group-hover:bg-crimson-dark transition-colors shrink-0">
              <span className="font-heading font-bold text-xl tracking-tighter">Đ</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="font-heading font-bold text-lg sm:text-xl text-[#111827] tracking-tight whitespace-nowrap">
                Dòng thời gian Lịch sử Đảng
              </span>
              <span className="hidden xl:inline-flex text-[11px] font-bold uppercase px-2 py-0.5 rounded-full bg-crimson-50 text-crimson-primary border border-crimson-200 whitespace-nowrap">
                29 Sessions
              </span>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-1.5 mx-2">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${
                activeTab === 'timeline'
                  ? 'bg-crimson-primary text-white shadow-xs'
                  : 'text-[#374151] hover:bg-[#F3EDE2] hover:text-[#111827]'
              }`}
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Dòng thời gian</span>
            </button>

            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${
                activeTab === 'chat'
                  ? 'bg-crimson-primary text-white shadow-xs'
                  : 'text-[#374151] hover:bg-[#F3EDE2] hover:text-[#111827]'
              }`}
            >
              <Bot className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Trợ lý AI</span>
            </button>

            <button
              onClick={() => setActiveTab('comparison')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${
                activeTab === 'comparison'
                  ? 'bg-crimson-primary text-white shadow-xs'
                  : 'text-[#374151] hover:bg-[#F3EDE2] hover:text-[#111827]'
              }`}
            >
              <Scale className="w-4 h-4 shrink-0" />
              <span>So sánh để nhớ</span>
            </button>

            <button
              onClick={() => setActiveTab('intro')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${
                activeTab === 'intro'
                  ? 'bg-crimson-primary text-white shadow-xs'
                  : 'text-[#374151] hover:bg-[#F3EDE2] hover:text-[#111827]'
              }`}
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>Nhập môn</span>
            </button>

            <button
              onClick={() => setActiveTab('documents')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${
                activeTab === 'documents'
                  ? 'bg-crimson-primary text-white shadow-xs'
                  : 'text-[#374151] hover:bg-[#F3EDE2] hover:text-[#111827]'
              }`}
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>29 Nguồn gốc</span>
            </button>
          </nav>

          {/* Reading Mode Switch (Single Line, Clean) */}
          <div className="flex items-center space-x-2 shrink-0">
            <div className="bg-[#EFE9DC] p-1 rounded-xl flex items-center border border-[#E2D8C9] shrink-0">
              <button
                onClick={() => setReadingMode('quick')}
                title="Hiện ngày, sự kiện, tóm tắt và nguồn để tra cứu nhanh"
                className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  readingMode === 'quick'
                    ? 'bg-white text-crimson-primary shadow-xs'
                    : 'text-[#4B5563] hover:text-[#111827]'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Tra cứu nhanh</span>
              </button>
              <button
                onClick={() => setReadingMode('detailed')}
                title="Mở bối cảnh, nội dung, ý nghĩa, cần nhớ và dễ nhầm để học sâu"
                className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  readingMode === 'detailed'
                    ? 'bg-white text-crimson-primary shadow-xs'
                    : 'text-[#4B5563] hover:text-[#111827]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-crimson-primary shrink-0" />
                <span>Học chi tiết</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="lg:hidden flex items-center justify-around py-2 border-t border-[#EAE2D7] overflow-x-auto gap-1 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex flex-col items-center py-1 px-2.5 rounded-lg whitespace-nowrap ${
              activeTab === 'timeline' ? 'text-crimson-primary font-bold' : 'text-[#4B5563]'
            }`}
          >
            <Calendar className="w-4 h-4 mb-0.5" />
            <span>Thời gian</span>
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex flex-col items-center py-1 px-2.5 rounded-lg whitespace-nowrap ${
              activeTab === 'chat' ? 'text-crimson-primary font-bold' : 'text-[#4B5563]'
            }`}
          >
            <Bot className="w-4 h-4 mb-0.5 text-gold-500" />
            <span>Trợ lý AI</span>
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`flex flex-col items-center py-1 px-2.5 rounded-lg whitespace-nowrap ${
              activeTab === 'comparison' ? 'text-crimson-primary font-bold' : 'text-[#4B5563]'
            }`}
          >
            <Scale className="w-4 h-4 mb-0.5" />
            <span>So sánh</span>
          </button>
          <button
            onClick={() => setActiveTab('intro')}
            className={`flex flex-col items-center py-1 px-2.5 rounded-lg whitespace-nowrap ${
              activeTab === 'intro' ? 'text-crimson-primary font-bold' : 'text-[#4B5563]'
            }`}
          >
            <GraduationCap className="w-4 h-4 mb-0.5" />
            <span>Nhập môn</span>
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`flex flex-col items-center py-1 px-2.5 rounded-lg whitespace-nowrap ${
              activeTab === 'documents' ? 'text-crimson-primary font-bold' : 'text-[#4B5563]'
            }`}
          >
            <FileText className="w-4 h-4 mb-0.5" />
            <span>29 Nguồn</span>
          </button>
        </div>

      </div>
    </header>
  );
};
