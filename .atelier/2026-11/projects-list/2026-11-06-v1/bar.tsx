import { useState } from 'react'
import { defineControls, defineMeta, type Props } from 'atelier'
import { Card, SubPage, Frame, projects } from './shared'

export const meta = defineMeta({
  name: 'bar',
  claim: 'Current is a position: an accent rule down the card plus a mono Now tag',
  why: 'Marks the whole card, not just the heading, so it survives a skim at any width. Costs a break in the left edge alignment and is heavier than the other two.',
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
              {projects.map((p) => <Card key={p.title} p={p} marker="bar" dark={dark} narrow={narrow} onSub={() => setOver('tiny-fox')} />)}
            </div>
          </>
        )}
      </div>
    </Frame>
  )
}
