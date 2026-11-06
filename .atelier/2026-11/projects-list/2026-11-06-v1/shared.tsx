import type { ReactNode } from 'react'

export type Marker = 'badge' | 'dot' | 'bar'

type P = {
  title: string; description: string; tech: string; image?: string; soon?: boolean
  current?: boolean; sub?: boolean; href?: string
}

export const projects: P[] = [
  { title: 'Orkestra', description: 'An agentic orchestration tool for managing complex, multi-step AI workflows.', tech: 'Rust, Typescript, React', image: 'Orkestra', soon: true, href: 'orkestra-ts' },
  { title: 'Dewey', description: 'Placeholder one-line description for Dewey.', tech: 'Typescript', image: 'Dewey', current: true },
  { title: 'Tiniest Fox', description: 'A small collection of little things. Placeholder blurb.', tech: 'Various', image: 'Tiniest Fox', sub: true },
  { title: 'Jotly', description: 'A lightweight, ad-free, structured, visual bookmarking tool.', tech: 'Typescript, Adonis', image: 'Jotly screenshot' },
  { title: 'vivere', description: 'A light-weight javascript framework for progressively enhancing HTML with reactive components.', tech: 'Typescript' },
  { title: 'vivere docs', description: 'Static documentation site for vivere, with fun interactive examples!', tech: '11ty, Vivere, TailwindCSS', image: 'viverejs.com' },
]

const subs = [
  { t: 'Sub-project A', d: 'Placeholder description.' },
  { t: 'Sub-project B', d: 'Placeholder description.' },
  { t: 'Sub-project C', d: 'Placeholder description.' },
]

const IND = '#6366f1'

function Badge({ dark }: { dark: boolean }) {
  return (
    <span className="ml-3 align-middle font-mono text-xs uppercase tracking-wider rounded-full px-2.5 py-0.5 border"
      style={{ color: dark ? '#a5b4fc' : '#4f46e5', borderColor: dark ? '#a5b4fc' : '#6366f1', background: dark ? '#312e8133' : '#eef2ff' }}>
      Current
    </span>
  )
}
function Dot({ dark }: { dark: boolean }) {
  return (
    <span className="ml-3 inline-flex items-center gap-2 align-middle" title="Currently working on this">
      <span className="inline-block rounded-full" style={{ width: 12, height: 12, background: dark ? '#a5b4fc' : IND, boxShadow: `0 0 0 4px ${dark ? '#a5b4fc33' : '#6366f133'}` }} />
      <span className="sr-only">Current</span>
    </span>
  )
}

export function Card({ p, marker, dark, narrow, onSub }: { p: P; marker: Marker; dark: boolean; narrow: boolean; onSub: () => void }) {
  const ink = dark ? '#f1f5f9' : '#0f172a'
  const sub = dark ? '#cbd5e1' : '#475569'
  const bar = marker === 'bar' && p.current
  return (
    <div style={{ borderLeft: bar ? `4px solid ${dark ? '#a5b4fc' : IND}` : '4px solid transparent', paddingLeft: bar ? 16 : 16, marginLeft: -20 }}>
      <div className="flex items-center justify-center overflow-hidden"
        style={{ height: narrow ? 160 : 256, border: `2px solid ${dark ? '#334155' : '#e2e8f0'}`, borderRadius: '8px 8px 0 0', background: p.image && !p.soon ? (dark ? '#0f172a' : '#fff') : (dark ? '#1e293b' : '#f8fafc'), color: dark ? '#64748b' : '#94a3b8' }}>
        <span className="font-serif" style={{ fontSize: 28 }}>{p.soon ? 'Coming Soon...' : p.image ?? ''}</span>
      </div>
      <p className="font-serif font-semibold mt-8" style={{ fontSize: narrow ? 28 : 36, color: ink }}>
        {p.title}
        {p.current && marker === 'badge' && <Badge dark={dark} />}
        {p.current && marker === 'dot' && <Dot dark={dark} />}
        {bar && <span className="ml-3 align-middle font-mono text-xs uppercase tracking-wider" style={{ color: dark ? '#a5b4fc' : '#4f46e5' }}>Now</span>}
      </p>
      <p className="mt-4" style={{ fontSize: narrow ? 18 : 24, color: ink }}>{p.description}</p>
      <p className="font-mono text-sm mt-4" style={{ color: sub }}>{p.tech}</p>
      <div className="mt-4 flex items-center gap-4 text-sm font-mono" style={{ color: dark ? '#a5b4fc' : '#4f46e5' }}>
        {p.sub ? <a onClick={onSub} style={{ cursor: 'pointer', textDecoration: 'underline' }}>View 3 projects →</a>
          : p.href ? <><span>⌥ GitHub</span><span>◍ orkestra-ts</span></> : <><span>⌥ GitHub</span><span>◍ Web</span></>}
      </div>
    </div>
  )
}

export function SubPage({ dark, onBack }: { dark: boolean; onBack: () => void }) {
  const ink = dark ? '#f1f5f9' : '#0f172a'
  return (
    <div style={{ color: ink }}>
      <a onClick={onBack} className="font-mono text-sm" style={{ cursor: 'pointer', color: dark ? '#a5b4fc' : '#4f46e5' }}>← Personal Projects</a>
      <h1 className="font-serif font-semibold mt-4 inline-block" style={{ fontSize: 48, borderBottom: `2px solid ${dark ? '#a5b4fc' : IND}` }}>Tiniest Fox</h1>
      <p className="mt-6" style={{ fontSize: 22 }}>Placeholder intro line for the Tiniest Fox collection.</p>
      <ul className="mt-8 space-y-6">
        {subs.map((s) => (
          <li key={s.t}>
            <p className="font-serif font-semibold" style={{ fontSize: 28 }}>{s.t}</p>
            <p className="mt-1" style={{ fontSize: 18, color: dark ? '#cbd5e1' : '#475569' }}>{s.d}</p>
            <p className="mt-2 font-mono text-sm" style={{ color: dark ? '#a5b4fc' : '#4f46e5' }}>⌥ GitHub &nbsp; ◍ Web</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Frame({ dark, children }: { dark: boolean; children: ReactNode }) {
  return <div className="min-h-screen w-full p-8" style={{ background: dark ? '#0f172a' : '#fff' }}>{children}</div>
}
