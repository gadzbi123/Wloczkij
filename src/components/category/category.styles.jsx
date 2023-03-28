import styled from "styled-components";
import { animateInsertionUpToDown } from "../../styles/animation.styles";
import { BaseComponentStyle, Colors } from "../../styles/variables.styles";

export const CategoryContainer = styled.div`
  h2 {
    font-size: 68px;
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
    color: ${Colors.white};
    -webkit-text-stroke: 2px #000;
    ${animateInsertionUpToDown}
  }
  .products {
    display: grid;
    ${BaseComponentStyle}
    grid-template-columns: repeat(4, 1fr);
    column-gap: 40px;
    row-gap: 30px;
  }
`;
