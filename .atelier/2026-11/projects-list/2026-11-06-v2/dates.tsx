import { useState } from 'react'
import { defineControls, defineMeta, type Props } from 'atelier'
import { Site, WorkPage, ProjectsPage, TinyFoxPage } from './_site'

export const meta = defineMeta({
  name: 'Present',
  claim: 'Current is a date: the range ends in Present, in the accent colour',
  why: 'No new element at all; it is how a resume says it and it sits where the eye already looks for time. Quietest and easiest to miss in a skim.',
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
        : <WorkPage marker="dates" />}
    </Site>
  )
}
