import { defineControls, defineMeta, type Props } from 'atelier'
import { DeweyPage } from './shared'

export const meta = defineMeta({
  name: 'Ask Petey',
  claim: 'A phone showing a Dewey question and cited answer, drawn in the real askdewey.com design language',
  why: 'Shows what Dewey does instead of describing it. Colours, fonts (Young Serif, Figtree), radii and the question, answer and source structure come from askdewey.com itself. Still not the real Ask Petey chat: I have not seen it, so the phone, the layout and the "Ask Petey" label are mine.',
})

export const controls = defineControls({
  dark: { type: 'toggle', default: false, label: 'Dark mode' },
  crop: { type: 'enum', options: { 'in slot': 'slot', 'full art': 'full' }, default: 'in slot', label: 'Crop', hint: 'In slot is how it ships: cover-cropped. Full art shows the whole 1200x800.' },
})

const fonts = `@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Young+Serif&display=fallback');`

export default function Design({ dark, crop }: Props<typeof controls>) {
  // Tokens read from askdewey.com's stylesheet.
  const t = dark
    ? { screen: '#0f0d0b', card: '#242018', border: '#3a3328', text: '#fdfbf5', muted: '#a39a8c', input: '#1c1916', chipBg: '#6b5214', chipInk: '#f3e3bf' }
    : { screen: '#fdfbf5', card: '#ffffff', border: '#ece1cd', text: '#2b2520', muted: '#726a5e', input: '#f1e9db', chipBg: '#6b5214', chipInk: '#f3e3bf' }
  const gold = '#e3a23b'
  const body = "Figtree, system-ui, sans-serif"
  return (
    <DeweyPage dark={dark} crop={crop} art={(p) => (
      <g fontFamily={body}>
        <style>{fonts}</style>
        <ellipse cx="600" cy="772" rx="200" ry="13" fill={p.shadow} opacity={0.5} />
        <rect x="400" y="40" width="400" height="730" rx="54" fill="#2b2520" />
        <rect x="412" y="52" width="376" height="706" rx="44" fill={t.screen} />
        <rect x="540" y="66" width="120" height="22" rx="11" fill="#2b2520" />
        {/* nav */}
        <text x="440" y="132" fontFamily="'Young Serif', Georgia, serif" fontSize="28" fill={t.text}>Dewey</text>
        <circle cx="752" cy="124" r="20" fill={t.card} stroke={t.border} />
        <g stroke={t.text} strokeWidth="2" strokeLinecap="round"><line x1="744" y1="118" x2="760" y2="118" /><line x1="744" y1="124" x2="760" y2="124" /><line x1="744" y1="130" x2="760" y2="130" /></g>
        {/* card */}
        <rect x="430" y="168" width="340" height="540" rx="22" fill={t.card} stroke={t.border} />
        <text x="454" y="206" fontSize="12" fontWeight={600} letterSpacing="1" fill={t.muted}>ASK PETEY</text>
        <rect x="448" y="222" width="304" height="52" rx="26" fill={t.input} />
        <text x="470" y="254" fontSize="15" fontWeight={500} fill={t.muted}>What are the safest first foods f…</text>
        <circle cx="728" cy="248" r="18" fill={gold} />
        <polyline points="724,241 732,248 724,255" fill="none" stroke="#2b2520" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="454" y="318" fontSize="14" fill="#8a8276">Answering from <tspan fontWeight={700} fill={t.text}>ParentData</tspan></text>
        {['Starting solids at 6 months is', 'recommended. Begin with single-', 'ingredient purees like sweet potato', 'or avocado.'].map((l, i) => (
          <text key={i} x="454" y={360 + i * 26} fontSize="17" fontWeight={500} fill={t.text}>{l}</text>
        ))}
        <text x="454" y="500" fontSize="11" fontWeight={600} letterSpacing="1.2" fill={t.muted}>SOURCE</text>
        <rect x="452" y="514" width="176" height="30" rx="15" fill={t.chipBg} />
        <text x="540" y="534" textAnchor="middle" fontSize="13" fontWeight={600} fill={t.chipInk}>Crib Sheet · Chapter 3</text>
        <rect x="454" y="580" width="262" height="9" rx="4.5" fill={t.border} />
        <rect x="454" y="602" width="198" height="9" rx="4.5" fill={t.border} />
        <rect x="454" y="624" width="228" height="9" rx="4.5" fill={t.border} />
      </g>
    )} />
  )
}
