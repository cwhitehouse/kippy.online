import { useState } from 'react'
import { defineControls, defineMeta, type Props } from 'atelier'
import { Site, WorkPage, ProjectsPage, TinyFoxPage } from './_site'

export const meta = defineMeta({
  name: 'Dot + Present',
  claim: 'Current is a glow and a date: a dot beside the title, and the range ends in Present',
  why: 'The dot is the quick signal in a skim; Present says what it means for anyone who reads the dates. Costs two marks on one entry, though both are quiet.',
})

export const controls = defineControls({
  page: { type: 'enum', options: { work: 'work', projects: 'projects', tinyFox: 'tiny-fox' }, default: 'work', state: true, label: 'Page', hint: 'Work (home), Projects, or the Tiniest Fox page. The Projects page and its Tiniest Fox link are the same in all three designs; only the Dewey marker differs.' },
  dark: { type: 'toggle', default: false, label: 'Dark mode' },
})

export default function Design({ page, dark }: Props<typeof controls>) {
  const [local, setLocal] = useState<string | null>(null)
  const show = local ?? page
  return (
    <Site dark={dark}>
      {show === 'projects' ? <ProjectsPage onMore={() => setLocal('tiny-fox')} />
        : show === 'tiny-fox' ? <TinyFoxPage onBack={() => setLocal('projects')} />
        : <WorkPage marker="both" />}
    </Site>
  )
}
