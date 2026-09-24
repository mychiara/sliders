import { useState, useEffect, useMemo, useCallback } from 'react';
import Deck from './deck/Deck';
import { SlideData } from './builder/types';
import { DEFAULT_SLIDES, THEME_PRESETS } from './builder/defaultSlides';
import { renderSlide } from './builder/SlideRenderer';
import BuilderModal from './builder/BuilderModal';
import './builder/builder.css';

export default function App() {
  const [slides, setSlides] = useState<SlideData[]>(() => {
    // 1. Check URL hash for shared data e.g. #d=...
    try {
      const hash = window.location.hash.slice(1);
      if (hash.startsWith('d=')) {
        const raw = decodeURIComponent(hash.slice(2));
        const json = JSON.parse(decodeURIComponent(escape(atob(raw))));
        if (json.slides && Array.isArray(json.slides)) {
          return json.slides;
        }
      }
    } catch (e) {
      console.warn('Could not parse shared presentation from URL:', e);
    }

    // 2. Check localStorage
    try {
      const saved = localStorage.getItem('mychiara_slides');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not read from localStorage:', e);
    }

    return DEFAULT_SLIDES;
  });

  const [activeTheme, setActiveTheme] = useState<string>(() => {
    try {
      const hash = window.location.hash.slice(1);
      if (hash.startsWith('d=')) {
        const raw = decodeURIComponent(hash.slice(2));
        const json = JSON.parse(decodeURIComponent(escape(atob(raw))));
        if (json.theme) return json.theme;
      }
      return localStorage.getItem('mychiara_theme') || 'emerald';
    } catch {
      return 'emerald';
    }
  });

  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((cur) => (cur === msg ? null : cur));
    }, 2800);
  }, []);

  // Apply theme tokens dynamically to CSS root
  useEffect(() => {
    const theme = THEME_PRESETS.find((t) => t.id === activeTheme);
    if (!theme) return;
    const root = document.documentElement;
    root.style.setProperty('--bg', theme.bg);
    root.style.setProperty('--fg', theme.fg);
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--surface', theme.surface);
    root.style.setProperty('--surface-2', theme.surface2);
    root.style.setProperty('--hair', theme.hair);

    localStorage.setItem('mychiara_theme', activeTheme);
  }, [activeTheme]);

  // Persist slides to localStorage
  const handleUpdateSlides = useCallback((newSlides: SlideData[]) => {
    setSlides(newSlides);
    try {
      localStorage.setItem('mychiara_slides', JSON.stringify(newSlides));
    } catch (e) {
      console.warn('Failed to save to localStorage', e);
    }
  }, []);

  const deckKey = useMemo(() => {
    return `deck-${slides.length}-${slides.map((s) => s.id).join('-')}`;
  }, [slides]);

  // Check if presenter view is active (don't show topbar in presenter tab)
  const isPresenter = useMemo(
    () => new URLSearchParams(window.location.search).has('presenter'),
    []
  );

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Floating Action Topbar for non-presenter */}
      {!isPresenter && (
        <div className="builder-topbar">
          <button
            className="builder-pill-btn primary"
            onClick={() => setIsBuilderOpen(true)}
            title="Buka panel untuk mengedit teks atau menambah slide"
          >
            ✏️ Edit Slide
          </button>
          <button
            className="builder-pill-btn"
            onClick={() => {
              try {
                const payload = JSON.stringify({ slides, theme: activeTheme });
                const encoded = encodeURIComponent(btoa(unescape(encodeURIComponent(payload))));
                const shareUrl = `${window.location.origin}${window.location.pathname}#d=${encoded}`;
                navigator.clipboard.writeText(shareUrl);
                showToast('🔗 Link presentasi berhasil disalin!');
              } catch {
                showToast('Gagal menyalin link.');
              }
            }}
            title="Bagikan presentasi ini ke orang lain"
          >
            🔗 Bagikan
          </button>
        </div>
      )}

      {/* Main Deck Presentation Engine */}
      <Deck key={deckKey}>
        {slides.map((slide, index) => renderSlide(slide, index))}
      </Deck>

      {/* Visual Slide Builder Modal */}
      {isBuilderOpen && (
        <BuilderModal
          slides={slides}
          onChangeSlides={handleUpdateSlides}
          activeTheme={activeTheme}
          onChangeTheme={setActiveTheme}
          onClose={() => setIsBuilderOpen(false)}
          showToast={showToast}
        />
      )}

      {/* Floating Toast Notification */}
      {toastMessage && <div className="toast">{toastMessage}</div>}
    </div>
  );
}
