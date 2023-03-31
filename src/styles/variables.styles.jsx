import { css } from "styled-components";
export const DisplaySizes = {
  smallPC: `(max-width: 1350px)`,
  tablet: `(max-width: 1000px)`,
  mobile: `(max-width: 670px)`,
  smallMobile: `(max-width: 450px)`,
};
export const Colors = {
  darkGray: "#111",
  midGray: "#444",
  lightGray: "#777",
  darkShadow: "#999",
  midShadow: "#aaa",
  lightShadow: "#ccc",
  darkRed: "#350101",
  red: "#ff3a3a",
  orange: "#ec6238",
  lightOrange: "#f0896a",
  white: "#e4e4e4",
  whiteOpaque: "#eeeeee8b",
};
export const BaseComponentStyle = css`
  margin: 0 auto;
  max-width: 80vw;
  @media ${DisplaySizes.tablet} {
    max-width: 90vw;
  }
`;
