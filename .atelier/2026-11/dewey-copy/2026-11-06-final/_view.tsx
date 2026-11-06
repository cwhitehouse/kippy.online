import { useState } from 'react'
import { Site, WorkPage, ProjectsPage, TinyFoxPage, type Copy } from './_site'
export function View({ copy, page, dark }: { copy: Copy; page: string; dark: boolean }) {
  const [local, setLocal] = useState<string | null>(null)
  const show = local ?? page
  return (
    <Site dark={dark}>
      {show === 'projects' ? <ProjectsPage copy={copy} onMore={() => setLocal('tiny-fox')} />
        : show === 'tiny-fox' ? <TinyFoxPage copy={copy} onBack={() => setLocal('projects')} />
        : <WorkPage marker="both" copy={copy} />}
    </Site>
  )
}
