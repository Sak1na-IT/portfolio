import { useState } from 'react'
import type { Project } from '../data'
import { Reveal } from './Reveal'
export function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [broken, setBroken] = useState(false)
  const tilt = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--rx', `${((e.clientY - r.top) / r.height - 0.5) * -6}deg`)
    e.currentTarget.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - 0.5) * 6}deg`)
  }
  const reset = (e: React.PointerEvent<HTMLElement>) => { e.currentTarget.style.setProperty('--rx', '0deg'); e.currentTarget.style.setProperty('--ry', '0deg') }
  return (
    <Reveal className={`pc-slot ${index % 2 ? 'odd' : ''}`}>
      <article className="pc" onPointerMove={tilt} onPointerLeave={reset}>
        <div className="frame">
          <div className="bar"><i /><i /><i /><span>{p.live?.replace('https://', '') ?? p.name.toLowerCase()}</span></div>
          <div className="shot">
            {p.shot && !broken
              ? <img src={p.shot} alt={`${p.name} screenshot`} loading="lazy" onError={() => setBroken(true)} />
              : <div className="ph"><b>{p.name[0]}</b><small>Add screenshot to public{p.shot}</small></div>}
            <div className="veil"><p>{p.description}</p><span>{p.role}</span></div>
          </div>
        </div>
        <div className="meta">
          <span className="num">0{index + 1} / {p.year}</span>
          <h3>{p.name}</h3><p className="tag">{p.tagline}</p>
          <ul className="chips">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
          <div className="links">
            {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live demo ↗</a>}
            {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
          </div>
        </div>
      </article>
    </Reveal>
  )
}
