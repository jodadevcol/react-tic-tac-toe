import { style } from "@vanilla-extract/css";
import { rootVars } from "../App.css";

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '8px',
  width: '100%',
  maxHeight: '40px',
  marginBlockEnd: '32px'
})

const logoIcons = style({
  width: '32px',
  height: '32px'
})

export const logoCross = style([
  logoIcons,
  {
    color: rootVars.color.blue
  }
])

export const logoCircle = style([
  logoIcons,
  {
    color: rootVars.color.yellow
  }
])

export const logoIcon = style({
  width: 'auto',
})
