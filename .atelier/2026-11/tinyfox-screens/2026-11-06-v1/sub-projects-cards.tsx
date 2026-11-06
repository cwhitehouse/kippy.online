import { defineControls, defineMeta, type Props } from 'atelier'
import { Site } from './_site'
import atelierGallery from './atelier-gallery.png'
import atelierPin from './atelier-pin.png'
import stillroomBoard from './stillroom-board.png'
import stillroomResults from './stillroom-results.png'

export const meta = defineMeta({
  name: 'Sub-project Cards',
  claim: 'Each tool gets a project-card image tile above it, like the Projects page; no links',
  why: 'Reuses the Projects page card (bordered, rounded-top, 256px tile) so the sub-projects page reads as part of the site. Screenshots are real UI from the tiniestfox repo. Costs: they are cover-cropped to a short tile, so detail is small, and no link means nothing to click.',
})

export const controls = defineControls({
  dark: { type: 'toggle', default: false, label: 'Dark mode' },
  layout: { type: 'enum', options: { 'two-up cards': 'grid', 'one column': 'column' }, default: 'two-up cards', label: 'Layout', hint: 'Two-up matches the Projects page grid; one column matches the current sub-projects page.' },
  atelierShot: { type: 'enum', options: { 'gallery + tweak panel': 'gallery', 'pin notes on a design': 'pin' }, default: 'gallery + tweak panel', label: 'atelier image' },
  stillroomShot: { type: 'enum', options: { 'experiment board': 'board', 'results page': 'results' }, default: 'experiment board', label: 'stillroom image' },
})

const baseItems = [
  { t: 'atelier', d: 'A design harness where an agent draws screen options and you tweak and choose between them live.', tech: 'TypeScript, Node, React', alt: 'The atelier gallery with a control panel open on the right' },
  { t: 'stillroom', d: "A home for an agent's data experiments, keeping aims, attempts and results on one read-only page.", tech: 'TypeScript, Node', alt: 'A stillroom board listing the stages of a data experiment' },
  { t: 'More tools coming soon', d: 'More tools coming soon.', tech: '', soon: true, alt: '' },
]

export default function Design({ dark, layout, atelierShot, stillroomShot }: Props<typeof controls>) {
  const items = baseItems.map((x) => ({ ...x }))
  const shots = [atelierShot === 'pin' ? atelierPin : atelierGallery, stillroomShot === 'results' ? stillroomResults : stillroomBoard, '']
  items[0].alt = atelierShot === 'pin' ? 'atelier with pinned notes on a design' : items[0].alt
  items[1].alt = stillroomShot === 'results' ? 'A stillroom results page with an answer and final list' : items[1].alt
  const grid = layout === 'grid'
  return (
    <Site dark={dark}>
      <div className="k-grid">
        <div className="col-start-3 col-end-10 pt-48 pb-16">
          <div><a className="text-link-blue" href="#">&larr; Projects</a></div>
          <h1 className="mt-8 inline-block text-6xl lg:text-7xl font-serif font-semibold border-b-2 border-blue-500 dark:border-blue-300">Tiniest Fox</h1>
          <h2 className="text-3xl lg:text-4xl mt-8 leading-normal lg:leading-relaxed">A small collection of tools for working with AI agents, each built to do one thing well.</h2>
        </div>
      </div>
      <div className={grid ? 'k-grid space-y-24 lg:space-y-0 lg:gap-y-32 pb-24 lg:pb-32' : 'k-grid pb-24 lg:pb-32'}>
        {grid ? items.map((s, i) => (
          <div key={s.t} data-atelier="card" className={`col-span-5 ${i % 2 !== 0 ? 'col-start-7' : ''}`}>
            <Tile soon={s.soon} src={shots[i]} alt={s.alt} />
            <p className="font-semibold font-serif text-3xl lg:text-4xl mt-8">{s.t}</p>
            <p className="text-lg lg:text-2xl mt-4">{s.d}</p>
            {s.tech && <p className="font-mono text-sm text-gray-600 dark:text-gray-300 mt-4">{s.tech}</p>}
          </div>
        )) : (
          <ul className="col-start-3 col-end-10 space-y-16">
            {items.map((s, i) => (
              <li key={s.t} data-atelier="card">
                <Tile soon={s.soon} src={shots[i]} alt={s.alt} />
                <p className="font-semibold font-serif text-3xl lg:text-4xl mt-8">{s.t}</p>
                <p className="text-lg lg:text-2xl mt-4">{s.d}</p>
                {s.tech && <p className="font-mono text-sm text-gray-600 dark:text-gray-300 mt-4">{s.tech}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Site>
  )
}

// Same tile as the Projects page's ProjectStub: h-64, bordered, rounded top.
function Tile({ src, alt, soon }: { src: string; alt: string; soon?: boolean }) {
  return (
    <div className="h-64">
      {soon ? (
        <div className="h-full border-2 p-8 rounded-t-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
          <p className="font-serif text-4xl text-gray-400 dark:text-gray-500">Coming Soon...</p>
        </div>
      ) : (
        <div className="h-full w-full border-2 rounded-t-lg bg-white dark:bg-gray-900 overflow-hidden">
          <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
          <span className="sr-only">{alt}</span>
        </div>
      )}
    </div>
  )
}
