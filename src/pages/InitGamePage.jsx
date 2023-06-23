import { Button } from '../components/Button'
import { Square } from '../components/Square'
import { IconCircle } from '../icons/Circle'
import { IconCross } from '../icons/Cross'
import { Layout } from '../layout/Layout'
import Section from '../layout/Section'
import { WrapBox } from '../layout/WrapBox'

import { playersBox, playersHeader, playersAside, playerIcon, playerSimbol, playerIconSvg, playerIconSecond, playerFooter } from './InitGamePage.css.ts'

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
              <div className={playerIcon}><IconCross classAdd={playerIconSvg} /></div>
              <div className={`${playerIcon} ${playerIconSecond}`}><IconCircle classAdd={playerIconSvg} /></div>
            </aside>

            <footer className={playerFooter}>
              <span>Remember: x Goes first</span>
            </footer>
          </Square>

          <WrapBox>
            <Button>New game (vs CPU)</Button>
          </WrapBox>

          <WrapBox>
            <Button>New game (vs PLAYER)</Button>
          </WrapBox>
        </Section>
      </Layout>
    </>
  )
}
