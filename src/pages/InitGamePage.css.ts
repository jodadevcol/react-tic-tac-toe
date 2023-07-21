import { style } from "@vanilla-extract/css";
import { rootVars } from "../App.css";

export const playersBox = style({
  display: "grid",
  gridTemplateColumns: '1fr',
  alignContent: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  maxHeight: '100vh',
})

export const playerSimbol = style({
  width: '100%',
  maxWidth: '330px',
  marginInline: 'auto'
}) 

export const playersHeader = style({
  marginBlockEnd: '2.4rem',
  textTransform: 'uppercase',
  fontSize: '1.6rem',
  fontWeight: '700',
  letterSpacing: '1px'
})

export const playersAside = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBlock: '1rem',
  paddingInline: '0.8rem',
  borderRadius: '10px',
  backgroundColor: rootVars.color.dark
})

export const playerIcon = style({
  flexGrow: 1,
  width: 'auto',
  height: 'auto',
  paddingBlock: '0.8rem',
  paddingInline: '0.8rem',
  color: rootVars.color.silver,
  border: '1px solid transparent',
  borderRadius: '10px',
  backgroundColor: 'transparent'
})

export const playerIconSecond = style({
  color: rootVars.color.dark,
  backgroundColor: rootVars.color.silver
})

export const playerIconSvg = style({
  width: 'auto',
  height: '32px'
})

export const playerFooter = style({
  marginBlockStart: '1.6rem',
  textTransform: 'uppercase',
  fontSize: '1.4rem',
  fontWeight: '500',
  letterSpacing: '0.8px',
  opacity: '0.5',
  pointerEvents: 'none'
})

export const playerButtons = style({
  display: "flex",
  flexDirection: "column",
  rowGap: '1.6rem',
  width: '100%',
  maxWidth: '330px',
  marginBlock: '3.2rem 0',
  marginInline: 'auto'
})

export const playerButtonsItem = style({
  marginBlock: 0,
})