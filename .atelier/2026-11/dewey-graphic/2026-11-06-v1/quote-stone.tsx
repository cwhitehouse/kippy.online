import { defineControls, defineMeta, type Props } from 'atelier'
import { DeweyPage, Pebble } from './shared'

export const meta = defineMeta({
  name: 'Quote Stone',
  claim: 'The tagline set in the site serif on one large pebble',
  why: 'Most literal and most legible: the visitor reads what Dewey stands for without reading the copy. Gives up the purely visual feel, and the text has to stay inside the narrow desktop crop.',
})
export const controls = defineControls({
  dark: { type: 'toggle', default: false, label: 'Dark mode' },
  crop: { type: 'enum', options: { 'in slot': 'slot', 'full art': 'full' }, default: 'in slot', label: 'Crop', hint: 'In slot is how it ships: cover-cropped, so a narrow desktop column loses the sides. Full art shows the whole 1200x800.' },
})

export default function Design({ dark, crop }: Props<typeof controls>) {
  return (
    <DeweyPage dark={dark} crop={crop} art={(p) => (
      <g>
        <ellipse cx="600" cy="640" rx="270" ry="24" fill={p.shadow} opacity={0.55} />
        <Pebble cx={600} cy={400} rx={265} ry={235} rot={-6} fill={p.honey} />
        <g fontFamily="'IBM Plex Serif', serif" fontWeight={600} fontSize={60} fill={p.espresso} textAnchor="middle">
          <text x="600" y="355">Never answer</text>
          <text x="600" y="425">the same</text>
          <text x="600" y="495">question twice.</text>
        </g>
      </g>
    )} />
  )
}
