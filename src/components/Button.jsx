import { btn, btnText, btnPrimary, btnSecondary } from './Button.css'

const TYPES_BTN = {
  primary: btnPrimary,
  secondary: btnSecondary
}

export const Button = ({ children, theme = 'primary' }) => {
  const btnClassnamer = `${btn} ${TYPES_BTN[theme]}`

  return (
    <div className={btnClassnamer}>
      <span className={btnText}>{children}</span>
    </div>
  )
}
