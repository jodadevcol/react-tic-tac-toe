import { btn, btnText, btnPrimary, btnSecondary } from './Button.css'

const TYPES_BTN = {
  primary: btnPrimary,
  secondary: btnSecondary
}

export const Button = ({ href, children, theme = 'primary' }) => {
  const btnClassnamer = `${btn} ${TYPES_BTN[theme]}`

  return (
    href
      ? <a className={btnClassnamer} href=''><span className={btnText}>{children}</span></a>
      : <div className={btnClassnamer}><span className={btnText}>{children}</span></div>
  )
}
