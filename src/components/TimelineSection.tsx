'use client';

import React, { useState } from 'react';
import { 
  Filter, 
  ArrowUpDown, 
  Calendar, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { EnrichedEvent, PERIODS } from '../lib/history-search';
import { TimelineCard } from './TimelineCard';

interface TimelineSectionProps {
  events: EnrichedEvent[];
  selectedPeriod: string;
  setSelectedPeriod: (p: string) => void;
  selectedKind: string;
  setSelectedKind: (k: string) => void;
  selectedSession: number | 'all';
  setSelectedSession: (s: number | 'all') => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
  includeGoals: boolean;
  setIncludeGoals: (inc: boolean) => void;
  readingMode: 'quick' | 'detailed';
  savedIds: Set<string>;
  onToggleSave: (id: string) => void;
  onOpenDetail: (event: EnrichedEvent) => void;
  onOpenSessionViewer: (sessionNum: number, pageNum?: number) => void;
  onResetFilters: () => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  events,
  selectedPeriod,
  setSelectedPeriod,
  selectedKind,
  setSelectedKind,
  selectedSession,
  setSelectedSession,
  sortOrder,
  setSortOrder,
  includeGoals,
  setIncludeGoals,
  readingMode,
  savedIds,
  onToggleSave,
  onOpenDetail,
  onOpenSessionViewer,
  onResetFilters,
}) => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Group events by period
  const groupedEvents = React.useMemo(() => {
    const groups: Record<string, EnrichedEvent[]> = {};
    events.forEach(e => {
      const p = e.period;
      if (!groups[p]) groups[p] = [];
      groups[p].push(e);
    });
    return groups;
  }, [events]);

  const periodKeys = Object.keys(groupedEvents);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Mobile filter toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-[#D5C7B2] text-sm font-semibold text-[#111827] shadow-xs"
        >
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-crimson-primary" />
            <span>Bộ lọc giai đoạn &amp; sự kiện</span>
            {(selectedPeriod !== 'Tất cả giai đoạn' || selectedKind !== 'all' || selectedSession !== 'all') && (
              <span className="w-2.5 h-2.5 rounded-full bg-crimson-primary"></span>
            )}
          </div>
          {mobileFilterOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT SIDEBAR: FILTERS (4 cols on desktop) */}
        <div className={`lg:col-span-4 space-y-6 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white rounded-2xl border border-[#E7DFD5] p-5 sm:p-6 shadow-xs space-y-5 sticky top-24">
            
            {/* Filter Header */}
            <div className="flex items-center justify-between border-b border-[#E7DFD5] pb-3">
              <div className="flex items-center space-x-2 font-heading font-bold text-base sm:text-lg text-[#111827]">
                <Filter className="w-4 h-4 text-crimson-primary" />
                <span>Bộ lọc phân loại</span>
              </div>
              <button
                onClick={onResetFilters}
                className="text-xs font-medium text-[#6B7280] hover:text-crimson-primary flex items-center space-x-1"
                title="Đặt lại bộ lọc"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Đặt lại</span>
              </button>
            </div>

            {/* Filter 1: Giai đoạn (Periods) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4B5563] mb-2.5">
                Giai đoạn lịch sử
              </label>
              <div className="space-y-1">
                {PERIODS.map((period) => {
                  const isPeriodActive = selectedPeriod === period;
                  return (
                    <button
                      key={period}
                      onClick={() => setSelectedPeriod(period)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-between ${
                        isPeriodActive
                          ? 'bg-crimson-primary text-white font-semibold shadow-xs'
                          : 'text-[#374151] hover:bg-[#FAF7F2] font-medium'
                      }`}
                    >
                      <span>{period}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter 2: Loại nội dung (Kind) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4B5563] mb-2">
                Loại sự kiện
              </label>
              <select
                value={selectedKind}
                onChange={(e) => setSelectedKind(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF7F2] border border-[#D5C7B2] rounded-xl focus:outline-none focus:border-crimson-primary text-[#111827] font-medium"
              >
                <option value="all">Tất cả các loại</option>
                <option value="event">Sự kiện lịch sử</option>
                <option value="dai-hoi">Đại hội &amp; Hội nghị TW</option>
                <option value="van-kien">Cương lĩnh &amp; Văn kiện</option>
                <option value="goal">Mục tiêu định hướng (2025/2030/2045)</option>
              </select>
            </div>

            {/* Filter 3: Session nguồn (1 to 29) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4B5563] mb-2">
                Session tài liệu gốc
              </label>
              <select
                value={selectedSession}
                onChange={(e) => setSelectedSession(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF7F2] border border-[#D5C7B2] rounded-xl focus:outline-none focus:border-crimson-primary text-[#111827] font-medium"
              >
                <option value="all">Tất cả 29 Sessions</option>
                {Array.from({ length: 29 }, (_, i) => i + 1).map((sNum) => (
                  <option key={sNum} value={sNum}>
                    Session {sNum}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter 4: Sắp xếp thời gian */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4B5563] mb-2">
                Thứ tự hiển thị
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSortOrder('asc')}
                  className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl border text-center transition-colors ${
                    sortOrder === 'asc'
                      ? 'bg-crimson-primary text-white border-crimson-primary shadow-xs'
                      : 'bg-[#FAF7F2] border-[#D5C7B2] text-[#374151] hover:bg-[#F3EDE2]'
                  }`}
                >
                  Cũ nhất trước ↑
                </button>
                <button
                  onClick={() => setSortOrder('desc')}
                  className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl border text-center transition-colors ${
                    sortOrder === 'desc'
                      ? 'bg-crimson-primary text-white border-crimson-primary shadow-xs'
                      : 'bg-[#FAF7F2] border-[#D5C7B2] text-[#374151] hover:bg-[#F3EDE2]'
                  }`}
                >
                  Mới nhất trước ↓
                </button>
              </div>
            </div>

            {/* Filter 5: Toggle Goals */}
            <div className="pt-2 border-t border-[#E7DFD5]">
              <label className="flex items-center space-x-2 text-xs sm:text-sm text-[#374151] cursor-pointer font-medium">
                <input
                  type="checkbox"
                  checked={includeGoals}
                  onChange={(e) => setIncludeGoals(e.target.checked)}
                  className="rounded text-crimson-primary focus:ring-crimson-primary"
                />
                <span>Hiển thị mục tiêu định hướng (2025, 2030, 2045)</span>
              </label>
            </div>

          </div>
        </div>

        {/* RIGHT AREA: TIMELINE CARDS (8 cols on desktop) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Header count info */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-[#4B5563] bg-white px-5 py-3.5 rounded-xl border border-[#E7DFD5] shadow-2xs">
            <span>
              Đang hiển thị <strong className="text-crimson-primary font-bold">{events.length}</strong> mốc sự kiện
              {selectedPeriod !== 'Tất cả giai đoạn' && ` thuộc giai đoạn ${selectedPeriod}`}
            </span>
            <span className="text-crimson-primary font-semibold">
              Chế độ: {readingMode === 'quick' ? '⚡ Tra cứu nhanh' : '📚 Học chi tiết'}
            </span>
          </div>

          {events.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#E7DFD5] p-12 text-center space-y-4">
              <Calendar className="w-12 h-12 text-[#9CA3AF] mx-auto" />
              <h3 className="font-heading font-bold text-xl text-[#111827]">
                Không tìm thấy mốc thời gian phù hợp
              </h3>
              <p className="text-sm text-[#6B7280] max-w-md mx-auto">
                Hãy thử nới lỏng bộ lọc hoặc xóa bớt từ khóa trong ô tìm kiếm để xem các mốc khác.
              </p>
              <button
                onClick={onResetFilters}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-crimson-primary text-white hover:bg-crimson-dark shadow-xs"
              >
                Đặt lại toàn bộ bộ lọc
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              {periodKeys.map((periodName) => {
                const periodItems = groupedEvents[periodName];
                return (
                  <div key={periodName} className="space-y-4">
                    
                    {/* Period Header Divider */}
                    <div className="sticky top-20 z-10 bg-[#FAF7F2]/95 backdrop-blur-xs py-2.5 px-1 flex items-center space-x-3">
                      <div className="w-3.5 h-3.5 rounded-full bg-crimson-primary shadow-xs"></div>
                      <h2 className="font-heading font-bold text-lg sm:text-xl text-[#111827] tracking-tight">
                        {periodName}
                      </h2>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EFE9DC] text-[#4B5563]">
                        {periodItems.length} mốc
                      </span>
                      <div className="flex-1 h-px bg-[#E7DFD5]"></div>
                    </div>

                    {/* Timeline items list */}
                    <div className="space-y-4 pl-2 sm:pl-4 border-l-2 border-[#E7DFD5] ml-1.5 sm:ml-2">
                      {periodItems.map((event) => (
                        <TimelineCard
                          key={event.id}
                          event={event}
                          readingMode={readingMode}
                          isSaved={savedIds.has(event.id)}
                          onToggleSave={onToggleSave}
                          onOpenDetail={onOpenDetail}
                          onOpenSessionViewer={onOpenSessionViewer}
                        />
                      ))}
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
