import { defineControls, defineMeta, type Props } from 'atelier'
import { DeweyPage, Pebble } from './shared'

export const meta = defineMeta({
  name: 'Pebble Cairn',
  claim: 'Soft stacked pebbles in the Dewey palette, no text: calm and brand-first',
  why: 'A cairn is a marker someone left so the next person does not have to work it out again. No words means it sits quietly beside the copy and survives any crop. Gives up any direct reference to what Dewey does.',
})
export const controls = defineControls({
  dark: { type: 'toggle', default: false, label: 'Dark mode' },
  crop: { type: 'enum', options: { 'in slot': 'slot', 'full art': 'full' }, default: 'in slot', label: 'Crop', hint: 'In slot is how it ships: cover-cropped, so a narrow desktop column loses the sides. Full art shows the whole 1200x800.' },
})

export default function Design({ dark, crop }: Props<typeof controls>) {
  return (
    <DeweyPage dark={dark} crop={crop} art={(p) => (
      <g>
        <ellipse cx="600" cy="690" rx="260" ry="26" fill={p.shadow} opacity={0.55} />
        <Pebble cx={600} cy={620} rx={230} ry={78} rot={-2} fill={p.espresso === '#3b2416' ? p.clay : p.clay} hi="#fff" />
        <Pebble cx={620} cy={500} rx={180} ry={64} rot={3} fill={p.honey} hi="#fff" />
        <Pebble cx={585} cy={398} rx={135} ry={52} rot={-4} fill={p.sand} hi="#fff" />
        <Pebble cx={604} cy={318} rx={92} ry={40} rot={2} fill={p.clay2} hi="#fff" />
        <Pebble cx={598} cy={256} rx={52} ry={28} rot={-3} fill={p.honey2} hi="#fff" />
      </g>
    )} />
  )
}
