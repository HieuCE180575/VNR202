'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Navbar, 
  ActiveTab, 
  ReadingMode 
} from '../components/Navbar';
import { HeroSearch } from '../components/HeroSearch';
import { TimelineSection } from '../components/TimelineSection';
import { EventDetailModal } from '../components/EventDetailModal';
import { ComparisonView } from '../components/ComparisonView';
import { IntroView } from '../components/IntroView';
import { DocumentExplorerView } from '../components/DocumentExplorerView';
import { SavedEventsView } from '../components/SavedEventsView';
import { ChatBox } from '../components/ChatBox';
import { Bot, MessageSquare, Sparkles } from 'lucide-react';
import { 
  searchAndFilterEvents, 
  getAllEnrichedEvents, 
  getEventEnriched,
  EnrichedEvent,
  data 
} from '../lib/history-search';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('timeline');
  const [readingMode, setReadingMode] = useState<ReadingMode>('quick');
  
  // Search and Filter states
  const [query, setQuery] = useState<string>('');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('Tất cả giai đoạn');
  const [selectedKind, setSelectedKind] = useState<string>('all');
  const [selectedSession, setSelectedSession] = useState<number | 'all'>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [includeGoals, setIncludeGoals] = useState<boolean>(true);

  // Saved / Bookmarks (LocalStorage)
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [isClient, setIsClient] = useState(false);

  // Modal event
  const [modalEvent, setModalEvent] = useState<EnrichedEvent | null>(null);

  // Session viewer target
  const [docViewerTarget, setDocViewerTarget] = useState<{ session: number; unitNumber: number }>({
    session: 1,
    unitNumber: 1
  });

  // Floating Chatbot state
  const [isFloatingChatOpen, setIsFloatingChatOpen] = useState(false);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load saved events from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    try {
      const stored = localStorage.getItem('lsd_saved_events');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSavedIds(new Set(parsed));
        }
      }
    } catch (e) {
      console.error('Error loading saved events from localStorage:', e);
    }
  }, []);

  // Save to localStorage when savedIds changes
  const toggleSaveEvent = (id: string) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      const isSaving = !next.has(id);
      if (isSaving) {
        next.add(id);
        showToast('Đã lưu mốc vào sổ tay ôn thi');
      } else {
        next.delete(id);
        showToast('Đã bỏ lưu mốc');
      }
      try {
        localStorage.setItem('lsd_saved_events', JSON.stringify(Array.from(next)));
      } catch (e) {
        console.error('Error saving to localStorage:', e);
      }
      return next;
    });
  };

  const clearAllSaved = () => {
    setSavedIds(new Set());
    try {
      localStorage.removeItem('lsd_saved_events');
      showToast('Đã xóa tất cả mốc đã lưu');
    } catch (e) {
      console.error('Error clearing saved events:', e);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Filtered events
  const filteredEvents = useMemo(() => {
    return searchAndFilterEvents({
      query,
      period: selectedPeriod,
      kind: selectedKind,
      session: selectedSession === 'all' ? undefined : selectedSession,
      sortOrder,
      includeGoals
    });
  }, [query, selectedPeriod, selectedKind, selectedSession, sortOrder, includeGoals]);

  // List of saved enriched events
  const savedEventsList = useMemo(() => {
    return Array.from(savedIds)
      .map(id => getEventEnriched(id))
      .filter((e): e is EnrichedEvent => e !== null)
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [savedIds]);

  const handleResetFilters = () => {
    setQuery('');
    setSelectedPeriod('Tất cả giai đoạn');
    setSelectedKind('all');
    setSelectedSession('all');
    setSortOrder('asc');
    setIncludeGoals(true);
  };

  // Open session viewer
  const handleOpenSessionViewer = (sessionNum: number, pageNum: number = 1) => {
    setDocViewerTarget({ session: sessionNum, unitNumber: pageNum });
    setActiveTab('documents');
  };

  // Handle opening related event
  const handleSelectRelatedEventId = (id: string) => {
    const ev = getEventEnriched(id);
    if (ev) {
      setModalEvent(ev);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1C1917] text-white px-4 py-2.5 rounded-xl shadow-xl text-xs sm:text-sm font-medium animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        readingMode={readingMode}
        setReadingMode={setReadingMode}
        savedCount={isClient ? savedIds.size : 0}
      />

      {/* Hero Search Bar - only shown on timeline tab */}
      {activeTab === 'timeline' && (
        <HeroSearch
          query={query}
          setQuery={setQuery}
          totalFound={filteredEvents.length}
          totalEvents={data.events.length}
        />
      )}

      {/* Main View Area */}
      <main className="flex-1">
        {activeTab === 'timeline' && (
          <TimelineSection
            events={filteredEvents}
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
            selectedKind={selectedKind}
            setSelectedKind={setSelectedKind}
            selectedSession={selectedSession}
            setSelectedSession={setSelectedSession}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            includeGoals={includeGoals}
            setIncludeGoals={setIncludeGoals}
            readingMode={readingMode}
            savedIds={savedIds}
            onToggleSave={toggleSaveEvent}
            onOpenDetail={setModalEvent}
            onOpenSessionViewer={handleOpenSessionViewer}
            onResetFilters={handleResetFilters}
          />
        )}

        {activeTab === 'chat' && (
          <div className="py-4">
            <ChatBox
              onOpenSessionViewer={handleOpenSessionViewer}
            />
          </div>
        )}

        {activeTab === 'comparison' && (
          <ComparisonView
            onOpenSessionViewer={handleOpenSessionViewer}
          />
        )}

        {activeTab === 'intro' && (
          <IntroView
            onOpenSessionViewer={handleOpenSessionViewer}
          />
        )}

        {activeTab === 'documents' && (
          <DocumentExplorerView
            initialSession={docViewerTarget.session}
            initialUnitNumber={docViewerTarget.unitNumber}
          />
        )}

        {activeTab === 'saved' && (
          <SavedEventsView
            savedEvents={savedEventsList}
            onRemoveSave={toggleSaveEvent}
            onClearAll={clearAllSaved}
            onOpenDetail={setModalEvent}
            onOpenSessionViewer={handleOpenSessionViewer}
            onGoToTimeline={() => setActiveTab('timeline')}
          />
        )}
      </main>

      {/* Detail Modal */}
      <EventDetailModal
        event={modalEvent}
        onClose={() => setModalEvent(null)}
        onSelectEventId={handleSelectRelatedEventId}
        onOpenSessionViewer={handleOpenSessionViewer}
        isSaved={modalEvent ? savedIds.has(modalEvent.id) : false}
        onToggleSave={toggleSaveEvent}
      />

      {/* Floating AI Chat Assistant Widget */}
      {activeTab !== 'chat' && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
          {isFloatingChatOpen && (
            <div className="mb-3 animate-fadeIn">
              <ChatBox
                isFloating={true}
                onClose={() => setIsFloatingChatOpen(false)}
                onOpenSessionViewer={handleOpenSessionViewer}
              />
            </div>
          )}

          {!isFloatingChatOpen && (
            <button
              onClick={() => setIsFloatingChatOpen(true)}
              className="flex items-center space-x-2.5 px-4 py-3 rounded-full bg-crimson-primary text-white shadow-xl hover:bg-crimson-dark hover:scale-105 transition-all group border-2 border-amber-300"
              title="Mở Trợ lý AI hỏi đáp và so sánh tài liệu"
            >
              <div className="relative">
                <Bot className="w-5 h-5 text-amber-300" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
              </div>
              <span className="font-semibold text-xs sm:text-sm tracking-tight">
                Hỏi Trợ lý AI
              </span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full hidden sm:inline-block">
                So sánh tài liệu
              </span>
            </button>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#FAF7F2] border-t border-[#E7DFD5] py-8 text-center text-xs text-[#78716C] space-y-2 mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-semibold text-[#44403C]">
            Dòng thời gian Lịch sử Đảng Cộng sản Việt Nam — Căn cứ 29 file tài liệu gốc
          </p>
          <p className="mt-1">
            435 slides/trang trích xuất · 95 mốc sự kiện &amp; mục tiêu · 6 ghi chú đối chiếu nguồn tư liệu chính thức.
          </p>
          <p className="text-[11px] text-[#A8A29E] mt-2">
            Phạm vi dữ liệu phản ánh 29 file cung cấp: Từ chương Nhập môn, sự ra đời của Đảng (1930) đến Đại hội XIII và các mục tiêu định hướng 2025, 2030, 2045.
          </p>
        </div>
      </footer>

    </div>
  );
}

