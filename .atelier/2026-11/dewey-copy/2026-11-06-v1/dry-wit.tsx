import { defineControls, defineMeta, type Props } from 'atelier'
import { View } from './_view'
import type { Copy } from './_site'

export const meta = defineMeta({
  name: 'Dry Wit',
  claim: 'The site\'s dry sense of humour, led by Dewey\'s never-answer-twice idea',
  why: 'The site already jokes lightly (\'from the barely conceived to the immediately adoptable\', \'real\' in quotes, \'fun interactive examples!\'), so this stays plain and lets one joke per entry land. Riskier; gives up the safest read.',
})

export const controls = defineControls({
  page: { type: 'enum', options: { work: 'work', projects: 'projects', tinyFox: 'tiny-fox' }, default: 'work', state: true, label: 'Page', hint: 'Home (Dewey entry), Projects (Tiniest Fox entry), or the sub-projects page.' },
  dark: { type: 'toggle', default: false, label: 'Dark mode' },
})

const copy: Copy = {
  dewey: 'Dewey\'s whole idea is that nobody should answer the same question twice. I work on product and engineering for a small team that ships a lot, which is a lot of questions answered exactly once.',
  deweyTech: 'AI, Product, Engineering',
  fox: 'A growing collection of small tools for AI agents and the people who supervise them, each doing one thing well.',
  foxTech: 'TypeScript, Node, React',
  more: 'See the 2 so far',
  intro: 'A growing collection of small tools for AI agents and the people who supervise them.',
  atelier: 'A design harness where agents draw the options and you do the picking, with live knobs for fussing over details.',
  stillroom: 'A lab notebook for an agent\'s data experiments, so \'which run was the good one?\' has an answer.',
  soon: 'More tools coming soon, once they stop being experiments.',
}

export default function Design({ page, dark }: Props<typeof controls>) {
  return <View copy={copy} page={page} dark={dark} />
}
