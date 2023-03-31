import styled from "styled-components";
import {
  animateInsertionScalingRotate,
  animateInsertionUpToDown,
} from "../../styles/animation.styles";
import {
  BaseComponentStyle,
  Colors,
  DisplaySizes,
} from "../../styles/variables.styles";

import { ReactComponent as Wloczka } from "../../assets/wloczka.svg";
export const HeaderContainer = styled.div`
  ${BaseComponentStyle}
  box-shadow: 0 1 0 ${Colors.midGray};
  border-radius: 20px;
  background-color: ${Colors.whiteOpaque};
  display: flex;
  justify-content: space-between;
  @media ${DisplaySizes.mobile} {
    height: 40vh;
  }
  @media ${DisplaySizes.smallMobile} {
    /* height: 60vh; */
    text-align: center;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeadingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 0 0 15px;
  h1 {
    font-size: 65px;
    color: ${Colors.darkGray};
    margin: 0;
    letter-spacing: -4px;
    ${animateInsertionUpToDown}
  }
  .animate {
    ${animateInsertionUpToDown}
  }
  p {
    opacity: 0;
    color: ${Colors.midGray};
    font-size: 40px;
    margin: 0;
    letter-spacing: -3px;
  }
  @media ${DisplaySizes.smallPC} {
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 30px;
    }
  }
  @media ${DisplaySizes.tablet} {
    h1 {
      font-size: 35px;
      letter-spacing: 0px;
    }
    p {
      font-size: 20px;
      letter-spacing: 0px;
    }
  }
  @media ${DisplaySizes.mobile} {
    h1 {
      font-size: 25px;
    }
    p {
      font-size: 16px;
    }
  }
  @media ${DisplaySizes.smallMobile} {
    padding: 5px 5px;
    h1 {
      font-size: 20px;
      margin-bottom: 5px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const WloczkaStyled = styled(Wloczka)`
  width: 45%;
  flex-shrink: 0;
  height: auto;
  font-weight: 300;
  ${animateInsertionScalingRotate}
  @media ${DisplaySizes.smallPC} {
    width: 35%;
  }
  @media ${DisplaySizes.mobile} {
    width: 50%;
  }
`;
