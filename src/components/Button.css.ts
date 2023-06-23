import { style } from "@vanilla-extract/css"
import { rootVars } from "../App.css"

export const btn = style({
  height: 'auto',
  paddingBlock: '1.4rem 2.2rem',
  paddingInline: '2rem',
  color: 'currentcolor',
  border: 'none',
  outline: 'none',
  borderRadius: '1.5rem',
  backgroundColor: 'currentcolor'
})

export const btnYellow = style({
  color: rootVars.color.yellow,
  boxShadow: '0px -8px 0px 0px #cc8b13 inset',

})

export const btnText = style({
  color: rootVars.color.dark
})