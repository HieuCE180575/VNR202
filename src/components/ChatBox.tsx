'use client';

import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  Bot, 
  Send, 
  Sparkles, 
  RotateCcw, 
  BookOpen, 
  Key, 
  Settings, 
  X, 
  Copy, 
  Check, 
  HelpCircle, 
  ExternalLink,
  ChevronDown,
  Layers,
  ArrowRight,
  Scale
} from 'lucide-react';
import { Citation, queryPartyHistoryKnowledge } from '@/lib/ai-engine';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  citations?: Citation[];
  suggestions?: string[];
  timestamp: Date;
  provider?: string;
}

interface ChatBoxProps {
  onOpenSessionViewer: (sessionNum: number, pageNum?: number) => void;
  isFloating?: boolean;
  onClose?: () => void;
}

const DEFAULT_SUGGESTIONS = [
  'So sánh Cương lĩnh 2/1930 và Luận cương 10/1930',
  'Khoán 100 và Khoán 10 khác nhau thế nào?',
  'Chiến dịch Việt Bắc 1947 khác gì Biên giới 1950?',
  'Ý nghĩa Đại hội VI (1986) và ba chương trình kinh tế lớn',
  '3 bước đột phá tư duy kinh tế trước Đổi mới',
  'Hội nghị TW 8 (5/1941) hoàn chỉnh chuyển hướng ra sao?',
  '3 Chiến lược chiến tranh của Mỹ: Đặc biệt, Cục bộ, Việt Nam hóa',
  '27 biểu hiện suy thoái theo NQTW 4 khóa XII là gì?'
];

export const ChatBox: React.FC<ChatBoxProps> = ({
  onOpenSessionViewer,
  isFloating = false,
  onClose
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Xin chào! Tôi là **Trợ lý AI Lịch sử Đảng**. 

Tôi được xây dựng dựa trên nguồn dữ liệu từ **29 Session tài liệu bài giảng (435 trang/slide)**. Bạn có thể hỏi tôi bất kỳ nội dung nào:

- ⚖️ **So sánh tài liệu**: So sánh Cương lĩnh 1930 & Luận cương, Khoán 100 & Khoán 10, Việt Bắc 1947 & Biên giới 1950, 3 chiến lược chiến tranh của Mỹ...
- 🏛️ **Tra cứu sự kiện & Đại hội**: Bối cảnh, nội dung chính, ý nghĩa lịch sử, bài học kinh nghiệm.
- ⚠️ **Chỉ ra các bẫy dễ nhầm lẫn** và các ghi chú đối chiếu nguồn khi slide ghi sai ngày tháng.
- 📚 **Trích dẫn chính xác** số Session và số trang/slide kiểm chứng.`,
      suggestions: [
        'So sánh Cương lĩnh 2/1930 và Luận cương 10/1930',
        'Khoán 100 và Khoán 10 khác nhau thế nào?',
        'Ý nghĩa Đại hội VI (1986) và ba chương trình kinh tế lớn',
        '3 bước đột phá tư duy kinh tế trước Đổi mới'
      ],
      timestamp: new Date()
    }
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Settings modal
  const [showSettings, setShowSettings] = useState(false);
  const [geminiApiKey, setGeminiApiKey] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedKey = localStorage.getItem('lsd_gemini_key') || '';
    setGeminiApiKey(savedKey);
  }, []);

  const saveApiKey = (key: string) => {
    setGeminiApiKey(key);
    localStorage.setItem('lsd_gemini_key', key);
    setShowSettings(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // 1. Retrieve knowledge and expert comparison from local RAG engine
      const ragResult = queryPartyHistoryKnowledge(textToSend.trim());
      let finalText = ragResult.answer;
      let provider = 'local-rag';

      // 2. If Gemini API key is configured, enhance with LLM generative response
      if (geminiApiKey && geminiApiKey.trim().length > 15) {
        try {
          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey.trim()}`;
          const systemPrompt = `Bạn là Trợ lý AI Chuyên gia Lịch sử Đảng Cộng sản Việt Nam, phục vụ tra cứu học tập chuẩn xác dựa trên 29 file tài liệu bài giảng (Session 1 đến 29).
Quy tắc:
1. Trả lời bằng tiếng Việt trang trọng, chuẩn xác, giàu tính sư phạm, font chữ và ngữ điệu tự nhiên.
2. Nếu so sánh, trình bày bảng Markdown rõ ràng theo các tiêu chí (Bối cảnh, Mục tiêu, Lực lượng, Chủ trương, Kết quả & Ý nghĩa), nêu Điểm dễ nhầm và Mẹo thi.
3. Luôn chỉ rõ số Session và Trang/Slide căn cứ.
4. Trình bày Markdown đẹp mắt, khoa học.`;

          const res = await fetch(geminiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{
                role: 'user',
                parts: [{ text: `${systemPrompt}\n\nTư liệu đối chiếu chuẩn xác trích xuất từ 29 Session:\n${ragResult.answer}\n\nCâu hỏi của người dùng: "${textToSend.trim()}"` }]
              }],
              generationConfig: { temperature: 0.3, maxOutputTokens: 2048 }
            })
          });

          if (res.ok) {
            const geminiData = await res.json();
            const generated = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
            if (generated) {
              finalText = generated;
              provider = 'gemini';
            }
          }
        } catch (geminiErr) {
          console.warn('Gemini enhancement failed, using local RAG:', geminiErr);
        }
      }

      const aiMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'ai',
        text: finalText,
        citations: ragResult.citations,
        suggestions: ragResult.suggestions,
        timestamp: new Date(),
        provider
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'ai',
        text: 'Đã xảy ra lỗi khi xử lý. Vui lòng thử lại với câu hỏi khác.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const clearChat = () => {
    setMessages([messages[0]]);
  };

  return (
    <div className={`flex flex-col bg-white border border-[#E7DFD5] shadow-sm overflow-hidden ${
      isFloating 
        ? 'w-[94vw] sm:w-[520px] h-[650px] max-h-[85vh] rounded-2xl' 
        : 'max-w-5xl mx-auto rounded-2xl h-[790px] my-6'
    }`}>
      
      {/* Chat Header */}
      <div className="bg-[#FAF7F2] border-b border-[#E7DFD5] px-5 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-crimson-primary text-white flex items-center justify-center shadow-xs">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="font-heading font-bold text-base sm:text-lg text-[#111827]">
                Trợ lý AI Lịch sử Đảng
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-crimson-50 text-crimson-primary border border-crimson-200">
                29 Sessions
              </span>
            </div>
            <p className="text-xs text-[#6B7280]">
              Tra cứu câu hỏi &amp; So sánh đối chiếu tài liệu tự động
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1.5">
          <button
            onClick={() => setShowSettings(true)}
            className="p-2 rounded-xl text-[#6B7280] hover:bg-[#F3EDE2] hover:text-[#111827] transition-colors"
            title="Cài đặt API Key (Tùy chọn)"
          >
            <Settings className="w-4 h-4" />
          </button>
          <button
            onClick={clearChat}
            className="p-2 rounded-xl text-[#6B7280] hover:bg-[#F3EDE2] hover:text-[#111827] transition-colors"
            title="Làm mới đoạn chat"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          {isFloating && onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#6B7280] hover:bg-[#F3EDE2] hover:text-[#111827] transition-colors"
              title="Đóng chatbox"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="bg-[#FFF9EB] border-b border-[#F3DEAA] p-4 text-xs sm:text-sm space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between font-bold text-amber-950">
            <div className="flex items-center space-x-2">
              <Key className="w-4 h-4 text-amber-700" />
              <span>Cấu hình Gemini API Key (Không bắt buộc)</span>
            </div>
            <button onClick={() => setShowSettings(false)}>
              <X className="w-4 h-4 text-amber-700 hover:text-black" />
            </button>
          </div>
          <p className="text-[#4B5563] leading-relaxed">
            Mặc định, Trợ lý đã tích hợp sẵn <strong>bộ máy tra cứu &amp; ma trận so sánh chuyên sâu</strong> hoạt động 100% không cần key. Nếu bạn có Gemini API Key và muốn câu trả lời mềm mại, bạn có thể nhập vào đây:
          </p>
          <div className="flex space-x-2">
            <input
              type="password"
              value={geminiApiKey}
              onChange={(e) => setGeminiApiKey(e.target.value)}
              placeholder="Dán Gemini API Key (AIzaSy...)"
              className="flex-1 px-3.5 py-2 bg-white border border-[#D5C7B2] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-crimson-primary font-mono"
            />
            <button
              onClick={() => saveApiKey(geminiApiKey)}
              className="px-4 py-2 bg-crimson-primary text-white rounded-xl font-semibold hover:bg-crimson-dark"
            >
              Lưu
            </button>
          </div>
        </div>
      )}

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-[#FCFAF6]/60 text-sm sm:text-base leading-relaxed-vn">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            {/* Sender Label */}
            <div className="flex items-center space-x-1.5 mb-1 px-1 text-xs text-[#6B7280]">
              {msg.sender === 'user' ? (
                <span className="font-semibold text-[#374151]">Bạn</span>
              ) : (
                <div className="flex items-center space-x-1.5 text-crimson-primary font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                  <span>Trợ lý AI Lịch sử Đảng</span>
                  {msg.provider === 'gemini' && (
                    <span className="text-[10px] bg-purple-50 text-purple-700 px-1.5 py-0.2 rounded font-bold border border-purple-200">
                      Gemini
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Bubble */}
            <div
              className={`relative max-w-[92%] sm:max-w-[85%] rounded-2xl p-4 sm:p-5 shadow-2xs leading-relaxed-vn ${
                msg.sender === 'user'
                  ? 'bg-crimson-primary text-white rounded-tr-xs font-medium'
                  : 'bg-white border border-[#E7DFD5] text-[#1F2937] rounded-tl-xs'
              }`}
            >
              {msg.sender === 'user' ? (
                <p className="whitespace-pre-wrap">{msg.text}</p>
              ) : (
                <div className="space-y-3.5 text-sm sm:text-base">
                  <ReactMarkdown
                    components={{
                      h3: ({ children }) => (
                        <h3 className="font-heading font-bold text-base sm:text-lg text-crimson-primary mt-1 mb-2 border-b border-[#F3EDE2] pb-1.5">
                          {children}
                        </h3>
                      ),
                      h4: ({ children }) => (
                        <h4 className="font-heading font-bold text-sm sm:text-base text-[#111827] mt-3 mb-1.5">
                          {children}
                        </h4>
                      ),
                      p: ({ children }) => (
                        <p className="leading-relaxed-vn mb-2 text-[#1F2937]">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="space-y-1.5 my-2 pl-1">
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => (
                        <li className="leading-relaxed text-[#374151]">
                          {children}
                        </li>
                      ),
                      table: ({ children }) => (
                        <div className="overflow-x-auto my-3 border border-[#E7DFD5] rounded-xl shadow-2xs">
                          <table className="min-w-full divide-y divide-[#E7DFD5] text-left text-xs sm:text-sm bg-white">
                            {children}
                          </table>
                        </div>
                      ),
                      thead: ({ children }) => (
                        <thead className="bg-[#FAF7F2] font-semibold text-[#111827]">
                          {children}
                        </thead>
                      ),
                      th: ({ children }) => (
                        <th className="py-3 px-3.5 border-r last:border-r-0 border-[#E7DFD5] font-semibold text-[#111827]">
                          {children}
                        </th>
                      ),
                      td: ({ children }) => (
                        <td className="py-2.5 px-3.5 border-r last:border-r-0 border-[#E7DFD5] align-top text-[#1F2937] leading-relaxed">
                          {children}
                        </td>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-crimson-primary bg-[#FAF7F2] p-3.5 rounded-r-xl italic my-2 text-xs sm:text-sm text-[#374151] leading-relaxed">
                          {children}
                        </blockquote>
                      )
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>

                  {/* Citation Pills */}
                  {msg.citations && msg.citations.length > 0 && (
                    <div className="pt-3.5 border-t border-[#F3EDE2] space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280] flex items-center">
                        <BookOpen className="w-3.5 h-3.5 mr-1.5 text-amber-600" />
                        Tài liệu kiểm chứng (Bấm để mở slide):
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {msg.citations.map((c, i) => (
                          <button
                            key={i}
                            onClick={() => onOpenSessionViewer(c.session, c.unitNumber)}
                            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 hover:border-amber-300 transition-colors shadow-2xs"
                            title={`Xem ${c.unitType === 'slide' ? 'Slide' : 'Trang'} ${c.unitNumber} của Session ${c.session}`}
                          >
                            <span>Session {c.session} · {c.unitType === 'slide' ? 'Slide' : 'Trang'} {c.unitNumber}</span>
                            <ArrowRight className="w-3 h-3 text-amber-700" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Follow-up suggestions */}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="pt-3 border-t border-[#F3EDE2]">
                      <div className="text-xs font-semibold text-[#6B7280] mb-2 flex items-center">
                        <Sparkles className="w-3.5 h-3.5 mr-1.5 text-gold-500" />
                        Gợi ý hỏi tiếp:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {msg.suggestions.map((sug, i) => (
                          <button
                            key={i}
                            onClick={() => handleSend(sug)}
                            className="text-left text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-[#FAF8F5] text-[#374151] border border-[#E2D8C9] hover:bg-crimson-primary hover:text-white transition-colors font-medium"
                          >
                            {sug}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Copy Button */}
                  <div className="flex items-center justify-end pt-1">
                    <button
                      onClick={() => handleCopy(msg.id, msg.text)}
                      className="text-xs text-[#9CA3AF] hover:text-[#374151] flex items-center space-x-1.5 font-medium"
                      title="Sao chép câu trả lời"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Đã sao chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-crimson-primary text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 animate-pulse" />
            </div>
            <div className="bg-white border border-[#E7DFD5] rounded-2xl rounded-tl-xs p-4 shadow-2xs space-y-2">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-[#6B7280]">
                <div className="w-2 h-2 rounded-full bg-crimson-primary animate-ping"></div>
                <span className="font-medium">Đang tra cứu đối chiếu 29 Session &amp; 435 slides...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestion Pills Bar */}
      <div className="bg-[#FAF7F2] border-t border-[#E7DFD5] px-4 py-2.5 flex items-center space-x-2 overflow-x-auto text-xs sm:text-sm">
        <span className="text-[#6B7280] font-semibold shrink-0">Gợi ý nhanh:</span>
        {DEFAULT_SUGGESTIONS.slice(0, 4).map((sug, i) => (
          <button
            key={i}
            onClick={() => handleSend(sug)}
            className="shrink-0 px-3 py-1 rounded-lg bg-white border border-[#D5C7B2] text-[#374151] hover:bg-crimson-primary hover:text-white transition-colors font-medium shadow-2xs"
          >
            {sug}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-3.5 sm:p-4 bg-white border-t border-[#E7DFD5]">
        <div className="flex items-center space-x-2.5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Nhập câu hỏi tra cứu hoặc yêu cầu so sánh (ví dụ: So sánh Cương lĩnh 1930 và Luận cương 10/1930)..."
            className="flex-1 px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5C7B2] rounded-xl focus:outline-none focus:border-crimson-primary focus:bg-white text-[#111827] placeholder-[#6B7280] font-medium"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className={`p-3 rounded-xl flex items-center justify-center transition-all ${
              input.trim() && !isLoading
                ? 'bg-crimson-primary text-white hover:bg-crimson-dark shadow-xs'
                : 'bg-[#EAE2D7] text-[#9CA3AF] cursor-not-allowed'
            }`}
            title="Gửi câu hỏi"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  );
};
