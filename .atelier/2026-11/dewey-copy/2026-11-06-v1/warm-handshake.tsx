import { defineControls, defineMeta, type Props } from 'atelier'
import { View } from './_view'
import type { Copy } from './_site'

export const meta = defineMeta({
  name: 'Warm Handshake',
  claim: 'The site\'s first-person work voice, led by my role and the pace of a small team',
  why: 'Pushes the \'As one of the co-founders...\' / \'My first real job...\' register hardest, so Dewey says what I do. Tool blurbs get a light first-person touch (\'I use\'), which is my guess to correct.',
})

export const controls = defineControls({
  page: { type: 'enum', options: { work: 'work', projects: 'projects', tinyFox: 'tiny-fox' }, default: 'work', state: true, label: 'Page', hint: 'Home (Dewey entry), Projects (Tiniest Fox entry), or the sub-projects page.' },
  dark: { type: 'toggle', default: false, label: 'Dark mode' },
})

const copy: Copy = {
  dewey: 'As a product-minded engineer at Dewey, I work at the forefront of AI on a small team that ships a lot, taking things from idea to release.',
  deweyTech: 'AI, Product, Engineering',
  fox: 'A workshop of small tools I use when working with AI agents, with more added as they are ready.',
  foxTech: 'TypeScript, Node, React',
  more: 'See the 2 tools',
  intro: 'A workshop of small tools I use when working with AI agents, shared as they become ready.',
  atelier: 'A design harness I use to see agent-drawn screen options side by side and tweak them live.',
  stillroom: 'A place I keep an agent\'s data experiments, so what was tried and what is current is easy to find.',
  soon: 'More coming soon, as they are ready.',
}

export default function Design({ page, dark }: Props<typeof controls>) {
  return <View copy={copy} page={page} dark={dark} />
}
