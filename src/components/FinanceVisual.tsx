import { useState, useId } from 'react';
import { motion } from 'framer-motion';

export default function FinanceVisual({ title = 'Simulasi Pertumbuhan Finansial & Proyeksi Fiskal' }: { title?: string }) {
  const [growthMultiplier, setGrowthMultiplier] = useState<number>(35);
  const [activeTab, setActiveTab] = useState<'revenue' | 'profit' | 'valuation'>('revenue');

  const baseRevenue = 150; // dalam miliar
  const projectedRevenue = (baseRevenue * (1 + growthMultiplier / 100)).toFixed(1);
  const netProfit = (Number(projectedRevenue) * 0.32).toFixed(1);
  const projectedValuation = (Number(projectedRevenue) * 6.5).toFixed(1);

  const months = ['Q1', 'Q2', 'Q3', 'Q4', 'Q1+', 'Q2+', 'Q3+', 'Q4+'];
  const gradientId = useId();

  const dataPoints = [35, 48, 62, 75, 90, 110, 130, 155].map(
    (val) => Math.round(val * (1 + (growthMultiplier - 35) * 0.015))
  );

  return (
    <div style={{
      width: '100%',
      maxWidth: 960,
      margin: '0 auto',
      background: 'linear-gradient(135deg, rgba(8, 20, 16, 0.85) 0%, rgba(5, 12, 10, 0.95) 100%)',
      border: '1px solid rgba(79, 229, 176, 0.35)',
      borderRadius: 'var(--radius)',
      padding: '26px 30px',
      boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.8), 0 0 50px -10px rgba(79, 229, 176, 0.2)',
      backdropFilter: 'blur(20px)',
    }}>
      {/* Top Header & Tab Badges */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{
              fontSize: 10.5,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--accent-ink)',
              background: 'var(--accent)',
              padding: '3px 8px',
              borderRadius: 6,
              fontWeight: 700,
            }}>
              Live Financial Telemetry
            </span>
            <span style={{ fontSize: 11, color: '#4fe5b0', display: 'flex', alignItems: 'center', gap: 4 }}>
              ● Model Aktif
            </span>
          </div>
          <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>{title}</h3>
        </div>

        {/* View mode toggle */}
        <div style={{ display: 'flex', gap: 6, background: 'rgba(255, 255, 255, 0.05)', padding: 4, borderRadius: 10 }}>
          {[
            { id: 'revenue', label: 'Pendapatan' },
            { id: 'profit', label: 'Laba Bersih' },
            { id: 'valuation', label: 'Estimasi Valuasi' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                background: activeTab === tab.id ? 'var(--primary)' : 'transparent',
                color: activeTab === tab.id ? 'var(--accent-ink)' : 'var(--fg-muted)',
                fontWeight: activeTab === tab.id ? 700 : 500,
                border: 'none',
                padding: '6px 12px',
                borderRadius: 7,
                fontSize: 12,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3 Key Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 20 }}>
        <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 12, padding: '12px 16px' }}>
          <div style={{ fontSize: 11.5, color: 'var(--fg-muted)', marginBottom: 2 }}>Target Omzet Tahunan</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
            Rp {projectedRevenue} M
          </div>
          <div style={{ fontSize: 11, color: '#4fe5b0', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
            ▲ +{growthMultiplier}% vs Baseline
          </div>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 12, padding: '12px 16px' }}>
          <div style={{ fontSize: 11.5, color: 'var(--fg-muted)', marginBottom: 2 }}>Proyeksi Laba Bersih (32%)</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: '#f4f7fa', fontFamily: 'var(--font-mono)' }}>
            Rp {netProfit} M
          </div>
          <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>
            Margin operasi terlindungi
          </div>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 12, padding: '12px 16px' }}>
          <div style={{ fontSize: 11.5, color: 'var(--fg-muted)', marginBottom: 2 }}>Implikasi Valuasi (6.5x)</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
            Rp {projectedValuation} M
          </div>
          <div style={{ fontSize: 11, color: '#38bdf8', marginTop: 2 }}>
            Multiple valuasi wajar
          </div>
        </div>
      </div>

      {/* SVG Interactive Area & Bar Chart */}
      <div style={{
        height: 170,
        position: 'relative',
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 14,
        border: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: '0 24px 18px 24px',
        overflow: 'hidden',
      }}>
        {/* Background Grid Lines */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '14px 20px', pointerEvents: 'none', opacity: 0.15 }}>
          <div style={{ borderBottom: '1px dashed #fff', width: '100%' }} />
          <div style={{ borderBottom: '1px dashed #fff', width: '100%' }} />
          <div style={{ borderBottom: '1px dashed #fff', width: '100%' }} />
        </div>

        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none' }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Area under curve */}
          <motion.path
            d={`M 50 150 ` + dataPoints.map((val, i) => `L ${50 + i * 110} ${150 - Math.min(115, val * 0.75)}`).join(' ') + ` L ${50 + 7 * 110} 150 Z`}
            fill={`url(#${gradientId})`}
          />

          {/* Trend line with glow */}
          <motion.path
            d={`M 50 ${150 - Math.min(115, dataPoints[0] * 0.75)} ` + dataPoints.slice(1).map((val, i) => `L ${50 + (i + 1) * 110} ${150 - Math.min(115, val * 0.75)}`).join(' ')}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{ filter: 'drop-shadow(0 0 8px rgba(79, 229, 176, 0.6))' }}
          />

          {/* Glowing points */}
          {dataPoints.map((val, i) => (
            <circle
              key={i}
              cx={50 + i * 110}
              cy={150 - Math.min(115, val * 0.75)}
              r="4.5"
              fill="var(--accent-ink)"
              stroke="var(--primary)"
              strokeWidth="2.5"
            />
          ))}
        </svg>

        {dataPoints.map((val, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-mono)', marginBottom: 6 }}>
              {val}M
            </span>
            <span style={{ fontSize: 11, color: 'var(--fg-faint)', fontFamily: 'var(--font-mono)' }}>
              {months[i]}
            </span>
          </div>
        ))}
      </div>

      {/* Interactive Controls & Scenario Testing */}
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
            🎛️ Simulasi Akselerasi Pertumbuhan:
          </span>
          <input
            type="range"
            min="10"
            max="90"
            step="5"
            value={growthMultiplier}
            onChange={(e) => setGrowthMultiplier(Number(e.target.value))}
            style={{ width: '100%', maxWidth: 280, cursor: 'pointer', accentColor: 'var(--primary)' }}
          />
          <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)', minWidth: 55 }}>
            +{growthMultiplier}% YoY
          </span>
        </div>

        <div style={{ fontSize: 11.5, color: 'var(--fg-muted)' }}>
          *Geser slider untuk menguji skenario optimis vs moderat
        </div>
      </div>
    </div>
  );
}
