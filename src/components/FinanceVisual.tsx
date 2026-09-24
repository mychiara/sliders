import { useState, useId } from 'react';
import { motion } from 'framer-motion';

export default function FinanceVisual({ title = 'Simulasi Pertumbuhan Finansial' }: { title?: string }) {
  const [growthMultiplier, setGrowthMultiplier] = useState<number>(25);
  const baseRevenue = 120; // dalam juta
  const projectedRevenue = Math.round(baseRevenue * (1 + growthMultiplier / 100));
  const netProfit = Math.round(projectedRevenue * 0.38);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const gradientId = useId();

  // dynamic heights for bars based on multiplier
  const heights = [35, 42, 50, 48, 58, 65, 72, 80, 85, 92, 100, 110].map(
    (h) => Math.round(h * (1 + (growthMultiplier - 25) * 0.015))
  );

  return (
    <div style={{
      width: '100%',
      maxWidth: 920,
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(79, 229, 176, 0.25)',
      borderRadius: 'var(--radius)',
      padding: '24px 28px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(12px)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <span style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 600 }}>
            Live Financial Widget
          </span>
          <h3 style={{ margin: '4px 0 0', fontSize: 20, fontWeight: 600 }}>{title}</h3>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: 'var(--fg-muted)' }}>Proyeksi Omzet</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
              Rp {projectedRevenue} M
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: 'var(--fg-muted)' }}>Estimasi Laba</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#f4f7fa', fontFamily: 'var(--font-mono)' }}>
              Rp {netProfit} M
            </div>
          </div>
        </div>
      </div>

      {/* SVG Bar & Trend Chart */}
      <div style={{ height: 180, width: '100%', position: 'relative', display: 'flex', alignItems: 'flex-end', gap: 10, paddingBottom: 25 }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none' }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          {/* Trend line */}
          <motion.path
            d={`M 15 ${160 - heights[0]} ` + heights.slice(1).map((h, i) => `L ${15 + (i + 1) * 76} ${160 - h}`).join(' ')}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </svg>

        {heights.map((h, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
            <motion.div
              style={{
                width: '100%',
                maxWidth: 32,
                borderRadius: '6px 6px 0 0',
                background: i === heights.length - 1 ? 'var(--accent)' : 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
              initial={{ height: 0 }}
              animate={{ height: `${Math.min(140, h)}px` }}
              transition={{ duration: 0.8, delay: i * 0.04 }}
            />
            <span style={{ fontSize: 10, color: 'var(--fg-faint)', marginTop: 6, fontFamily: 'var(--font-mono)' }}>
              {months[i]}
            </span>
          </div>
        ))}
      </div>

      {/* Interactive Controls */}
      <div style={{
        marginTop: 14,
        paddingTop: 14,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
          <span style={{ fontSize: 12, color: 'var(--fg-muted)', whiteSpace: 'nowrap' }}>
            Simulasi Target Pertumbuhan:
          </span>
          <input
            type="range"
            min="10"
            max="80"
            value={growthMultiplier}
            onChange={(e) => setGrowthMultiplier(Number(e.target.value))}
            style={{ width: '100%', maxWidth: 260, cursor: 'pointer', accentColor: 'var(--primary)' }}
          />
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-mono)', minWidth: 45 }}>
            +{growthMultiplier}%
          </span>
        </div>

        <div style={{ fontSize: 11, color: 'var(--fg-faint)', fontStyle: 'italic' }}>
          *Geser slider untuk melihat proyeksi dinamis
        </div>
      </div>
    </div>
  );
}
