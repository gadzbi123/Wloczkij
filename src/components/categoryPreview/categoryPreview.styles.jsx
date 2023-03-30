import styled from "styled-components";
import { animateInsertionUpToDown } from "../../styles/animation.styles";
import { DisplaySizes } from "../../styles/variables.styles";
export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  border-radius: 20px;
  opacity: 90%;
  cursor: pointer;
  ${animateInsertionUpToDown}
  background-color: #fff;
  img {
    width: 100%;
    z-index: -10;
    transition: all 0.2s;
  }
  .category-title-box {
    position: absolute;
    text-align: center;
    background-color: #eeeeee77;
    opacity: 0.75;
    padding: 20px 50px;
    border: 1px solid #000000;
    border-radius: 5px;
    h2 {
      font-size: 24px;
      margin: 0;
      margin-bottom: 5px;
    }
    h3 {
      font-size: 20px;
      margin: 0;
    }
    @media ${DisplaySizes.tablet} {
      h2 {
        font-size: 20px;
      }
      h3 {
        font-size: 16px;
      }
    }
    @media ${DisplaySizes.mobile} {
      h2 {
        font-size: 16px;
      }
      h3 {
        font-size: 14px;
      }
    }
  }
  &:hover img {
    scale: 1.05;
    opacity: 0.85;
  }
  &:hover .category-title-box {
    opacity: 1;
  }
  @media ${DisplaySizes.mobile} {
    height: 250px;
  }
`;
