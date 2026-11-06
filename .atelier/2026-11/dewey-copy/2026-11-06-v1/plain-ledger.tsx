import { defineControls, defineMeta, type Props } from 'atelier'
import { View } from './_view'
import type { Copy } from './_site'

export const meta = defineMeta({
  name: 'Plain Ledger',
  claim: 'Closest mirror of the site: role-first sentence for Dewey, noun-phrase descriptions for the tools',
  why: 'Reads like the Donut and Cover entries and the Orkestra, Jotly and vivere blurbs, so it disappears into the page. Safest; gives up personality.',
})

export const controls = defineControls({
  page: { type: 'enum', options: { work: 'work', projects: 'projects', tinyFox: 'tiny-fox' }, default: 'work', state: true, label: 'Page', hint: 'Home (Dewey entry), Projects (Tiniest Fox entry), or the sub-projects page.' },
  dark: { type: 'toggle', default: false, label: 'Dark mode' },
})

const copy: Copy = {
  dewey: 'As a product engineer at Dewey, I work on a small team that ships a lot, building AI tools so nobody has to answer the same question twice. We use the latest and greatest in AI to help us get our work out quickly.',
  deweyTech: 'AI, Product, Engineering',
  fox: 'A small collection of tools for working with AI agents, from a design harness to a home for data experiments.',
  foxTech: 'TypeScript, Node, React',
  more: 'See the 2 projects',
  intro: 'A small collection of tools for working with AI agents, each built to do one thing well.',
  atelier: 'A design harness where an agent draws screen options and you tweak and choose between them live.',
  stillroom: 'A home for an agent\'s data experiments, keeping aims, attempts and results on one read-only page.',
  soon: 'More tools coming soon.',
}

export default function Design({ page, dark }: Props<typeof controls>) {
  return <View copy={copy} page={page} dark={dark} />
}
