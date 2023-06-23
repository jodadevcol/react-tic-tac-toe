import { globalStyle, style } from "@vanilla-extract/css";

export const section = globalStyle('.jd-container',{
  width: '100%',
  maxWidth: '90%',
  marginInline: 'auto',
  '@media': {
    'screen and (min-width: 640px)': {
      maxWidth: '1480px',
      paddingInline: '1.8rem'
    },
    'screen and (min-width: 1040px)': {
      maxWidth: '1480px',
      paddingInline: '2rem'
    }
  }
})

export const wrapBox = style({
  marginBlock: '1.6rem'
})