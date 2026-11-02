'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  AlignLeft, 
  Copy, 
  Check, 
  Sparkles,
  ChevronRight,
  BookmarkCheck
} from 'lucide-react';

interface FormattedSlideContentProps {
  rawText: string;
  unitLabel?: string;
  unitNumber?: number | string;
  className?: string;
}

interface TextBlock {
  type: 'heading' | 'subheading' | 'bullet' | 'paragraph';
  text: string;
}

/**
 * Intelligent line rejoining and restructuring for slides/PDF extracted texts.
 * Fixes awkward PowerPoint run wrapping, split prepositions, broken dates, etc.
 */
export function cleanAndStructureSlideText(rawText: string): TextBlock[] {
  if (!rawText) return [];
  const rawLines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
  const joinedLines: string[] = [];
  let buffer = '';

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    if (!buffer) {
      buffer = line;
      continue;
    }

    const prevWord = buffer.split(/\s+/).pop() || '';
    const firstChar = line.charAt(0);
    const isFirstCharLower = firstChar === firstChar.toLowerCase() && /[a-zà-ỹ]/i.test(firstChar);
    
    // Conjunctions/prepositions that indicate continuation
    const isContinuationWord = /^(và|với|hoặc|của|trong|cho|về|để|do|bởi|như|là|khi|chia|tiến|đẩy|nhanh|các|những|một|hai|ba)$/i.test(prevWord);
    const endsWithOpenPunct = /[,;:\-(—–]$/.test(buffer);
    const isDateSuffix = /^\(\s*\d{1,2}[\/\-]\d{4}\s*\)$|^\(\s*\d{4}\s*\)$/.test(line);
    const prevIsShortHeader = /^(I|II|III|IV|V|VI|VII|VIII|IX|X)\.?$/i.test(buffer) || 
      (/^(Hội nghị|Đại hội|Nghị quyết|Chỉ thị)\s+[^.]+$/i.test(buffer) && isDateSuffix);

    const shouldJoin = isFirstCharLower || endsWithOpenPunct || isContinuationWord || isDateSuffix || prevIsShortHeader;

    if (shouldJoin) {
      if (buffer.endsWith('-') && !buffer.endsWith(' -')) {
        buffer = buffer.slice(0, -1) + line;
      } else {
        buffer += ' ' + line;
      }
    } else {
      joinedLines.push(buffer);
      buffer = line;
    }
  }
  if (buffer) joinedLines.push(buffer);

  // Categorize lines
  return joinedLines.map(line => {
    // 1. Headings (e.g., 'Chương 1', 'I. Lãnh đạo...', '1. Bối cảnh...')
    if (/^(Chương\s+[0-9IVX]+|[I|V|X]+\.|\d+\.\s+[A-ZÀ-Ỹ])/i.test(line) && line.length < 110) {
      return { type: 'heading', text: line };
    }
    // 2. Subheadings (e.g. 'Hội nghị Trung ương 24 khóa III (8/1975)', 'Đại hội VI...')
    if (/^(Hội nghị|Đại hội|Nghị quyết|Chỉ thị|Quyết định|Văn kiện|Chính sách)\b/i.test(line) && line.length < 90) {
      return { type: 'subheading', text: line };
    }
    // 3. Bullet points (starts with bullet char or number/letter list)
    if (/^([•\-*+–—]|\d+[\).]|[a-z]\))\s*/i.test(line)) {
      return { type: 'bullet', text: line.replace(/^([•\-*+–—]|\d+[\).]|[a-z]\))\s*/, '') };
    }
    // 4. Regular paragraph item
    return { type: 'paragraph', text: line };
  });
}

export const FormattedSlideContent: React.FC<FormattedSlideContentProps> = ({
  rawText,
  unitLabel = 'Slide',
  unitNumber,
  className = ''
}) => {
  const [viewMode, setViewMode] = useState<'formatted' | 'raw'>('formatted');
  const [copied, setCopied] = useState(false);

  const blocks = React.useMemo(() => cleanAndStructureSlideText(rawText), [rawText]);

  const handleCopy = () => {
    const textToCopy = viewMode === 'formatted' 
      ? blocks.map(b => b.text).join('\n\n')
      : rawText;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!rawText || rawText.trim().length === 0) {
    return (
      <div className="bg-[#FAF8F5] p-6 rounded-xl border border-[#E7DFD5] text-center text-[#6B7280] italic text-sm">
        (Nội dung trang bìa hoặc chỉ chứa sơ đồ / hình ảnh minh họa)
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Action bar above text content */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center space-x-1.5 bg-[#F3EDE2] p-1 rounded-lg border border-[#DDD3C3]">
          <button
            type="button"
            onClick={() => setViewMode('formatted')}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-md font-semibold transition-all ${
              viewMode === 'formatted'
                ? 'bg-white text-crimson-primary shadow-xs'
                : 'text-[#4B5563] hover:text-[#111827]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Định dạng dễ đọc</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('raw')}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-md font-semibold transition-all ${
              viewMode === 'raw'
                ? 'bg-white text-crimson-primary shadow-xs'
                : 'text-[#4B5563] hover:text-[#111827]'
            }`}
          >
            <AlignLeft className="w-3.5 h-3.5" />
            <span>Văn bản gốc thô</span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-white border border-[#D5C7B2] hover:bg-[#F3EDE2] text-[#4B5563] transition-colors"
          title="Sao chép nội dung"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-medium">Đã chép</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Sao chép</span>
            </>
          )}
        </button>
      </div>

      {/* Main Content Box */}
      {viewMode === 'formatted' ? (
        <div className="bg-[#FAF8F5] text-[#1F2937] p-5 sm:p-6 rounded-2xl border border-[#E7DFD5] shadow-inner space-y-3.5">
          {blocks.map((block, idx) => {
            if (block.type === 'heading') {
              return (
                <div 
                  key={idx} 
                  className="pt-2 pb-1 border-b border-[#E8DFD1] first:pt-0"
                >
                  <h4 className="font-heading font-bold text-sm sm:text-base text-crimson-primary flex items-start space-x-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-crimson-primary mt-1.5 shrink-0" />
                    <span>{block.text}</span>
                  </h4>
                </div>
              );
            }

            if (block.type === 'subheading') {
              return (
                <div 
                  key={idx} 
                  className="bg-amber-50/70 border-l-3 border-amber-500 px-3.5 py-2 rounded-r-lg"
                >
                  <h5 className="font-heading font-bold text-xs sm:text-sm text-amber-950">
                    {block.text}
                  </h5>
                </div>
              );
            }

            // Regular paragraph or bullet
            return (
              <div 
                key={idx} 
                className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#1F2937] leading-relaxed-vn"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B1515]/60 mt-2 shrink-0" />
                <p className="flex-1 font-normal text-[#1F2937]">
                  {block.text}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-[#FAF8F5] text-[#1F2937] p-5 rounded-2xl border border-[#E7DFD5] shadow-inner font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap overflow-x-auto">
          {rawText}
        </div>
      )}
    </div>
  );
};
