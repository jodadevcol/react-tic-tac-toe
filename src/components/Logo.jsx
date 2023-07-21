import { IconCross } from './icons/Cross'
import { IconCircle } from './icons/Circle'
import { logo, logoCircle, logoCross, logoIcon } from './Logo.css.ts'

export function Logo() {
  return (
    <div className={logo}>
      <div className={logoCross}>
        <IconCross classAdd={logoIcon} />
      </div>
      <div className={logoCircle}>
        <IconCircle classAdd={logoIcon} />
      </div>
    </div>
  )
}
