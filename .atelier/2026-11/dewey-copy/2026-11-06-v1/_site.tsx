// Frozen JSX ports of the real site's Navigation, Footer, WorkStub, ProjectStub and the two
// pages, with their class names verbatim. Only data differs (Dewey, Orkestra, Tiniest Fox).
import type { ReactNode } from 'react'
import { ArrowUp, GitHub, Npm, SunAuto, Web } from './_icons'

export type Marker = 'badge' | 'dot' | 'dates' | 'both'
export type Copy = { dewey: string; deweyTech: string; fox: string; foxTech: string; more: string; intro: string; atelier: string; stillroom: string; soon: string }

const fonts = `@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans&family=IBM+Plex+Serif:wght@600&display=fallback');`

export function Site({ dark, children }: { dark: boolean; children: ReactNode }) {
  return (
    <div className={`${dark ? 'dark' : ''} min-h-screen font-sans`} data-atelier="site" data-mode={dark ? 'dark' : 'light'}>
      <style>{fonts}</style>
      <div className="transition-all min-h-screen">
        <main className="k-container relative">
          <nav className="absolute top-0 left-0 right-0 flex items-center justify-end px-4 py-12 lg:px-8 lg:py-16 space-x-6">
            <a className="text-link-blue text-lg" href="#">Work</a>
            <a className="text-link-blue text-lg" href="#">Projects</a>
            <div className="flex flex-col items-end relative">
              <button className="p-1 lg:p-2 text-gray-600 dark:text-gray-300" aria-label="Open dark mode selector"><SunAuto size={24} /></button>
            </div>
          </nav>
          {children}
        </main>
        <div className="w-full bg-gray-100 dark:bg-transparent dark:border-t">
          <div className="k-container k-grid py-12 lg:py-32">
            <div className="col-span-4">
              <p className="text-2xl">Looking for a way to connect?</p>
              <div className="space-x-6 flex items-center mt-6">
                <a className="text-link-blue" href="#">LinkedIn</a>
                <a className="text-link-blue" href="#">Twitter</a>
                <a className="text-link-blue" href="#">GitHub</a>
                <a className="text-link-blue" href="#">Email</a>
              </div>
            </div>
            <div className="col-span-4"></div>
            <div className="col-span-4 flex items-start lg:justify-end mt-12 lg:mt-0">
              <a className="button-icon w-12 h-12" aria-label="Scroll to top of page" href="#top"><ArrowUp size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- WORK ---------- */

type Work = { title: string; description: string; dates: string; tech: string; color: string; img: string; current?: boolean }

export const work: Work[] = [
  { title: 'Dewey', description: 'Placeholder: one or two sentences about what Dewey is and what I do there, in the same voice as the entries below.', dates: '2025—', tech: 'Placeholder, Stack', color: 'bg-blue-500 dark:bg-blue-300', img: 'Dewey image (placeholder)', current: true },
  { title: 'Donut', description: 'As one of the co-founders of Donut, I was intimately involved in almost every aspect of bringing it to life, from engineering to, product to marketing.', dates: '2016—2020', tech: 'Rails, Vue, Design, Product', color: 'bg-donut dark:bg-donut-dark', img: 'Donut photo' },
  { title: 'Cover', description: "Though I started as Cover's sole android engineer, I eventually took on building out an internal iOS apps and eventually rebuilding both our iPad and iPhone apps.", dates: '2014—2016', tech: 'Ruby, iOS, Android', color: 'bg-cover dark:bg-cover-dark', img: 'Cover photo' },
  { title: 'Kullect', description: "My first 'real' job involved building and maintaining two Android apps, involving interesting work in capturing and manipulating photos, videos, and GIFS.", dates: '2012—2014', tech: 'Android', color: 'bg-kullect dark:bg-kullect-dark', img: 'Kullect photo' },
]

function Badge() {
  return <span className="ml-3 align-middle font-mono text-xs uppercase tracking-wider rounded-full px-2.5 py-0.5 border-2 border-blue-500 text-blue-600 bg-blue-50 dark:border-blue-300 dark:text-blue-300 dark:bg-blue-900/40">Current</span>
}
function Dot() {
  return (
    <span className="ml-3 inline-block align-middle w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-300 ring-4 ring-blue-500/20 dark:ring-blue-300/20" title="Current">
      <span className="sr-only">Current</span>
    </span>
  )
}

function WorkStub({ w, flip, marker }: { w: Work; flip: boolean; marker: Marker }) {
  const imgClass = flip ? 'col-start-1 col-end-6' : 'col-start-7 col-end-12'
  const contentClass = flip ? 'col-start-7 col-end-12' : 'col-start-1 col-end-6'
  const present = w.current && (marker === 'dates' || marker === 'both')
  return (
    <div className="lg:grid grid-cols-12 col-span-12 items-center">
      <div className={`${imgClass} w-full row-start-1 h-72 lg:h-screen max-h-800 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 font-serif text-2xl`}>{w.img}</div>
      <div className={`${contentClass} row-start-1 mt-8 lg:mt-0`}>
        <h2 className="font-semibold font-serif text-3xl lg:text-4xl">
          {w.title}
          {w.current && marker === 'badge' && <Badge />}
          {w.current && (marker === 'dot' || marker === 'both') && <Dot />}
        </h2>
        <p className="font-mono text-xs lg:text-sm text-gray-600 dark:text-gray-300 mt-2">
          {w.dates}
          {present && <span className="text-blue-600 dark:text-blue-300 font-semibold">Present</span>}
        </p>
        <div className={`h-1 w-12 lg:w-20 mt-3 ${w.color}`}></div>
        <p className="mt-4 text-lg lg:text-2xl">{w.description}</p>
        <p className="font-mono text-sm lg:text-base text-gray-600 dark:text-gray-300 mt-4">{w.tech}</p>
      </div>
    </div>
  )
}

export function WorkPage({ marker, copy }: { marker: Marker; copy: Copy }) {
  return (
    <>
      <div className="k-grid">
        <div className="col-start-3 col-end-10 flex flex-col justify-center" style={{ height: '90vh' }}>
          <p className="text-6xl lg:text-7xl font-serif font-semibold leading-tight">
            <span className="hidden lg:inline">&#x1F44B;</span>
            <span>Hi, I'm Kippy!</span>
          </p>
          <p className="text-3xl lg:text-4xl mt-8 leading-normal lg:leading-relaxed">I co-founded and was Head of Product at <a className="text-link text-donut dark:text-donut-dark" href="#">Donut</a>. Before that I built mobile apps at <a className="text-link text-cover dark:text-cover-dark" href="#">Cover</a> and <a className="text-link text-kullect dark:text-kullect-dark" href="#">Kullect</a>.</p>
        </div>
      </div>
      <div id="work-history" className="space-y-32 pb-32 lg:space-y-64 lg:pb-64 pt-16 -mt-16">
        {work.map((w0, i) => { const w = i === 0 ? { ...w0, description: copy.dewey, tech: copy.deweyTech, img: 'Dewey graphic (see graphic study)' } : w0; return <WorkStub key={w.title} w={w} flip={i % 2 === 0} marker={marker} /> })}
      </div>
    </>
  )
}

/* ---------- PROJECTS ---------- */

type Project = { title: string; description: string; tech: string; img?: string; comingSoon?: boolean; github?: string; npm?: string; website?: string; more?: string }

export const projects: Project[] = [
  { title: 'Orkestra', description: 'An agentic orchestration tool for managing complex, multi-step AI workflows.', tech: 'Rust, Typescript, React', comingSoon: true, github: '#orkestra-ts', website: 'https://orkestra.codes' },
  { title: 'Tiniest Fox', description: 'Placeholder: a small family of little tools and experiments.', tech: 'Placeholder', img: 'Tiniest Fox (placeholder)', more: 'See the 3 projects' },
  { title: 'Jotly', description: 'A lightweight, ad-free, structured, visual bookmarking tool.', tech: 'Typescript, Adonis', img: 'Jotly marketing image', website: '#' },
  { title: 'vivere', description: 'A light-weight javascript framework for progressively enhancing HTML with reactive components.', tech: 'Typescript', github: '#', website: '#', npm: '#' },
  { title: 'vivere docs', description: 'Static documentation site for vivere, with fun interactive examples!', tech: '11ty, Vivere, TailwindCSS', img: 'viverejs.com screenshot', github: '#', website: '#' },
]

function ProjectStub({ p, idx, onMore }: { p: Project; idx: number; onMore: () => void }) {
  const wrapperClass = idx % 2 !== 0 ? 'col-start-7' : ''
  return (
    <div className={`col-span-5 ${wrapperClass}`}>
      <div className="h-64">
        {p.img ? (
          <div className="h-full w-full border-2 rounded-t-lg bg-white dark:bg-gray-900 flex items-center justify-center p-4 overflow-hidden text-gray-400 font-serif text-2xl">{p.img}</div>
        ) : p.comingSoon ? (
          <div className="h-full border-2 p-8 rounded-t-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
            <p className="font-serif text-4xl text-gray-400 dark:text-gray-500">Coming Soon...</p>
          </div>
        ) : (
          <div className="h-full border-2 p-8 rounded-t-lg bg-gray-50 dark:bg-gray-800" />
        )}
      </div>
      <p className="font-semibold font-serif text-3xl lg:text-4xl mt-8">{p.title}</p>
      <p className="text-lg lg:text-2xl mt-4">{p.description}</p>
      <p className="font-mono text-sm text-gray-600 dark:text-gray-300 mt-4">{p.tech}</p>
      <div className="flex items-center mt-4 space-x-4">
        {p.github && <a className="icon-link-blue py-1" href={p.github} aria-label="Link to GitHub"><GitHub size={24} /></a>}
        {p.npm && <a className="icon-link-blue" href={p.npm} aria-label="Link to npm"><Npm size={32} /></a>}
        {p.website && <a className="icon-link-blue py-1" href={p.website} aria-label="Link to Website"><Web size={24} /></a>}
        {p.more && <a className="text-link-blue text-lg cursor-pointer" onClick={onMore}>{p.more} &rarr;</a>}
      </div>
    </div>
  )
}

function Hero({ title, blurb }: { title: string; blurb: string }) {
  return (
    <div className="k-grid">
      <div className="col-start-3 col-end-10 flex flex-col justify-center items-start" style={{ height: '90vh' }}>
        <h1 className="text-6xl lg:text-7xl font-serif font-semibold border-b-2 border-blue-500 dark:border-blue-300">{title}</h1>
        <h2 className="text-3xl lg:text-4xl mt-8 leading-normal lg:leading-relaxed mt-6">{blurb}</h2>
      </div>
    </div>
  )
}

export function ProjectsPage({ onMore, copy }: { onMore: () => void; copy: Copy }) {
  return (
    <>
      <Hero title="Personal Projects" blurb="A curated collection of personal projects, from the barely conceived to the immediately adoptable." />
      <div id="projects" className="k-grid space-y-24 lg:space-y-0 lg:gap-y-32 pb-24 lg:pb-32 pt-16 -mt-16">
        {projects.map((p0, i) => { const p = p0.title === 'Tiniest Fox' ? { ...p0, description: copy.fox, tech: copy.foxTech, more: copy.more } : p0; return <ProjectStub key={p.title} p={p} idx={i} onMore={onMore} /> })}
      </div>
    </>
  )
}

/* ---------- TINIEST FOX (sub-projects) ---------- */

export function TinyFoxPage({ onBack, copy }: { onBack: () => void; copy: Copy }) {
  return (
    <>
      <div className="k-grid">
        <div className="col-start-3 col-end-10 pt-48 pb-16">
          <div><a className="text-link-blue cursor-pointer" onClick={onBack}>&larr; Projects</a></div>
          <h1 className="mt-8 inline-block text-6xl lg:text-7xl font-serif font-semibold border-b-2 border-blue-500 dark:border-blue-300">Tiniest Fox</h1>
          <h2 className="text-3xl lg:text-4xl mt-8 leading-normal lg:leading-relaxed">{copy.intro}</h2>
        </div>
      </div>
      <div className="k-grid pb-24 lg:pb-32">
        <ul className="col-start-3 col-end-10 space-y-16">
          {[{ t: 'atelier', d: copy.atelier }, { t: 'stillroom', d: copy.stillroom }, { t: 'More coming soon', d: copy.soon, soon: true }].map((s) => (
            <li key={s.t} className={s.soon ? 'opacity-60' : ''}>
              <p className="font-semibold font-serif text-3xl lg:text-4xl">{s.t}</p>
              <p className="text-lg lg:text-2xl mt-4">{s.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
