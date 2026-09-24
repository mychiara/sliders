import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TechVisual({ title = 'Arsitektur AI & Otomatisasi Sistem Cerdas' }: { title?: string }) {
  const [activeLayer, setActiveLayer] = useState<'input' | 'hidden' | 'output'>('hidden');
  const [throughput, setThroughput] = useState<number>(4500);

  const layerDescriptions = {
    input: 'Sensor & Data Stream: Ingesti data terdistribusi berkecepatan tinggi dari ribuan titik endpoint.',
    hidden: 'Neural Processing Core: Inferensi model deep learning berlatensi rendah dengan akselerasi GPU.',
    output: 'Autonomous Decision Engine: Eksekusi otomatis, peringatan dini prediktif, dan orkestrasi tindakan.',
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: 920,
      margin: '0 auto',
      background: 'rgba(10, 14, 26, 0.75)',
      border: '1px solid rgba(99, 102, 241, 0.35)',
      borderRadius: 'var(--radius)',
      padding: '24px 28px',
      boxShadow: '0 25px 70px rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(16px)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <span style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#818cf8', fontWeight: 600 }}>
            Live Neural & Cloud Telemetry
          </span>
          <h3 style={{ margin: '4px 0 0', fontSize: 20, fontWeight: 600 }}>{title}</h3>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: 'var(--fg-muted)' }}>Throughput Data</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
              {throughput.toLocaleString()} <span style={{ fontSize: 13 }}>ops/dtk</span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: 'var(--fg-muted)' }}>Latensi Inferensi</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#4fe5b0', fontFamily: 'var(--font-mono)' }}>
              1.2 ms
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Neural Network Graph Animation */}
      <div style={{
        height: 180,
        position: 'relative',
        background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, rgba(5, 7, 15, 0.4) 100%)',
        borderRadius: 14,
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 40px',
        overflow: 'hidden',
      }}>
        {/* Animated Connecting Synapse Lines */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {[
            { x1: '20%', y1: '30%', x2: '50%', y2: '25%' },
            { x1: '20%', y1: '50%', x2: '50%', y2: '50%' },
            { x1: '20%', y1: '70%', x2: '50%', y2: '75%' },
            { x1: '50%', y1: '25%', x2: '80%', y2: '40%' },
            { x1: '50%', y1: '50%', x2: '80%', y2: '50%' },
            { x1: '50%', y1: '75%', x2: '80%', y2: '60%' },
          ].map((l, i) => (
            <motion.line
              key={i}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke="rgba(99, 102, 241, 0.5)"
              strokeWidth="2"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </svg>

        {/* Input Nodes Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, zIndex: 1, alignItems: 'center' }}>
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              whileHover={{ scale: 1.25 }}
              onClick={() => setActiveLayer('input')}
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: activeLayer === 'input' ? '#38bdf8' : 'rgba(56, 189, 248, 0.25)',
                border: '2px solid #38bdf8',
                boxShadow: '0 0 16px rgba(56, 189, 248, 0.5)',
                cursor: 'pointer',
              }}
            />
          ))}
          <span style={{ fontSize: 11, color: '#38bdf8', fontWeight: 600, marginTop: 4 }}>Input Ingestion</span>
        </div>

        {/* Hidden Layer Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, zIndex: 1, alignItems: 'center' }}>
          {[1, 2, 3, 4].map((n) => (
            <motion.div
              key={n}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: n * 0.2 }}
              onClick={() => setActiveLayer('hidden')}
              style={{
                width: 34,
                height: 34,
                borderRadius: '50%',
                background: activeLayer === 'hidden' ? '#a855f7' : 'rgba(168, 85, 247, 0.25)',
                border: '2px solid #a855f7',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)',
                cursor: 'pointer',
              }}
            />
          ))}
          <span style={{ fontSize: 11, color: '#a855f7', fontWeight: 600, marginTop: 4 }}>Neural Engine</span>
        </div>

        {/* Output Nodes Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, zIndex: 1, alignItems: 'center' }}>
          {[1, 2].map((n) => (
            <motion.div
              key={n}
              whileHover={{ scale: 1.25 }}
              onClick={() => setActiveLayer('output')}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: activeLayer === 'output' ? '#4fe5b0' : 'rgba(79, 229, 176, 0.25)',
                border: '2px solid #4fe5b0',
                boxShadow: '0 0 20px rgba(79, 229, 176, 0.6)',
                cursor: 'pointer',
              }}
            />
          ))}
          <span style={{ fontSize: 11, color: '#4fe5b0', fontWeight: 600, marginTop: 4 }}>Output Actions</span>
        </div>
      </div>

      {/* Layer Fact Explanation */}
      <div style={{
        marginTop: 14,
        padding: '12px 18px',
        borderRadius: 10,
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        fontSize: 13.5,
        lineHeight: 1.5,
        color: '#e2e8f0',
      }}>
        <strong style={{ color: '#818cf8', textTransform: 'capitalize' }}>Lapisan {activeLayer}:</strong> {layerDescriptions[activeLayer]}
      </div>

      {/* Throughput Controller */}
      <div style={{
        marginTop: 14,
        paddingTop: 12,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
          <span style={{ fontSize: 12, color: 'var(--fg-muted)', whiteSpace: 'nowrap' }}>
            Simulasi Beban Komputasi:
          </span>
          <input
            type="range"
            min="1000"
            max="12000"
            step="500"
            value={throughput}
            onChange={(e) => setThroughput(Number(e.target.value))}
            style={{ width: '100%', maxWidth: 260, cursor: 'pointer', accentColor: '#6366f1' }}
          />
          <span style={{ fontSize: 13, fontWeight: 700, color: '#38bdf8', fontFamily: 'var(--font-mono)', minWidth: 80 }}>
            {throughput} ops
          </span>
        </div>
        <div style={{ fontSize: 11, color: 'var(--fg-faint)', fontStyle: 'italic' }}>
          *Klik node untuk membedah arsitektur
        </div>
      </div>
    </div>
  );
}
