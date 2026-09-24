import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AnatomyVisual({ title = 'Fisiologi Kardiovaskular: Jantung & Hemodinamik' }: { title?: string }) {
  const [bpm, setBpm] = useState<number>(75);
  const [activeChamber, setActiveChamber] = useState<string>('Ventrikel Kiri');

  const pulseDuration = 60 / bpm; // durasi 1 detak jantung dalam detik

  const chambers: Record<string, string> = {
    'Atrium Kanan': 'Menerima darah miskin oksigen dari seluruh tubuh melalui vena kava superior dan inferior.',
    'Ventrikel Kanan': 'Memompa darah kotor menuju paru-paru melalui arteri pulmonalis untuk oksigenasi.',
    'Atrium Kiri': 'Menerima darah segar kaya oksigen dari paru-paru melalui vena pulmonalis.',
    'Ventrikel Kiri': 'Dinding otot paling tebal; memompa darah kaya oksigen ke seluruh tubuh melalui aorta.',
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: 920,
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(244, 63, 94, 0.3)',
      borderRadius: 'var(--radius)',
      padding: '24px 28px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(12px)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <span style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fb7185', fontWeight: 600 }}>
            Live Anatomical Model
          </span>
          <h3 style={{ margin: '4px 0 0', fontSize: 20, fontWeight: 600 }}>{title}</h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: 'var(--fg-muted)' }}>Frekuensi Denyut (BPM)</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#f43f5e', fontFamily: 'var(--font-mono)' }}>
              {bpm} <span style={{ fontSize: 14, fontWeight: 500 }}>BPM</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 24, alignItems: 'center' }}>
        {/* Pulsating Anatomical Heart SVG */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: 16,
          padding: 24,
          border: '1px solid rgba(244, 63, 94, 0.2)',
          position: 'relative',
        }}>
          {/* Pulsating Heart Container */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1.05, 1.2, 1],
            }}
            transition={{
              duration: pulseDuration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ width: 130, height: 130, position: 'relative' }}
          >
            <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 20px rgba(244,63,94,0.6))' }}>
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="url(#heartGradient)"
              />
              <defs>
                <linearGradient id="heartGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fb7185" />
                  <stop offset="50%" stopColor="#f43f5e" />
                  <stop offset="100%" stopColor="#be123c" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <span style={{ fontSize: 11, color: '#fb7185', marginTop: 12, fontWeight: 600 }}>
            ● Denyut Sistol / Diastol Aktif
          </span>
        </div>

        {/* EKG Graph and Anatomy Explorer */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* EKG Monitor Wave */}
          <div style={{
            background: '#04070a',
            border: '1px solid rgba(244, 63, 94, 0.25)',
            borderRadius: 12,
            padding: '12px 16px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--fg-faint)', marginBottom: 6 }}>
              <span>EKG MONITOR LEAD II</span>
              <span style={{ color: '#f43f5e' }}>SINUS RHYTHM NORMAL</span>
            </div>

            <svg viewBox="0 0 600 60" style={{ width: '100%', height: 50, overflow: 'visible' }}>
              {/* EKG Line */}
              <motion.path
                d="M 0 30 L 80 30 L 95 24 L 110 30 L 130 30 L 140 45 L 150 5 L 160 55 L 170 30 L 190 30 L 210 20 L 230 30 L 320 30 L 335 24 L 350 30 L 370 30 L 380 45 L 390 5 L 400 55 L 410 30 L 430 30 L 450 20 L 470 30 L 600 30"
                fill="none"
                stroke="#f43f5e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{
                  x: [0, -240],
                }}
                transition={{
                  duration: pulseDuration * 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </svg>
          </div>

          {/* Interactive Chambers Selection */}
          <div>
            <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginBottom: 8 }}>Pilih Ruang Jantung untuk Dipelajari:</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {Object.keys(chambers).map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveChamber(c)}
                  style={{
                    background: activeChamber === c ? 'rgba(244, 63, 94, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${activeChamber === c ? '#f43f5e' : 'rgba(255, 255, 255, 0.1)'}`,
                    color: activeChamber === c ? '#fff' : 'var(--fg-muted)',
                    borderRadius: 8,
                    padding: '6px 12px',
                    fontSize: 12,
                    cursor: 'pointer',
                    fontWeight: 500,
                  }}
                >
                  {c}
                </button>
              ))}
            </div>

            <div style={{
              marginTop: 10,
              padding: '10px 14px',
              borderRadius: 8,
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: 13,
              lineHeight: 1.5,
              color: '#e2e8f0',
            }}>
              <strong>{activeChamber}:</strong> {chambers[activeChamber]}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive BPM Slider */}
      <div style={{
        marginTop: 16,
        paddingTop: 14,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
          <span style={{ fontSize: 12, color: 'var(--fg-muted)', whiteSpace: 'nowrap' }}>
            Simulasi Kecepatan Detak Jantung:
          </span>
          <input
            type="range"
            min="50"
            max="150"
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value))}
            style={{ width: '100%', maxWidth: 260, cursor: 'pointer', accentColor: '#f43f5e' }}
          />
          <span style={{ fontSize: 13, fontWeight: 700, color: '#f43f5e', fontFamily: 'var(--font-mono)', minWidth: 45 }}>
            {bpm} BPM
          </span>
        </div>

        <div style={{ fontSize: 11, color: 'var(--fg-faint)', fontStyle: 'italic' }}>
          *Ubah slider untuk melihat perubahan denyut fisiologis
        </div>
      </div>
    </div>
  );
}
