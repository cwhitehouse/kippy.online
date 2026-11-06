import { defineControls, defineMeta, type Props } from 'atelier'
import { DeweyPage, Pebble } from './shared'

export const meta = defineMeta({
  name: 'Echo',
  claim: 'One pebble repeated and fading until it resolves into a single solid one',
  why: 'It draws the tagline: the same question asked again and again is faint and forgettable, the answer is the one that stays. Vertical, so it holds in the tall desktop slot. Gives up the simplest possible read.',
})
export const controls = defineControls({
  dark: { type: 'toggle', default: false, label: 'Dark mode' },
  crop: { type: 'enum', options: { 'in slot': 'slot', 'full art': 'full' }, default: 'in slot', label: 'Crop', hint: 'In slot is how it ships: cover-cropped, so a narrow desktop column loses the sides. Full art shows the whole 1200x800.' },
})

export default function Design({ dark, crop }: Props<typeof controls>) {
  const rows = [150, 255, 360, 470]
  return (
    <DeweyPage dark={dark} crop={crop} art={(p) => (
      <g>
        {rows.map((y, i) => (
          <ellipse key={y} cx={600} cy={y} rx={150 - i * 6} ry={48} fill="none" stroke={p.clay} strokeWidth={5} strokeDasharray={i === 0 ? '4 14' : i === 1 ? '10 12' : '0'} opacity={0.2 + i * 0.2} />
        ))}
        <ellipse cx="600" cy="690" rx="190" ry="20" fill={p.shadow} opacity={0.55} />
        <Pebble cx={600} cy={610} rx={170} ry={92} rot={-2} fill={p.honey} hi="#fff" />
        <path d="M540 610 q60 -34 120 0" stroke={p.espresso} strokeWidth={7} fill="none" strokeLinecap="round" opacity={0.5} />
      </g>
    )} />
  )
}
