// techlogos.jsx — teknoloji yığını için marka logoları (rozet + glyph)
function TechLogo({ name, size = 30 }) {
  // [badge bg, glyph color, key]
  const map = {
    'Swift':        ['#F05138', '#fff', 'swift'],
    'Kotlin':       ['#7F52FF', '#fff', 'kotlin'],
    'React Native': ['#0B1120', '#61DAFB', 'react'],
    'Flutter':      ['#0468D7', '#fff', 'flutter'],
    'Node.js':      ['#3C873A', '#fff', 'node'],
    'Firebase':     ['#FFA000', '#fff', 'firebase'],
    'Figma':        ['#1E1E1E', '#fff', 'figma'],
    'GraphQL':      ['#E10098', '#fff', 'graphql'],
    'AWS':          ['#232F3E', '#FF9900', 'aws'],
    'PostgreSQL':   ['#336791', '#fff', 'postgres'],
    'TensorFlow':   ['#FF6F00', '#fff', 'tf'],
    'Stripe':       ['#635BFF', '#fff', 'stripe'],
    'Kubernetes':   ['#326CE5', '#fff', 'k8s'],
    'TypeScript':   ['#3178C6', '#fff', 'ts'],
  };
  const [bg, gc, key] = map[name] || ['#6d3bf5', '#fff', 'dot'];
  const inner = size * 0.62;
  return (
    <span style={{ width: size, height: size, borderRadius: size * 0.28, background: bg, display: 'grid', placeItems: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,.25)' }}>
      <svg width={inner} height={inner} viewBox="0 0 24 24">{glyph(key, gc)}</svg>
    </span>
  );
}

function glyph(key, c) {
  const txt = (t, fs = 13) => <text x="12" y="12" textAnchor="middle" dominantBaseline="central" fontFamily="Sora, sans-serif" fontWeight="800" fontSize={fs} fill={c}>{t}</text>;
  switch (key) {
    case 'swift':
      return <path fill={c} d="M3.2 5.4c3.4 3.6 7.2 5.6 11.4 5.3-1 1.7-2.9 2.9-5.2 3 1.5.8 3.4 1 5.2.4-1.5 2.3-4.3 3.4-7 2.5 1.4 1.7 3.4 2.9 5.7 2.7-3.6 2.2-8.7 1.8-11.4-2.6 2.6 1.3 5.2 1.4 7.1.5C8.7 10.6 5.6 8.2 3.2 5.4Z" />;
    case 'kotlin':
      return <><path fill={c} d="M3 3h18L12 12l9 9H3z" opacity=".55" /><path fill={c} d="M21 3 12 12l9 9V3z" opacity="0" /><path fill={c} d="M3 3h9l-9 9z" /></>;
    case 'react':
      return <g><g fill="none" stroke={c} strokeWidth="1.3"><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></g><circle cx="12" cy="12" r="2.1" fill={c} /></g>;
    case 'flutter':
      return <path fill={c} d="M13.8 2 4 11.8l3 3L19.8 2zM13.8 11.4 8.4 16.8 13.8 22h6l-5.4-5.2 5.4-5.4z" />;
    case 'node':
      return <><path fill="none" stroke={c} strokeWidth="1.4" d="M12 2.4 20.4 7v10L12 21.6 3.6 17V7z" />{txt('N', 9)}</>;
    case 'firebase':
      return <path fill={c} d="M5.5 18.5 10.2 3.4c.2-.6 1-.6 1.3-.1l2 3.6-1.7 1.7 4.7 4.6c.3.3.5.7.5 1.1 0 3-2.5 5.1-5.5 5.1-2.6 0-5.5-1.6-6-1.4z" />;
    case 'figma':
      return <g><path fill={c} d="M9.5 2.5h5v5h-5z" opacity=".95" /><circle cx="12" cy="12" r="2.5" fill={c} /><path fill={c} d="M9.5 14.5h2.5v2.5a2.5 2.5 0 1 1-2.5-2.5z" opacity=".8" /><path fill={c} d="M9.5 7.5h2.5v5H9.5a2.5 2.5 0 0 1 0-5z" opacity=".6" /><path fill={c} d="M12 2.5h2.5a2.5 2.5 0 0 1 0 5H12z" opacity=".7" /></g>;
    case 'graphql':
      return <g><g fill="none" stroke={c} strokeWidth="1.1"><path d="M12 3.2 20 7.6v8.8L12 20.8 4 16.4V7.6z" /><path d="M12 3.2 4 16.4M12 3.2 20 16.4M4 7.6h16" /></g><g fill={c}><circle cx="12" cy="3.2" r="1.7" /><circle cx="20" cy="7.6" r="1.7" /><circle cx="20" cy="16.4" r="1.7" /><circle cx="12" cy="20.8" r="1.7" /><circle cx="4" cy="16.4" r="1.7" /><circle cx="4" cy="7.6" r="1.7" /></g></g>;
    case 'aws':
      return <g fill={c}><path d="M4 13.5c4.2 2.9 11.8 2.9 16 .2l1 1.3c-4.8 3.4-13.2 3.4-18 0z" /><path d="M18.5 14.8c.6-1 .3-2.4.3-2.4s1.3.5 1 1.8c-.2 1-1.3.6-1.3.6z" /><text x="12" y="8" textAnchor="middle" fontFamily="Sora" fontWeight="800" fontSize="6.5" fill={c}>aws</text></g>;
    case 'postgres':
      return txt('Pg', 9);
    case 'tf':
      return <g fill={c}><path d="M11 3 4 7v3l3-1.7v8.4L11 19V3z" /><path d="M13 3v3l3 1.7V11l-3-1.7V13l3 1.7v3.3L20 15V7z" opacity=".85" /></g>;
    case 'stripe':
      return txt('S', 14);
    case 'k8s':
      return <g fill="none" stroke={c} strokeWidth="1.4"><path d="M12 3 20 7v8l-8 4-8-4V7z" /><circle cx="12" cy="11" r="3" /></g>;
    case 'ts':
      return txt('TS', 9);
    default:
      return <circle cx="12" cy="12" r="6" fill={c} />;
  }
}
window.TechLogo = TechLogo;
