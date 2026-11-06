import { useState } from 'react'
import { defineControls, defineMeta, type Props } from 'atelier'
import { Card, SubPage, Frame, projects } from './shared'

export const meta = defineMeta({
  name: 'badge',
  claim: 'Current is a word: a small outlined pill beside the title',
  why: 'Unmistakable and self-explaining, matches the mono/uppercase small-text voice of the site. Costs a little width next to long titles and adds a second visual element to the heading.',
})

export const controls = defineControls({
  width: { type: 'enum', options: { wide: 'wide', phone: 'phone' }, default: 'wide', hint: 'Desk vs ~380px phone.' },
  dark: { type: 'toggle', default: false, label: 'Dark mode' },
  page: { type: 'enum', options: { list: 'list', tinyFox: 'tiny-fox' }, default: 'list', label: 'Showing', hint: 'Projects list, or the Tiniest Fox page it links to.' },
})

export default function Design({ width, dark, page }: Props<typeof controls>) {
  const [over, setOver] = useState<string | null>(null)
  const narrow = width === 'phone'
  const show = over ?? page
  return (
    <Frame dark={dark}>
      <div className="mx-auto" style={{ maxWidth: narrow ? 380 : 1100 }}>
        {show === 'tiny-fox' ? (
          <SubPage dark={dark} onBack={() => setOver('list')} />
        ) : (
          <>
            <h1 className="font-serif font-semibold inline-block" style={{ fontSize: narrow ? 36 : 56, color: dark ? '#f1f5f9' : '#0f172a', borderBottom: '2px solid ' + (dark ? '#a5b4fc' : '#6366f1') }}>Personal Projects</h1>
            <div className="mt-12 grid" style={{ gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', columnGap: 64, rowGap: narrow ? 56 : 96, paddingLeft: 20 }}>
              {projects.map((p) => <Card key={p.title} p={p} marker="badge" dark={dark} narrow={narrow} onSub={() => setOver('tiny-fox')} />)}
            </div>
          </>
        )}
      </div>
    </Frame>
  )
}
