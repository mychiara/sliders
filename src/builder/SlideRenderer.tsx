import Slide from '../deck/Slide';
import Cover from '../components/Cover';
import Agenda from '../components/Agenda';
import BigNumber from '../components/BigNumber';
import Contrast from '../components/Contrast';
import Bento from '../components/Bento';
import Timeline from '../components/Timeline';
import Steps from '../components/Steps';
import Quote from '../components/Quote';
import FinanceVisual from '../components/FinanceVisual';
import AnatomyVisual from '../components/AnatomyVisual';
import { SlideData } from './types';

export function renderSlide(s: SlideData, index: number) {
  const key = s.id || `slide-${index}`;

  // Dedicated contextual animation widgets
  if (s.visualType === 'finance') {
    return (
      <Slide key={key} center nav={s.nav || 'Keuangan'} notes={s.notes}>
        <FinanceVisual title={s.title} />
      </Slide>
    );
  }

  if (s.visualType === 'anatomy') {
    return (
      <Slide key={key} center nav={s.nav || 'Anatomi'} notes={s.notes}>
        <AnatomyVisual title={s.title} />
      </Slide>
    );
  }

  switch (s.type) {
    case 'cover':
      return (
        <Cover
          key={key}
          nav={s.nav || 'Pembuka'}
          kicker={s.kicker}
          title={s.title}
          subtitle={s.subtitle}
          foot={s.foot}
          notes={s.notes}
        />
      );

    case 'agenda':
      return (
        <Agenda
          key={key}
          nav={s.nav || 'Agenda'}
          kicker={s.kicker}
          title={s.title}
          items={s.items && s.items.length > 0 ? s.items : ['Poin 1', 'Poin 2', 'Poin 3']}
          notes={s.notes}
        />
      );

    case 'statement':
      return (
        <Slide key={key} center nav={s.nav || 'Pernyataan'} notes={s.notes}>
          {s.kicker && <div className="kicker" style={{ marginBottom: 16 }}>{s.kicker}</div>}
          <h2 className="headline" style={{ maxWidth: '28ch', marginInline: 'auto' }}>
            {s.title}
          </h2>
          {s.subtitle && (
            <p className="subhead" style={{ marginTop: 24, maxWidth: '34ch', marginInline: 'auto' }}>
              {s.subtitle}
            </p>
          )}
        </Slide>
      );

    case 'bignumber':
      return (
        <Slide key={key} center nav={s.nav || 'Metrik'} notes={s.notes}>
          {s.kicker && <div className="kicker" style={{ marginBottom: 12 }}>{s.kicker}</div>}
          <BigNumber
            value={s.value || '100%'}
            label={s.label || s.title}
            sub={s.sub || s.subtitle}
          />
        </Slide>
      );

    case 'contrast':
      return (
        <Contrast
          key={key}
          nav={s.nav || 'Perbandingan'}
          kicker={s.kicker}
          title={s.title}
          left={{
            label: s.leftKicker || 'Sebelum',
            title: s.leftTitle || 'Masalah',
            points: s.leftItems || ['Kekurangan 1', 'Kekurangan 2'],
          }}
          right={{
            label: s.rightKicker || 'Sesudah',
            title: s.rightTitle || 'Solusi',
            points: s.rightItems || ['Keunggulan 1', 'Keunggulan 2'],
          }}
          notes={s.notes}
        />
      );

    case 'bento':
      return (
        <Bento
          key={key}
          nav={s.nav || 'Fitur'}
          kicker={s.kicker}
          title={s.title}
          tiles={(s.cards || []).map((c, i) => ({
            k: c.kicker,
            title: c.title,
            body: c.desc,
            c: 6,
            r: 1,
            variant: i === 0 ? 'accent' : undefined,
          }))}
          notes={s.notes}
        />
      );

    case 'timeline':
      return (
        <Slide key={key} center nav={s.nav || 'Timeline'} notes={s.notes}>
          {s.kicker && <div className="kicker" style={{ marginBottom: 12 }}>{s.kicker}</div>}
          <h2 className="headline" style={{ marginBottom: 32 }}>{s.title}</h2>
          <Timeline
            items={(s.timelineItems || []).map((t) => ({
              time: t.date,
              title: t.title,
              body: t.desc,
            }))}
          />
        </Slide>
      );

    case 'steps':
      return (
        <Steps
          key={key}
          nav={s.nav || 'Langkah'}
          kicker={s.kicker}
          title={s.title}
          items={(s.stepsItems || []).map((st) => ({
            title: st.title,
            body: st.desc,
          }))}
          notes={s.notes}
        />
      );

    case 'quote':
      return (
        <Quote
          key={key}
          nav={s.nav || 'Kutipan'}
          text={s.quoteText || s.title}
          name={s.author}
          role={s.role}
          notes={s.notes}
        />
      );

    case 'closing':
    default:
      return (
        <Cover
          key={key}
          nav={s.nav || 'Penutup'}
          kicker={s.kicker || 'Terima Kasih'}
          title={s.title}
          subtitle={s.subtitle}
          foot={s.foot}
          notes={s.notes}
        />
      );
  }
}
