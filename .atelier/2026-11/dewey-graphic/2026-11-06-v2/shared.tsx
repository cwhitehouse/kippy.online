// Fixtures for the graphic round: the Dewey entry in the real WorkStub markup, with the art in the
// image slot, followed by Donut's entry so it reads beside an existing one. Copy is fixed (Plain Ledger).
import type { ReactNode } from 'react'
import { Site } from './_site'

export type Pal = { ground: string; ground2: string; honey: string; honey2: string; clay: string; clay2: string; sand: string; espresso: string; ink: string; shadow: string }
export const palette = (dark: boolean): Pal =>
  dark
    ? { ground: '#2a1a10', ground2: '#3a2517', honey: '#f0b24a', honey2: '#d99a35', clay: '#d0775a', clay2: '#b5604a', sand: '#7a5a3e', espresso: '#1a0f08', ink: '#f6ebd9', shadow: '#120a05' }
    : { ground: '#f6ebd9', ground2: '#efdcbf', honey: '#e8a33d', honey2: '#d38b22', clay: '#c0643a', clay2: '#a84f2c', sand: '#d9bf98', espresso: '#3b2416', ink: '#3b2416', shadow: '#c9ad82' }

// 1200x800 art. Desktop slot is ~520x800 (portrait) and cover-crops the sides, so the subject stays in x 330..870.
export function Slot({ dark, crop, children }: { dark: boolean; crop: 'slot' | 'full'; children: (p: Pal) => ReactNode }) {
  const p = palette(dark)
  const cls = crop === 'slot' ? 'w-full row-start-1 h-72 lg:h-screen max-h-800' : 'w-full row-start-1 aspect-[3/2]'
  return (
    <svg data-atelier="art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className={`col-start-1 col-end-6 ${cls}`} role="img" aria-label="Dewey graphic">
      <rect width="1200" height="800" fill={p.ground} />
      {children(p)}
    </svg>
  )
}

export function Pebble({ cx, cy, rx, ry, rot = 0, fill, hi }: { cx: number; cy: number; rx: number; ry: number; rot?: number; fill: string; hi?: string }) {
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} />
      {hi && <ellipse cx={cx - rx * 0.25} cy={cy - ry * 0.3} rx={rx * 0.45} ry={ry * 0.25} fill={hi} opacity={0.35} />}
    </g>
  )
}

const dewey = {
  title: 'Dewey',
  description: 'As a product engineer at Dewey, I work on a small team that ships a lot, building AI tools so nobody has to answer the same question twice. We use the latest and greatest in AI to help us get our work out quickly.',
  tech: 'AI, Product, Engineering',
}

export function DeweyPage({ dark, crop, art }: { dark: boolean; crop: 'slot' | 'full'; art: (p: Pal) => ReactNode }) {
  return (
    <Site dark={dark}>
      <div className="space-y-32 pb-32 lg:space-y-64 lg:pb-64 pt-48">
        <div className="lg:grid grid-cols-12 col-span-12 items-center">
          <Slot dark={dark} crop={crop}>{art}</Slot>
          <div className="col-start-7 col-end-12 row-start-1 mt-8 lg:mt-0">
            <h2 className="font-semibold font-serif text-3xl lg:text-4xl">
              {dewey.title}
              <span className="ml-3 inline-block align-middle w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-300 ring-4 ring-blue-500/20 dark:ring-blue-300/20"><span className="sr-only">Current</span></span>
            </h2>
            <p className="font-mono text-xs lg:text-sm text-gray-600 dark:text-gray-300 mt-2">2025&mdash;<span className="text-blue-600 dark:text-blue-300 font-semibold">Present</span></p>
            <div className="h-1 w-12 lg:w-20 mt-3 bg-blue-500 dark:bg-blue-300"></div>
            <p className="mt-4 text-lg lg:text-2xl">{dewey.description}</p>
            <p className="font-mono text-sm lg:text-base text-gray-600 dark:text-gray-300 mt-4">{dewey.tech}</p>
          </div>
        </div>
        <div className="lg:grid grid-cols-12 col-span-12 items-center">
          <div className="col-start-7 col-end-12 w-full row-start-1 h-72 lg:h-screen max-h-800 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 font-serif text-2xl">Donut photo</div>
          <div className="col-start-1 col-end-6 row-start-1 mt-8 lg:mt-0">
            <h2 className="font-semibold font-serif text-3xl lg:text-4xl">Donut</h2>
            <p className="font-mono text-xs lg:text-sm text-gray-600 dark:text-gray-300 mt-2">2016&mdash;2020</p>
            <div className="h-1 w-12 lg:w-20 mt-3 bg-donut dark:bg-donut-dark"></div>
            <p className="mt-4 text-lg lg:text-2xl">As one of the co-founders of Donut, I was intimately involved in almost every aspect of bringing it to life, from engineering to, product to marketing.</p>
            <p className="font-mono text-sm lg:text-base text-gray-600 dark:text-gray-300 mt-4">Rails, Vue, Design, Product</p>
          </div>
        </div>
      </div>
    </Site>
  )
}
