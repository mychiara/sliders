import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AnatomyVisual({ title = 'Fisiologi Kardiovaskular: Jantung & Hemodinamik' }: { title?: string }) {
  const [bpm, setBpm] = useState<number>(75);
  const [activeChamber, setActiveChamber] = useState<string>('Ventrikel Kiri');
  const [bloodType, setBloodType] = useState<'oxygenated' | 'deoxygenated'>('oxygenated');

  const pulseDuration = 60 / bpm;

  const chambers: Record<string, { desc: string; pressure: string; role: string }> = {
    'Ventrikel Kiri': {
      desc: 'Dinding miokardium paling tebal (10–15 mm); menghasilkan tekanan sistolik tinggi untuk menyemprotkan darah beroksigen ke seluruh sirkulasi sistemik melalui katup aorta.',
      pressure: '120 mmHg',
      role: 'Pompa Utama Tubuh',
    },
    'Atrium Kiri': {
      desc: 'Menerima darah segar kaya oksigen (O2 98%) dari paru-paru melalui empat vena pulmonalis, kemudian mengalirkannya ke ventrikel kiri melewati katup mitral (bikuspidalis).',
      pressure: '8–10 mmHg',
      role: 'Kolektor Darah Paru',
    },
    'Ventrikel Kanan': {
      desc: 'Memompa darah miskin oksigen (deoksigenasi) ke arteri pulmonalis menuju anyaman kapiler paru-paru untuk pelepasan karbon dioksida dan pengikatan oksigen baru.',
      pressure: '25 mmHg',
      role: 'Pompa Sirkulasi Paru',
    },
    'Atrium Kanan': {
      desc: 'Muara vena kava superior dan inferior yang menampung seluruh darah balik yang telah kehilangan oksigen dari kepala, ekstremitas, dan organ viseral.',
      pressure: '2–6 mmHg',
      role: 'Kolektor Sistemik',
    },
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: 960,
      margin: '0 auto',
      background: 'linear-gradient(135deg, rgba(22, 8, 12, 0.85) 0%, rgba(10, 4, 7, 0.95) 100%)',
      border: '1px solid rgba(244, 63, 94, 0.4)',
      borderRadius: 'var(--radius)',
      padding: '26px 30px',
      boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.8), 0 0 50px -10px rgba(244, 63, 94, 0.25)',
      backdropFilter: 'blur(20px)',
    }}>
      {/* Top Header & Telemetry Pills */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{
              fontSize: 10.5,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#fff',
              background: '#f43f5e',
              padding: '3px 8px',
              borderRadius: 6,
              fontWeight: 700,
            }}>
              Live Biomedical Telemetry
            </span>
            <span style={{ fontSize: 11, color: '#fb7185', display: 'flex', alignItems: 'center', gap: 4 }}>
              ● Sinus Rhythm Aktif
            </span>
          </div>
          <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>{title}</h3>
        </div>

        {/* 3 Real-time Medical Indicators */}
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '6px 12px', borderRadius: 8, border: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'right' }}>
            <div style={{ fontSize: 10, color: 'var(--fg-faint)' }}>CURAH JANTUNG</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#f43f5e', fontFamily: 'var(--font-mono)' }}>5.2 L/menit</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '6px 12px', borderRadius: 8, border: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'right' }}>
            <div style={{ fontSize: 10, color: 'var(--fg-faint)' }}>SATURASI O2</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>99% SpO2</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '6px 12px', borderRadius: 8, border: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'right' }}>
            <div style={{ fontSize: 10, color: 'var(--fg-faint)' }}>TEKANAN DARAH</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#4fe5b0', fontFamily: 'var(--font-mono)' }}>120/80 mmHg</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '270px 1fr', gap: 24, alignItems: 'center' }}>
        {/* Pulsating Anatomical 3D Heart */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at center, rgba(244, 63, 94, 0.2) 0%, rgba(10, 4, 7, 0.5) 75%)',
          borderRadius: 16,
          padding: '24px 16px',
          border: '1px solid rgba(244, 63, 94, 0.3)',
          boxShadow: 'inset 0 0 30px rgba(244, 63, 94, 0.15)',
        }}>
          <motion.div
            animate={{
              scale: [1, 1.18, 1.05, 1.25, 1],
            }}
            transition={{
              duration: pulseDuration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ width: 140, height: 140, position: 'relative' }}
          >
            <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 25px rgba(244,63,94,0.75))' }}>
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="url(#heartGradientPro)"
              />
              <defs>
                <linearGradient id="heartGradientPro" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fda4af" />
                  <stop offset="40%" stopColor="#f43f5e" />
                  <stop offset="85%" stopColor="#9f1239" />
                  <stop offset="100%" stopColor="#4c0519" />
                </linearGradient>
              </defs>
            </svg>

            {/* Pulsating Corona Glow */}
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.4, 0.9, 0.3], scale: [0.95, 1.2, 1, 1.3, 0.95] }}
              transition={{ duration: pulseDuration, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: -10,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(244, 63, 94, 0.4) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
          </motion.div>

          <div style={{ marginTop: 14, textAlign: 'center' }}>
            <span style={{ fontSize: 26, fontWeight: 800, color: '#f43f5e', fontFamily: 'var(--font-mono)' }}>
              {bpm} <span style={{ fontSize: 14 }}>BPM</span>
            </span>
            <div style={{ fontSize: 11, color: '#fda4af', fontWeight: 500, marginTop: 2 }}>
              Detak Jantung Relatif
            </div>
          </div>
        </div>

        {/* EKG Lead II and Chamber Fact Sheet */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* EKG Monitor Line */}
          <div style={{
            background: '#040608',
            border: '1px solid rgba(244, 63, 94, 0.3)',
            borderRadius: 12,
            padding: '12px 18px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, color: '#94a3b8', marginBottom: 6 }}>
              <span>EKG CONTINUOUS LEAD II (P-QRS-T WAVE)</span>
              <span style={{ color: '#4fe5b0', fontWeight: 600 }}>RITME NORMAL 1.0 SEC</span>
            </div>

            <svg viewBox="0 0 600 60" style={{ width: '100%', height: 50, overflow: 'visible' }}>
              <motion.path
                d="M 0 30 L 70 30 L 85 24 L 100 30 L 120 30 L 130 46 L 140 4 L 150 56 L 160 30 L 180 30 L 200 18 L 220 30 L 300 30 L 315 24 L 330 30 L 350 30 L 360 46 L 370 4 L 380 56 L 390 30 L 410 30 L 430 18 L 450 30 L 600 30"
                fill="none"
                stroke="#f43f5e"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: 'drop-shadow(0 0 6px #f43f5e)' }}
                animate={{ x: [0, -230] }}
                transition={{ duration: pulseDuration * 2, repeat: Infinity, ease: 'linear' }}
              />
            </svg>
          </div>

          {/* Interactive Chamber Buttons */}
          <div>
            <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
              <span>Pilih Anatomi Ruang Jantung:</span>
              <span style={{ color: '#fda4af', fontWeight: 600 }}>Tekanan: {chambers[activeChamber].pressure}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
              {Object.keys(chambers).map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveChamber(c)}
                  style={{
                    background: activeChamber === c ? 'rgba(244, 63, 94, 0.3)' : 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${activeChamber === c ? '#f43f5e' : 'rgba(255, 255, 255, 0.1)'}`,
                    color: activeChamber === c ? '#fff' : 'var(--fg-muted)',
                    borderRadius: 8,
                    padding: '8px 6px',
                    fontSize: 11.5,
                    cursor: 'pointer',
                    fontWeight: activeChamber === c ? 700 : 500,
                    textAlign: 'center',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Description box */}
            <div style={{
              marginTop: 10,
              padding: '12px 16px',
              borderRadius: 10,
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: 13,
              lineHeight: 1.6,
              color: '#f1f5f9',
            }}>
              <span style={{ color: '#fda4af', fontWeight: 700, marginRight: 6 }}>
                [{chambers[activeChamber].role}]
              </span>
              {chambers[activeChamber].desc}
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
        gap: 20
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
          <span style={{ fontSize: 12.5, color: '#cbd5e1', fontWeight: 500, whiteSpace: 'nowrap' }}>
            🫀 Simulasi Denyut Nadi (BPM):
          </span>
          <input
            type="range"
            min="45"
            max="160"
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value))}
            style={{ width: '100%', maxWidth: 280, cursor: 'pointer', accentColor: '#f43f5e' }}
          />
          <span style={{ fontSize: 14, fontWeight: 800, color: '#f43f5e', fontFamily: 'var(--font-mono)', minWidth: 60 }}>
            {bpm} BPM
          </span>
        </div>

        <div style={{ fontSize: 11.5, color: 'var(--fg-muted)' }}>
          *Geser slider untuk mensimulasikan kondisi istirahat vs aktivitas tinggi
        </div>
      </div>
    </div>
  );
}
