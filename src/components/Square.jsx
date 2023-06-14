import { squareBox } from './Square.css.ts'

export const Square = ({ children, addClass }) => {
  const className = `${squareBox} ${addClass}`
  return (
    <article className={className}>
      {children}
    </article>
  )
}
