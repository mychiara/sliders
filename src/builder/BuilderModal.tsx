import { useState } from 'react';
import { SlideData, SlideType, ThemePreset } from './types';
import { THEME_PRESETS, DEFAULT_SLIDES } from './defaultSlides';

interface BuilderModalProps {
  slides: SlideData[];
  onChangeSlides: (slides: SlideData[]) => void;
  activeTheme: string;
  onChangeTheme: (themeId: string) => void;
  onClose: () => void;
  showToast: (msg: string) => void;
}

export default function BuilderModal({
  slides,
  onChangeSlides,
  activeTheme,
  onChangeTheme,
  onClose,
  showToast,
}: BuilderModalProps) {
  const [activeTab, setActiveTab] = useState<'slides' | 'theme' | 'quick' | 'share'>('slides');
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [quickText, setQuickText] = useState<string>('');

  const currentSlide = slides[selectedIdx] || slides[0];

  const updateCurrentSlide = (fields: Partial<SlideData>) => {
    const updated = [...slides];
    updated[selectedIdx] = { ...updated[selectedIdx], ...fields };
    onChangeSlides(updated);
  };

  const handleAddSlide = (type: SlideType = 'statement') => {
    const newSlide: SlideData = {
      id: `s-${Date.now()}`,
      type,
      nav: `Slide ${slides.length + 1}`,
      title: 'Judul Slide Baru',
      subtitle: 'Tuliskan deskripsi atau penjelasan Anda di sini.',
      notes: '',
    };
    const updated = [...slides, newSlide];
    onChangeSlides(updated);
    setSelectedIdx(updated.length - 1);
  };

  const handleDeleteSlide = (idx: number) => {
    if (slides.length <= 1) {
      showToast('Minimal harus ada 1 slide!');
      return;
    }
    const updated = slides.filter((_, i) => i !== idx);
    onChangeSlides(updated);
    setSelectedIdx(Math.max(0, idx - 1));
  };

  const handleMoveSlide = (from: number, direction: 'up' | 'down') => {
    const to = direction === 'up' ? from - 1 : from + 1;
    if (to < 0 || to >= slides.length) return;
    const updated = [...slides];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    onChangeSlides(updated);
    setSelectedIdx(to);
  };

  const handleCopyShareLink = () => {
    try {
      const payload = JSON.stringify({ slides, theme: activeTheme });
      const encoded = encodeURIComponent(btoa(unescape(encodeURIComponent(payload))));
      const shareUrl = `${window.location.origin}${window.location.pathname}#d=${encoded}`;
      navigator.clipboard.writeText(shareUrl);
      showToast('🔗 Link presentasi berhasil disalin ke clipboard!');
    } catch {
      showToast('Gagal membuat link berbagi.');
    }
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({ slides, theme: activeTheme }, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', 'presentation-slides.json');
    dlAnchor.click();
    showToast('💾 File JSON berhasil diunduh!');
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.slides && Array.isArray(parsed.slides)) {
          onChangeSlides(parsed.slides);
          if (parsed.theme) onChangeTheme(parsed.theme);
          showToast('✅ Presentasi berhasil dimuat dari file!');
        } else {
          showToast('Format file JSON tidak sesuai.');
        }
      } catch {
        showToast('Gagal membaca file JSON.');
      }
    };
    reader.readAsText(file);
  };

  const handleQuickGenerate = () => {
    if (!quickText.trim()) {
      showToast('Silakan tempel teks catatan Anda terlebih dahulu.');
      return;
    }

    const lines = quickText.split('\n').map(l => l.trim()).filter(Boolean);
    const newSlides: SlideData[] = [];

    let cur: Partial<SlideData> | null = null;

    lines.forEach((line, i) => {
      if (line.startsWith('# ') || line.startsWith('Slide')) {
        if (cur && cur.title) {
          newSlides.push({
            id: `quick-${Date.now()}-${newSlides.length}`,
            type: cur.type || 'statement',
            title: cur.title,
            subtitle: cur.subtitle || '',
            items: cur.items,
            nav: cur.title.slice(0, 15),
          });
        }
        cur = {
          type: newSlides.length === 0 ? 'cover' : 'statement',
          title: line.replace(/^#\s*|^Slide\s*\d*:\s*/i, ''),
          items: [],
        };
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        if (!cur) {
          cur = { type: 'agenda', title: 'Poin Utama', items: [] };
        }
        cur.type = 'agenda';
        cur.items = cur.items || [];
        cur.items.push(line.replace(/^[-*]\s*/, ''));
      } else {
        if (!cur) {
          cur = { type: 'cover', title: line, subtitle: '' };
        } else if (!cur.subtitle) {
          cur.subtitle = line;
        } else {
          cur.items = cur.items || [];
          cur.items.push(line);
        }
      }
    });

    if (cur && cur.title) {
      newSlides.push({
        id: `quick-${Date.now()}-${newSlides.length}`,
        type: cur.type || 'statement',
        title: cur.title,
        subtitle: cur.subtitle || '',
        items: cur.items,
        nav: cur.title.slice(0, 15),
      });
    }

    if (newSlides.length > 0) {
      onChangeSlides(newSlides);
      setSelectedIdx(0);
      setActiveTab('slides');
      showToast(`✨ Berhasil mengubah teks menjadi ${newSlides.length} slide!`);
    } else {
      showToast('Gagal memproses teks.');
    }
  };

  return (
    <div className="builder-overlay" onClick={onClose}>
      <div className="builder-window" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="builder-header">
          <div className="builder-title">
            <span>⚡ Slide Studio</span>
            <span className="builder-badge">No-Code Editor</span>
          </div>

          <div style={{ display: 'flex', gap: 6 }}>
            <button
              className={`sidebar-action-btn ${activeTab === 'slides' ? 'active' : ''}`}
              style={{ background: activeTab === 'slides' ? 'rgba(79, 229, 176, 0.15)' : undefined }}
              onClick={() => setActiveTab('slides')}
            >
              📝 Edit Slide
            </button>
            <button
              className={`sidebar-action-btn ${activeTab === 'theme' ? 'active' : ''}`}
              style={{ background: activeTab === 'theme' ? 'rgba(79, 229, 176, 0.15)' : undefined }}
              onClick={() => setActiveTab('theme')}
            >
              🎨 Tema
            </button>
            <button
              className={`sidebar-action-btn ${activeTab === 'quick' ? 'active' : ''}`}
              style={{ background: activeTab === 'quick' ? 'rgba(79, 229, 176, 0.15)' : undefined }}
              onClick={() => setActiveTab('quick')}
            >
              ⚡ Teks ke Slide
            </button>
            <button
              className={`sidebar-action-btn ${activeTab === 'share' ? 'active' : ''}`}
              style={{ background: activeTab === 'share' ? 'rgba(79, 229, 176, 0.15)' : undefined }}
              onClick={() => setActiveTab('share')}
            >
              🔗 Bagikan
            </button>
          </div>

          <button className="builder-close-btn" onClick={onClose} aria-label="Tutup">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="builder-body">
          {activeTab === 'slides' && (
            <>
              {/* Sidebar list */}
              <div className="builder-sidebar">
                <div className="builder-slide-list">
                  {slides.map((s, idx) => (
                    <div
                      key={s.id || idx}
                      className={`builder-slide-item ${idx === selectedIdx ? 'active' : ''}`}
                      onClick={() => setSelectedIdx(idx)}
                    >
                      <span className="slide-num">{idx + 1}</span>
                      <div className="slide-meta">
                        <div className="slide-item-title">{s.title || '(Tanpa Judul)'}</div>
                        <div className="slide-item-type">{s.type}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="builder-sidebar-foot">
                  <button className="sidebar-action-btn" onClick={() => handleAddSlide('statement')}>
                    ➕ Tambah Slide
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="builder-content">
                {currentSlide && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                      <h3 style={{ margin: 0, fontSize: 16 }}>Mengedit Slide #{selectedIdx + 1}</h3>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button
                          className="sidebar-action-btn"
                          style={{ padding: '6px 10px', fontSize: 12 }}
                          onClick={() => handleMoveSlide(selectedIdx, 'up')}
                          disabled={selectedIdx === 0}
                        >
                          ⬆️ Naik
                        </button>
                        <button
                          className="sidebar-action-btn"
                          style={{ padding: '6px 10px', fontSize: 12 }}
                          onClick={() => handleMoveSlide(selectedIdx, 'down')}
                          disabled={selectedIdx === slides.length - 1}
                        >
                          ⬇️ Turun
                        </button>
                        <button
                          className="btn-danger"
                          style={{ padding: '6px 10px', fontSize: 12 }}
                          onClick={() => handleDeleteSlide(selectedIdx)}
                        >
                          🗑️ Hapus
                        </button>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Tipe Slide</label>
                        <select
                          className="form-select"
                          value={currentSlide.type}
                          onChange={(e) => updateCurrentSlide({ type: e.target.value as SlideType })}
                        >
                          <option value="cover">Cover (Pembuka)</option>
                          <option value="agenda">Agenda / Daftar Poin</option>
                          <option value="statement">Pernyataan / Headline</option>
                          <option value="bignumber">Angka Besar (Metrik)</option>
                          <option value="contrast">Perbandingan (Sebelum / Sesudah)</option>
                          <option value="bento">Fitur (Bento Grid)</option>
                          <option value="timeline">Timeline / Roadmap</option>
                          <option value="closing">Penutup / Closing</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Label Navigasi (Thumbnail)</label>
                        <input
                          type="text"
                          className="form-input"
                          value={currentSlide.nav || ''}
                          onChange={(e) => updateCurrentSlide({ nav: e.target.value })}
                          placeholder="Misal: Pembuka, Solusi, Metrik"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Kicker / Kategori (Teks Kecil di Atas)</label>
                      <input
                        type="text"
                        className="form-input"
                        value={currentSlide.kicker || ''}
                        onChange={(e) => updateCurrentSlide({ kicker: e.target.value })}
                        placeholder="Contoh: Pitch Deck 2026, Masalah Utama"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Judul Utama</label>
                      <input
                        type="text"
                        className="form-input"
                        value={currentSlide.title || ''}
                        onChange={(e) => updateCurrentSlide({ title: e.target.value })}
                        placeholder="Judul slide..."
                      />
                    </div>

                    {currentSlide.type !== 'bignumber' && currentSlide.type !== 'contrast' && currentSlide.type !== 'agenda' && (
                      <div className="form-group">
                        <label className="form-label">Subjudul / Deskripsi</label>
                        <textarea
                          className="form-textarea"
                          value={currentSlide.subtitle || ''}
                          onChange={(e) => updateCurrentSlide({ subtitle: e.target.value })}
                          placeholder="Penjelasan ringkas..."
                        />
                      </div>
                    )}

                    {/* Khusus Agenda / Daftar Poin */}
                    {currentSlide.type === 'agenda' && (
                      <div className="form-group">
                        <label className="form-label">Daftar Poin (Satu baris per poin)</label>
                        <textarea
                          className="form-textarea"
                          rows={4}
                          value={(currentSlide.items || []).join('\n')}
                          onChange={(e) => updateCurrentSlide({ items: e.target.value.split('\n').filter(Boolean) })}
                          placeholder="Tulis poin agenda (enter untuk baris baru)..."
                        />
                      </div>
                    )}

                    {/* Khusus BigNumber */}
                    {currentSlide.type === 'bignumber' && (
                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">Nilai Angka (Besar)</label>
                          <input
                            type="text"
                            className="form-input"
                            value={currentSlide.value || ''}
                            onChange={(e) => updateCurrentSlide({ value: e.target.value })}
                            placeholder="Contoh: 85%, 10M+, 3.5x"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Keterangan Angka</label>
                          <input
                            type="text"
                            className="form-input"
                            value={currentSlide.label || ''}
                            onChange={(e) => updateCurrentSlide({ label: e.target.value })}
                            placeholder="Contoh: Peningkatan efisiensi kerja"
                          />
                        </div>
                      </div>
                    )}

                    {/* Khusus Contrast */}
                    {currentSlide.type === 'contrast' && (
                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">Sisi Kiri (Sebelum / Masalah)</label>
                          <input
                            type="text"
                            className="form-input"
                            style={{ marginBottom: 8 }}
                            value={currentSlide.leftTitle || ''}
                            onChange={(e) => updateCurrentSlide({ leftTitle: e.target.value })}
                            placeholder="Judul Kiri (Misal: Slide Statis)"
                          />
                          <textarea
                            className="form-textarea"
                            value={(currentSlide.leftItems || []).join('\n')}
                            onChange={(e) => updateCurrentSlide({ leftItems: e.target.value.split('\n').filter(Boolean) })}
                            placeholder="Poin kekurangan (satu baris per poin)..."
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Sisi Kanan (Sesudah / Solusi)</label>
                          <input
                            type="text"
                            className="form-input"
                            style={{ marginBottom: 8 }}
                            value={currentSlide.rightTitle || ''}
                            onChange={(e) => updateCurrentSlide({ rightTitle: e.target.value })}
                            placeholder="Judul Kanan (Misal: Web Interaktif)"
                          />
                          <textarea
                            className="form-textarea"
                            value={(currentSlide.rightItems || []).join('\n')}
                            onChange={(e) => updateCurrentSlide({ rightItems: e.target.value.split('\n').filter(Boolean) })}
                            placeholder="Poin keunggulan (satu baris per poin)..."
                          />
                        </div>
                      </div>
                    )}

                    <div className="form-group">
                      <label className="form-label">Catatan Presenter (Hanya terlihat saat tekan 'P')</label>
                      <textarea
                        className="form-textarea"
                        style={{ minHeight: 60 }}
                        value={currentSlide.notes || ''}
                        onChange={(e) => updateCurrentSlide({ notes: e.target.value })}
                        placeholder="Petunjuk bicara pribadi Anda untuk slide ini..."
                      />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === 'theme' && (
            <div className="builder-content">
              <h3 style={{ marginTop: 0 }}>Pilih Tema & Palet Warna</h3>
              <p style={{ color: '#94a3b8', fontSize: 14 }}>
                Tema akan langsung diterapkan ke seluruh elemen slide, teks, aksen, dan bayangan secara instan.
              </p>

              <div className="theme-grid">
                {THEME_PRESETS.map((t) => (
                  <div
                    key={t.id}
                    className={`theme-card ${activeTheme === t.id ? 'active' : ''}`}
                    onClick={() => {
                      onChangeTheme(t.id);
                      showToast(`Tema ${t.name} diaktifkan!`);
                    }}
                  >
                    <div
                      className="theme-preview-bar"
                      style={{ background: t.accent }}
                    />
                    <div className="theme-card-name">{t.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'quick' && (
            <div className="builder-content">
              <h3 style={{ marginTop: 0 }}>Generator Teks ke Slide Otomatis</h3>
              <p style={{ color: '#94a3b8', fontSize: 14 }}>
                Punya catatan atau outline materi? Cukup tempel di bawah ini dan sistem akan mengubahnya menjadi slide berurutan secara otomatis!
              </p>

              <div className="form-group">
                <textarea
                  className="form-textarea"
                  style={{ minHeight: 220, fontFamily: 'monospace', fontSize: 13 }}
                  value={quickText}
                  onChange={(e) => setQuickText(e.target.value)}
                  placeholder={`Contoh format:\n# Slide 1: Peluncuran Produk\nKopi artisan lokal rasa premium\n\n# Slide 2: Keunggulan Kami\n- Biji kopi 100% Arabika lokal\n- Kemasan biodegradable ramah lingkungan\n- Pengiriman cepat di hari yang sama\n\n# Slide 3: Penutup\nHubungi tim kami untuk kemitraan!`}
                />
              </div>

              <button className="builder-pill-btn primary" onClick={handleQuickGenerate}>
                ✨ Ubah Menjadi Slide Sekarang
              </button>
            </div>
          )}

          {activeTab === 'share' && (
            <div className="builder-content">
              <h3 style={{ marginTop: 0 }}>Simpan & Bagikan Presentasi</h3>
              <p style={{ color: '#94a3b8', fontSize: 14 }}>
                Presentasi Anda disimpan di browser perangkat ini. Anda juga bisa membagikannya ke orang lain lewat tautan unik.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 500 }}>
                <button className="builder-pill-btn primary" onClick={handleCopyShareLink} style={{ justifyContent: 'center', padding: '12px 20px' }}>
                  🔗 Salin Link Berbagi (Shareable URL)
                </button>

                <button className="sidebar-action-btn" onClick={handleExportJSON} style={{ padding: '12px 20px' }}>
                  💾 Unduh Cadangan File (JSON)
                </button>

                <div>
                  <label className="form-label">Muat Presentasi dari File (JSON)</label>
                  <input
                    type="file"
                    accept=".json"
                    className="form-input"
                    onChange={handleImportJSON}
                  />
                </div>

                <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <button
                    className="btn-danger"
                    onClick={() => {
                      if (confirm('Yakin ingin mereset slide ke materi contoh awal?')) {
                        onChangeSlides(DEFAULT_SLIDES);
                        onChangeTheme('emerald');
                        showToast('Slide di-reset ke template awal.');
                      }
                    }}
                  >
                    🔄 Reset ke Template Awal
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="builder-footer">
          <span style={{ fontSize: 13, color: '#64748b' }}>
            Total {slides.length} slide · Perubahan tersimpan otomatis
          </span>
          <button className="builder-pill-btn primary" onClick={onClose}>
            ▶️ Mulai Presentasi
          </button>
        </div>
      </div>
    </div>
  );
}
