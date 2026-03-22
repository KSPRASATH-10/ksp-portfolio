export function BlobBg() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div style={{
        position: 'absolute', width: 600, height: 600, top: '-10%', left: '-15%',
        background: 'radial-gradient(ellipse, rgba(108,99,255,0.18) 0%, transparent 70%)',
        animation: 'blob1 14s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 500, height: 500, bottom: '-5%', right: '-10%',
        background: 'radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%)',
        animation: 'blob2 18s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, top: '40%', right: '20%',
        background: 'radial-gradient(ellipse, rgba(0,212,255,0.08) 0%, transparent 70%)',
        animation: 'blob1 22s ease-in-out infinite reverse',
      }} />
    </div>
  )
}
