import { wrapBox } from './Layout.css'

export function WrapBox({ children, otherClass = '' }) {
  const classWrapBox = `${wrapBox} ${otherClass}`

  return (
    <div className={classWrapBox}>
      {children}
    </div>
  )
}
