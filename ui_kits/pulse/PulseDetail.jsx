const { PathIcon } = window.AvaloniaFluentDesignSystem_a08390;

/* PulseWorkoutDetailView — full-bleed hero with a bottom protection gradient,
   stat strip, then an exercise list on #1a1a1a cards. */
function PulseDetail({ workout }) {
  const w = workout || { title: 'Full Body Ignite', level: 'INTERMEDIATE', color: 'var(--pulse-accent)', min: '32 min', kcal: '450 kcal' };
  const exercises = [
    { name: 'Barbell Squats', sets: '4 x 10' },
    { name: 'Bench Press', sets: '4 x 8' },
    { name: 'Deadlifts', sets: '3 x 6' },
    { name: 'Pull Ups', sets: '3 x 12' },
    { name: 'Overhead Press', sets: '3 x 10' }
  ];
  return (
    <div>
      <div style={{ position: 'relative', height: 260 }}>
        <img src="../../assets/img/pulse/workout_hero.jpg" alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,#00000000 0,#00000066 55%,var(--pulse-bg) 100%)' }} />
        <div style={{ position: 'absolute', left: 16, right: 16, bottom: 16 }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1, color: w.color }}>{w.level}</div>
          <div style={{ fontSize: 26, fontWeight: 700, marginTop: 2 }}>{w.title}</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, padding: '4px 16px 16px' }}>
        {[[w.min, 'Duration'], [w.kcal, 'Burn'], ['5', 'Exercises']].map(([v, l]) => (
          <div key={l} style={{ flex: 1, padding: 12, borderRadius: 16, background: 'var(--pulse-surface)' }}>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{v}</div>
            <div style={{ fontSize: 10, letterSpacing: 1, color: 'var(--pulse-text-4)', marginTop: 2 }}>{l.toUpperCase()}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 18, fontWeight: 700, padding: '0 16px 12px' }}>Exercises</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '0 16px 16px' }}>
        {exercises.map((e, i) => (
          <div key={e.name} style={{
            display: 'flex', alignItems: 'center', gap: 14, padding: 12,
            borderRadius: 16, background: 'var(--pulse-surface)'
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8, flex: '0 0 auto', display: 'grid', placeItems: 'center',
              background: 'var(--pulse-surface-2)', fontSize: 12, fontWeight: 700, color: 'var(--pulse-text-3)'
            }}>{i + 1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{e.name}</div>
              <div style={{ fontSize: 11, color: 'var(--pulse-text-3)' }}>{e.sets}</div>
            </div>
            <PathIcon data="M8.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414L13.586 11 8.293 5.707a1 1 0 0 1 0-1.414Z" size={14} color="var(--pulse-text-4)" />
          </div>
        ))}
      </div>
      <div style={{ padding: '0 16px 24px' }}>
        <button style={{
          width: '100%', height: 48, borderRadius: 12, border: 0, background: 'var(--pulse-accent)',
          color: '#fff', fontWeight: 700, fontSize: 14, fontFamily: 'inherit'
        }}>Start Workout</button>
      </div>
    </div>
  );
}
Object.assign(window, { PulseDetail });
