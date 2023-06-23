import { btn, btnText, btnYellow } from './Button.css'

const TYPES_BTN = {
  yellow: btnYellow
}

export const Button = ({ children, typeBtn = 'yellow' }) => {
  const btnClassnamer = `${btn} ${TYPES_BTN[typeBtn]}`

  return (
    <button className={btnClassnamer}>
      <span className={btnText}>{children}</span>
    </button>
  )
}
