import styled from "styled-components";
import { animateInsertionUpToDown } from "../../styles/animation.styles";
import { Colors, DisplaySizes } from "../../styles/variables.styles";

export const CategoryContainer = styled.div`
  h2 {
    font-size: 68px;
    text-align: center;
    margin: 30px 0;
    color: ${Colors.white};
    -webkit-text-stroke: 2px #000;
    ${animateInsertionUpToDown}
    @media ${DisplaySizes.smallPC} {
      font-size: 50px;
    }
    @media ${DisplaySizes.tablet} {
      font-size: 40px;
    }
    @media ${DisplaySizes.mobile} {
      font-size: 30px;
      -webkit-text-stroke: 1px #000;
      margin: 15px 0;
    }
  }
  .products {
    display: grid;
    margin: 0 auto;
    max-width: 80vw;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 40px;
    row-gap: 30px;
    @media ${DisplaySizes.smallPC} {
      grid-template-columns: repeat(3, 1fr);
    }
    @media ${DisplaySizes.tablet} {
      grid-template-columns: repeat(2, 1fr);
      max-width: 70vw;
    }
    @media ${DisplaySizes.smallMobile} {
      grid-template-columns: 1fr;
    }
  }
`;
