import { useEffect, useState } from 'react'
import { learning, profile, projects, stack } from './data'
import { Orb } from './components/Orb'
import { ProjectCard } from './components/ProjectCard'
import { Reveal } from './components/Reveal'

const nav = ['about', 'stack', 'projects', 'learning', 'contact']

export default function App() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const f = () => setProgress(scrollY / Math.max(1, document.body.scrollHeight - innerHeight))
    f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f)
  }, [])
  const contacts = [
    { k: 'GitHub', v: 'Sak1na-IT', href: profile.github },
    { k: 'LinkedIn', v: 'Connect', href: profile.linkedin },
    { k: 'Email', v: profile.email, href: profile.email && `mailto:${profile.email}` },
  ].filter(c => c.href)
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <header className="nav">
        <a href="#top" className="logo">S<em>.</em>P</a>
        <nav aria-label="Primary">{nav.map(n => <a key={n} href={`#${n}`}>{n}</a>)}</nav>
      </header>
      <main id="main">
        <section id="top" className="hero">
          <div className="hero-text">
            <p className="eyebrow">{profile.school} · Portfolio 2026</p>
            <h1><span>Sakinakhanim</span><span className="it">Pashazade</span></h1>
            <p className="role">{profile.role}<i /></p>
            <p className="lead">I build modern, responsive web applications where clarity and small details do the talking.</p>
            <div className="cta"><a className="btn" href="#projects">See my work</a><a className="btn ghost" href="#contact">Say hello</a></div>
          </div>
          <Orb />
          <a className="scroll" href="#about" aria-label="Scroll to about">scroll</a>
        </section>

        <section id="about" className="about">
          <Reveal><p className="eyebrow">01 — About</p></Reveal>
          <Reveal delay={80}><h2>Interfaces that feel <em>calm</em>, even when the product is complex.</h2></Reveal>
          <div className="about-cols">
            <Reveal delay={120}><p>I am an Information Technology student at UNEC and an aspiring frontend developer. I care about the moment a person lands on a page: is it clear what to do, and does it feel good to do it?</p></Reveal>
            <Reveal delay={200}><p>I enjoy building marketplaces and everyday tools: AzLink for local services, Relove for second-hand fashion, AzXərclə for tracking spending. Each one taught me how design, data and code meet in a real product.</p></Reveal>
          </div>
        </section>

        <section id="stack" className="stack">
          <Reveal><p className="eyebrow">02 — Tech stack</p></Reveal>
          <div className="stack-grid">
            {stack.map((g, i) => (
              <Reveal key={g.group} delay={i * 90}><div className="stack-card"><h3>{g.group}</h3>
                <ul>{g.items.map(t => <li key={t}>{t}</li>)}</ul></div></Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="projects">
          <Reveal><p className="eyebrow">03 — Featured projects</p></Reveal>
          <Reveal delay={80}><h2>Selected <em>work</em></h2></Reveal>
          {projects.map((p, i) => <ProjectCard key={p.name} p={p} index={i} />)}
        </section>

        <section id="learning" className="learning">
          <Reveal><p className="eyebrow">04 — Currently learning</p></Reveal>
          <ol>{learning.map((l, i) => (
            <Reveal key={l.title} delay={i * 80}><li><span>0{i + 1}</span><h3>{l.title}</h3><p>{l.note}</p></li></Reveal>
          ))}</ol>
        </section>

        <section id="contact" className="contact">
          <Reveal><p className="eyebrow">05 — Contact</p></Reveal>
          <Reveal delay={80}><h2>Let’s build something <em>thoughtful</em>.</h2></Reveal>
          <Reveal delay={160}><div className="contact-links">
            {contacts.map(c => <a key={c.k} href={c.href} target="_blank" rel="noreferrer"><small>{c.k}</small><span>{c.v}</span><b>↗</b></a>)}
          </div></Reveal>
        </section>
      </main>
      <footer>© 2026 {profile.name}</footer>
    </>
  )
}
