import { useEffect, useRef } from 'react'
export function Orb() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current!
    const move = (e: PointerEvent) => {
      const x = (e.clientX / innerWidth - 0.5) * 2, y = (e.clientY / innerHeight - 0.5) * 2
      el.style.setProperty('--px', x.toFixed(3)); el.style.setProperty('--py', y.toFixed(3))
    }
    addEventListener('pointermove', move); return () => removeEventListener('pointermove', move)
  }, [])
  const text = 'REACT · TYPESCRIPT · INTERFACES · DETAILS · '
  return (
    <div className="orb-wrap" ref={ref} aria-hidden="true">
      <svg className="ring" viewBox="0 0 300 300"><defs><path id="c" d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0" /></defs>
        <text><textPath href="#c">{text.repeat(2)}</textPath></text></svg>
      <div className="orb"><span className="shine" /></div>
      <div className="orb-small" />
    </div>
  )
}
