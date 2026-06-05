// phone.jsx — hafif, özelleştirilebilir telefon çerçevesi
// Exports: PhoneFrame, PhoneStatusBar, TabBar, Icon

function PhoneStatusBar({ tint = 'dark', bg = 'transparent', time = '9:41' }) {
  const c = tint === 'light' ? '#fff' : '#0e0a18';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '11px 22px 6px', background: bg, position: 'relative', zIndex: 8, flexShrink: 0,
    }}>
      <span style={{ fontWeight: 700, fontSize: 13, color: c, fontFamily: 'var(--display)', letterSpacing: '.02em' }}>{time}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <svg width="16" height="11" viewBox="0 0 18 12"><rect x="0" y="7.5" width="3" height="4.5" rx=".6" fill={c}/><rect x="4.5" y="5" width="3" height="7" rx=".6" fill={c}/><rect x="9" y="2.5" width="3" height="9.5" rx=".6" fill={c}/><rect x="13.5" y="0" width="3" height="12" rx=".6" fill={c} opacity=".4"/></svg>
        <svg width="15" height="11" viewBox="0 0 17 12"><path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={c}/><circle cx="8.5" cy="10" r="1.4" fill={c}/></svg>
        <svg width="22" height="11" viewBox="0 0 25 12"><rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke={c} strokeOpacity=".35" fill="none"/><rect x="2" y="2" width="16" height="8" rx="1.6" fill={c}/><rect x="23" y="4" width="1.5" height="4" rx=".7" fill={c} opacity=".4"/></svg>
      </div>
    </div>
  );
}

function PhoneFrame({ children, width = 290, statusBg = '#fff', statusTint = 'dark', time = '9:41', glow }) {
  const ratio = 2.075;
  const height = Math.round(width * ratio);
  return (
    <div style={{
      width, height, flexShrink: 0, position: 'relative',
      borderRadius: width * 0.155, padding: width * 0.028,
      background: 'linear-gradient(150deg,#1c1726,#322a44)',
      boxShadow: glow
        ? `0 30px 70px ${glow}, 0 0 0 1px rgba(0,0,0,0.25)`
        : '0 24px 60px rgba(40,22,90,0.28), 0 0 0 1px rgba(0,0,0,0.25)',
    }}>
      <div style={{
        width: '100%', height: '100%', borderRadius: width * 0.128, overflow: 'hidden',
        background: statusBg, position: 'relative', display: 'flex', flexDirection: 'column',
      }}>
        {/* dynamic island */}
        <div style={{
          position: 'absolute', top: 9, left: '50%', transform: 'translateX(-50%)',
          width: width * 0.3, height: width * 0.092, borderRadius: 99, background: '#0a0710', zIndex: 20,
        }} />
        <PhoneStatusBar tint={statusTint} bg={statusBg} time={time} />
        <div className="ph-screen" style={{ flex: 1, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// generic tab bar for app screens
function TabBar({ items, active, onChange, accent = '#6d3bf5' }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-around', alignItems: 'center',
      padding: '9px 6px 16px', background: 'rgba(255,255,255,0.96)',
      borderTop: '1px solid rgba(0,0,0,0.06)', backdropFilter: 'blur(8px)', flexShrink: 0,
    }}>
      {items.map((it, i) => {
        const on = i === active;
        return (
          <button key={i} onClick={() => onChange && onChange(i)} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            color: on ? accent : '#b7b1c4', flex: 1, padding: 0,
          }}>
            <Icon name={it.icon} size={21} stroke={on ? accent : '#b7b1c4'} fill={on ? accent : 'none'} />
            <span style={{ fontSize: 9.5, fontWeight: 700, fontFamily: 'var(--display)' }}>{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// minimal icon set (stroke based)
function Icon({ name, size = 22, stroke = '#000', fill = 'none', sw = 1.9 }) {
  const p = { fill: 'none', stroke, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const f = { fill: fill === 'none' ? 'none' : fill, stroke, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    home: <><path d="M3 10.5 12 3l9 7.5" {...p}/><path d="M5 9.5V20h14V9.5" {...f}/></>,
    search: <><circle cx="11" cy="11" r="7" {...p}/><path d="M21 21l-4-4" {...p}/></>,
    cart: <><circle cx="9" cy="20" r="1.4" {...f}/><circle cx="18" cy="20" r="1.4" {...f}/><path d="M2 3h3l2.4 12.5a1.5 1.5 0 0 0 1.5 1.2h8.3a1.5 1.5 0 0 0 1.5-1.2L21.5 7H6" {...p}/></>,
    user: <><circle cx="12" cy="8" r="4" {...f}/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" {...p}/></>,
    heart: <path d="M12 20s-7-4.5-9.5-9C1 8 2.5 4.5 6 4.5c2.2 0 3.4 1.4 4 2.3.6-.9 1.8-2.3 4-2.3 3.5 0 5 3.5 3.5 6.5C19 15.5 12 20 12 20Z" {...f}/>,
    bag: <><path d="M5 8h14l-1 12.5H6L5 8Z" {...f}/><path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8" {...p}/></>,
    grid: <><rect x="3" y="3" width="7.5" height="7.5" rx="2" {...f}/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2" {...p}/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2" {...p}/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" {...p}/></>,
    map: <><path d="M9 4 3 6.5v13.5L9 17.5l6 2.5 6-2.5V4l-6 2.5L9 4Z" {...p}/><path d="M9 4v13.5M15 6.5V20" {...p}/></>,
    card: <><rect x="2.5" y="5" width="19" height="14" rx="3" {...f}/><path d="M2.5 9.5h19" {...p}/></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" {...p}/></>,
    play: <path d="M7 4.5v15l12-7.5-12-7.5Z" {...f}/>,
    bell: <><path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" {...f}/><path d="M10 21a2 2 0 0 0 4 0" {...p}/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" {...f}/><path d="M3 9.5h18M8 3v4M16 3v4" {...p}/></>,
    clock: <><circle cx="12" cy="12" r="9" {...f}/><path d="M12 7v5l3.5 2" {...p}/></>,
    book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" {...f}/><path d="M4 19a2 2 0 0 1 2-2h13" {...p}/></>,
    flame: <path d="M12 3c1 4-3 5-3 9a3 3 0 0 0 6 0c0-1-.5-2-.5-2 1.5 1 2.5 3 2.5 5a5.5 5.5 0 1 1-11 0c0-5 5-7 6-12Z" {...f}/>,
    music: <><circle cx="6" cy="18" r="3" {...f}/><circle cx="17" cy="16" r="3" {...f}/><path d="M9 18V6l11-2v12" {...p}/></>,
    chat: <><path d="M4 5h16v11H9l-5 4V5Z" {...f}/></>,
    plus: <path d="M12 5v14M5 12h14" {...p}/>,
    star: <path d="M12 3.5 14.6 9l6 .8-4.4 4.2 1.1 6L12 17.2 6.7 20l1.1-6L3.4 9.8l6-.8L12 3.5Z" {...f}/>,
    compass: <><circle cx="12" cy="12" r="9" {...p}/><path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" {...f}/></>,
    activity: <path d="M3 12h4l2.5 7 5-15L17 12h4" {...p}/>,
    library: <><path d="M5 4v16M9 4v16M14 5l5 14" {...p}/></>,
    arrowLeft: <path d="M15 5l-7 7 7 7" {...p}/>,
    check: <path d="M5 12l5 5 9-11" {...p}/>,
    pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" {...f}/><circle cx="12" cy="10" r="2.5" {...p}/></>,
    nav2: <path d="M3 11 21 3l-8 18-2-7-8-3Z" {...f}/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24">{paths[name] || null}</svg>;
}

Object.assign(window, { PhoneFrame, PhoneStatusBar, TabBar, Icon });
