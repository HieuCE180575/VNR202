'use client';

import React from 'react';
import { Search, X, Sparkles, Filter } from 'lucide-react';

interface HeroSearchProps {
  query: string;
  setQuery: (q: string) => void;
  totalFound: number;
  totalEvents: number;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  query,
  setQuery,
  totalFound,
  totalEvents,
}) => {
  const quickSearches = [
    { label: '1986 (Đổi mới)', query: '1986' },
    { label: '3/2/1930', query: '3/2/1930' },
    { label: 'Đổi mới', query: 'đổi mới' },
    { label: 'Khoán 100 & Khoán 10', query: 'khoán' },
    { label: 'Cương lĩnh', query: 'cương lĩnh' },
    { label: 'Nguyễn Văn Linh', query: 'nguyễn văn linh' },
    { label: 'Điện Biên Phủ', query: 'Điện Biên Phủ' },
    { label: 'Cách mạng Tháng Tám', query: 'Tháng Tám' },
    { label: 'Hiệp định Paris', query: 'Hiệp định Paris' },
    { label: 'Hội nghị Trung ương 8', query: 'Trung ương 8' },
  ];

  return (
    <div className="bg-white border-b border-[#E7DFD5] py-6 px-4 sm:px-6 lg:px-8 shadow-xs">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 sm:h-6 sm:w-6 text-crimson-primary" />
          </div>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Bạn muốn tìm sự kiện nào? Nhập năm (1986), ngày (3/2/1930), tên sự kiện hoặc từ khóa (khoán, cương lĩnh, đổi mới)..."
            className="w-full pl-12 sm:pl-14 pr-12 py-3.5 sm:py-4 text-sm sm:text-base bg-[#FAF7F2] border-2 border-[#D8CABE] focus:border-crimson-primary focus:bg-white focus:outline-none rounded-xl transition-all shadow-inner placeholder-[#6B7280] text-[#111827] font-medium"
          />

          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#6B7280] hover:text-[#111827]"
              title="Xóa tìm kiếm"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="mt-3.5 flex items-center flex-wrap gap-2 text-xs sm:text-sm">
          <span className="text-[#4B5563] flex items-center mr-1 font-semibold">
            <Sparkles className="w-4 h-4 mr-1 text-gold-500" />
            Gợi ý tra nhanh:
          </span>
          {quickSearches.map((item) => (
            <button
              key={item.label}
              onClick={() => setQuery(item.query)}
              className={`px-3 py-1.5 rounded-lg transition-colors border text-xs sm:text-sm ${
                query.toLowerCase() === item.query.toLowerCase()
                  ? 'bg-crimson-primary text-white border-crimson-primary font-semibold shadow-xs'
                  : 'bg-[#F4EFE6] text-[#374151] border-[#E0D5C5] hover:bg-[#EAE2D2] hover:text-[#111827] font-medium'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Result status summary */}
        {query && (
          <div className="mt-2.5 text-xs sm:text-sm text-[#4B5563] flex items-center justify-between">
            <span>
              Tìm thấy <strong className="text-crimson-primary font-bold">{totalFound}</strong> / {totalEvents} mốc thời gian phù hợp với từ khóa &ldquo;{query}&rdquo;
            </span>
            <button 
              onClick={() => setQuery('')}
              className="text-crimson-primary underline font-medium hover:text-crimson-dark"
            >
              Xem toàn bộ timeline
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
