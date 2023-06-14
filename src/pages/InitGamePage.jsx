import { Square } from '../components/Square'
import { IconCircle } from '../icons/Circle'
import { IconCross } from '../icons/Cross'
import { Layout } from '../layout/Layout'
import Section from '../layout/Section'

import { playersBox, playersHeader, playersAside, playerIcon, playerSimbol } from './InitGamePage.css.ts'

export default function InitGamePage() {
  return (
    <>
      <Layout>
        <Section otherClassSection={`${playersBox}`}>
          <Square addClass={`${playerSimbol}`}>
            <header className={playersHeader}>
              <span>Pick player 1's Mark</span>
            </header>

            <aside className={playersAside}>
              <div className={playerIcon}><IconCross /></div>
              <div className={playerIcon}><IconCircle /></div>
            </aside>

            <footer>
              <span>Remember: x Goes first</span>
            </footer>
          </Square>
        </Section>
      </Layout>
    </>
  )
}
