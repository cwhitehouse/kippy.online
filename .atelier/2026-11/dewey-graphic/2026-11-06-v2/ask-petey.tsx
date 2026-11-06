import { defineControls, defineMeta, type Props } from 'atelier'
import { DeweyPage } from './shared'

export const meta = defineMeta({
  name: 'Ask Petey',
  claim: 'A phone showing a Dewey chat: the product itself, answering from ParentData',
  why: 'Shows what Dewey does instead of describing it: a question, a cited answer, a source. Reads as a real product on a small team that ships. Gives up the abstract brand feel, and the chat UI is my invention: I have not seen the real Ask Petey screens.',
})

export const controls = defineControls({
  dark: { type: 'toggle', default: false, label: 'Dark mode' },
  crop: { type: 'enum', options: { 'in slot': 'slot', 'full art': 'full' }, default: 'in slot', label: 'Crop', hint: 'In slot is how it ships: cover-cropped. Full art shows the whole 1200x800.' },
})

export default function Design({ dark, crop }: Props<typeof controls>) {
  return (
    <DeweyPage dark={dark} crop={crop} art={(p) => {
      const screen = dark ? '#1d120a' : '#fffaf1'
      const bubbleIn = dark ? '#3a2517' : '#f1e3c9'
      const f = "'IBM Plex Sans', sans-serif"
      return (
        <g fontFamily={f}>
          <ellipse cx="600" cy="770" rx="200" ry="14" fill={p.shadow} opacity={0.5} />
          <rect x="400" y="40" width="400" height="730" rx="54" fill={p.espresso} />
          <rect x="412" y="52" width="376" height="706" rx="44" fill={screen} />
          <rect x="540" y="66" width="120" height="22" rx="11" fill={p.espresso} />
          {/* header */}
          <circle cx="452" cy="132" r="20" fill={p.honey} />
          <text x="452" y="139" textAnchor="middle" fontSize="20" fontWeight={600} fill={p.espresso}>P</text>
          <text x="484" y="128" fontSize="20" fontWeight={600} fill={p.ink}>Ask Petey</text>
          <text x="484" y="148" fontSize="13" fill={p.ink} opacity={0.6}>Answering from ParentData</text>
          <line x1="412" y1="172" x2="788" y2="172" stroke={p.sand} opacity={0.6} />
          {/* user 1 */}
          <rect x="520" y="196" width="244" height="46" rx="22" fill={p.honey} />
          <text x="642" y="224" textAnchor="middle" fontSize="15" fill={p.espresso}>Can you eat sushi while pregnant?</text>
          {/* answer 1 collapsed with source */}
          <rect x="436" y="262" width="272" height="64" rx="22" fill={bubbleIn} />
          <rect x="458" y="282" width="190" height="9" rx="4.5" fill={p.ink} opacity={0.22} />
          <rect x="458" y="300" width="130" height="9" rx="4.5" fill={p.ink} opacity={0.22} />
          <rect x="436" y="334" width="62" height="24" rx="12" fill="none" stroke={p.clay} strokeWidth={1.5} />
          <text x="467" y="350" textAnchor="middle" fontSize="12" fill={p.clay} fontWeight={600}>Source</text>
          {/* user 2 */}
          <rect x="478" y="388" width="286" height="66" rx="22" fill={p.honey} />
          <text x="621" y="416" textAnchor="middle" fontSize="15" fill={p.espresso}>What are the safest first foods</text>
          <text x="621" y="436" textAnchor="middle" fontSize="15" fill={p.espresso}>for a 6-month-old?</text>
          {/* answer 2 */}
          <rect x="436" y="476" width="316" height="146" rx="22" fill={bubbleIn} />
          <text x="458" y="504" fontSize="12" fontWeight={600} fill={p.clay} letterSpacing="0.6">CITED ANSWER</text>
          {['Starting solids at 6 months is', 'recommended. Begin with single-', 'ingredient purees like sweet potato', 'or avocado.'].map((t, i) => (
            <text key={i} x="458" y={530 + i * 21} fontSize="15" fill={p.ink}>{t}</text>
          ))}
          <rect x="436" y="634" width="152" height="24" rx="12" fill="none" stroke={p.clay} strokeWidth={1.5} />
          <text x="512" y="650" textAnchor="middle" fontSize="12" fill={p.clay} fontWeight={600}>Crib Sheet · Chapter 3</text>
          {/* input */}
          <rect x="432" y="690" width="336" height="44" rx="22" fill={bubbleIn} />
          <text x="456" y="718" fontSize="14" fill={p.ink} opacity={0.5}>Ask a question…</text>
          <circle cx="744" cy="712" r="14" fill={p.honey} />
        </g>
      )
    }} />
  )
}
