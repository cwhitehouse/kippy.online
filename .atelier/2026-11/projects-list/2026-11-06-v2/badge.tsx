import { useState } from 'react'
import { defineControls, defineMeta, type Props } from 'atelier'
import { Site, WorkPage, ProjectsPage, TinyFoxPage } from './_site'

export const meta = defineMeta({
  name: 'Badge',
  claim: 'Current is a word: a small outlined Current pill beside the title',
  why: 'Unmistakable and self-explaining, in the same mono small-caps voice as the dates. Adds a second element to the heading and is the loudest of the three.',
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
        : <WorkPage marker="badge" />}
    </Site>
  )
}
