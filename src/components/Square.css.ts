import { style } from "@vanilla-extract/css";
import { rootVars } from "../App.css";

export const squareBox = style({
  paddingBlock: '2.4rem 3.2rem',
  paddingInline: '2.4rem',
  backgroundColor: rootVars.color.semiDark,
  border: "none",
  borderRadius: '15px',
  boxShadow: 'inset 0px -8px 0px #10212A',
  textAlign: "center"
})