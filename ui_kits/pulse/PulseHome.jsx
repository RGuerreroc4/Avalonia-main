const { PathIcon } = window.AvaloniaFluentDesignSystem_a08390;
const CLOCK = "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z";
const FLAME = "M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z";
const BELL = "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z";

const CATS = [
  { title: 'HIIT', sessions: '12 Sessions', img: '../../assets/img/pulse/cat_hiit.jpg' },
  { title: 'Strength', sessions: '18 Sessions', img: '../../assets/img/pulse/cat_strength.jpg' },
  { title: 'Yoga', sessions: '8 Sessions', img: '../../assets/img/pulse/cat_yoga.jpg' }
];
const RECS = [
  { level: 'INTERMEDIATE', color: 'var(--pulse-accent)', title: 'Full Body Ignite', min: '32 min', kcal: '450 kcal', img: '../../assets/img/pulse/rec_fullbody.jpg' },
  { level: 'BEGINNER', color: 'var(--pulse-green)', title: 'Sunrise Mobility', min: '15 min', kcal: '120 kcal', img: '../../assets/img/pulse/rec_mobility.jpg' },
  { level: 'ADVANCED', color: 'var(--pulse-orange)', title: 'Power Core 2.0', min: '45 min', kcal: '600 kcal', img: '../../assets/img/pulse/rec_powercore.jpg' }
];

function Meta({ icon, children }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
      <PathIcon data={icon} size={12} color="var(--pulse-text-4)" />
      <span style={{ fontSize: 11, color: 'var(--pulse-text-3)' }}>{children}</span>
    </span>
  );
}

function PulseHome({ onOpen }) {
  const [chip, setChip] = React.useState(0);
  const chips = ['All Workouts', 'Beginner', '15-30 min', 'Equipment'];
  return (
    <div style={{ paddingBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '20px 16px 8px' }}>
        <img src="../../assets/img/pulse/profile_avatar.jpg" alt=""
          style={{ width: 44, height: 44, borderRadius: 22, objectFit: 'cover', border: '2px solid #4D256af4' }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: 2, color: 'var(--pulse-text-4)' }}>WELCOME BACK</div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Alex Johnson</div>
        </div>
        <button style={{
          width: 40, height: 40, borderRadius: 20, background: 'var(--pulse-surface)',
          border: '1px solid #4D256af4', display: 'grid', placeItems: 'center'
        }}><PathIcon data={BELL} size={18} color="var(--pulse-text-3)" /></button>
      </div>

      <div style={{ display: 'flex', gap: 10, padding: '8px 16px 16px', overflowX: 'auto' }}>
        {chips.map((c, i) => (
          <button key={c} onClick={() => setChip(i)} style={{
            flex: '0 0 auto', padding: '10px 18px', borderRadius: 999, fontSize: 13, fontFamily: 'inherit',
            fontWeight: i === chip ? 600 : 500,
            background: i === chip ? 'var(--pulse-accent)' : 'var(--pulse-surface)',
            border: '1px solid ' + (i === chip ? 'var(--pulse-accent)' : 'var(--pulse-hairline)'),
            color: i === chip ? '#fff' : 'var(--pulse-text-3)'
          }}>{c}</button>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px 12px' }}>
        <span style={{ fontSize: 18, fontWeight: 700 }}>Categories</span>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--pulse-accent)' }}>See All</span>
      </div>
      <div style={{ display: 'flex', gap: 12, padding: '0 16px', overflowX: 'auto' }}>
        {CATS.map(c => (
          <div key={c.title} style={{
            flex: '0 0 auto', position: 'relative', width: 140, height: 190,
            borderRadius: 16, overflow: 'hidden'
          }}>
            <img src={c.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,#00000000 0,#00000033 40%,#000000cc 100%)' }} />
            <div style={{ position: 'absolute', left: 12, right: 12, bottom: 12 }}>
              <div style={{ fontSize: 16, fontWeight: 700 }}>{c.title}</div>
              <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--pulse-text-3)' }}>{c.sessions}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: 18, fontWeight: 700, padding: '20px 16px 12px' }}>Recommended for You</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '0 16px' }}>
        {RECS.map(r => (
          <div key={r.title} onClick={() => onOpen(r)} style={{
            display: 'flex', alignItems: 'center', gap: 14, padding: 12,
            borderRadius: 16, background: 'var(--pulse-surface)', cursor: 'pointer'
          }}>
            <img src={r.img} alt="" style={{ width: 80, height: 80, borderRadius: 12, objectFit: 'cover', flex: '0 0 auto' }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1, color: r.color, marginBottom: 2 }}>{r.level}</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{r.title}</div>
              <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                <Meta icon={CLOCK}>{r.min}</Meta><Meta icon={FLAME}>{r.kcal}</Meta>
              </div>
            </div>
            <div style={{
              width: 40, height: 40, borderRadius: 20, flex: '0 0 auto', display: 'grid', placeItems: 'center',
              background: 'color-mix(in srgb, ' + r.color + ' 10%, transparent)'
            }}><PathIcon data="M8 5v14l11-7z" size={16} color={r.color} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}
Object.assign(window, { PulseHome });
