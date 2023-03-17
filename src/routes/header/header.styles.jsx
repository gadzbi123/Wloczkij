import styled from "styled-components";
import {
  animateInsertionText,
  animateInsertionScaling,
} from "../../styles/animation.styles";
import { Colors } from "../../styles/variables.styles";
import { ReactComponent as Wloczka } from "../../assets/wloczka.svg";
export const HeaderContainer = styled.div`
  margin: 0 auto;
  height: 70vh;
  width: 90vw;
  box-shadow: 0 1 0 ${Colors.midGray};
  border-radius: 20px;
  background-color: ${Colors.whiteOpaque};
  display: flex;
  justify-content: space-between;
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
    ${animateInsertionText}
  }
  p {
    color: ${Colors.midGray};
    font-size: 40px;
    margin: 0;
    ${animateInsertionText}
    animation-delay: .5s;
    letter-spacing: -3px;
  }
`;

export const WloczkaStyled = styled(Wloczka)`
  width: 45%;
  flex-shrink: 0;
  height: auto;
  font-weight: 300;
  ${animateInsertionScaling}
`;
