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
  maxWidth: '330px',
  marginInline: 'auto'
}) 

export const playersHeader = style({
  fontSize: '1.6rem'
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
  flexGrow: 1
})
