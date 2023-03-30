import styled from "styled-components";
import { ReactComponent as FacebookSvg } from "../../assets/facebook-fill.svg";
import { animateInsertionScaling } from "../../styles/animation.styles";
import { Colors, DisplaySizes } from "../../styles/variables.styles";
export const FaceBookStyledSvg = styled(FacebookSvg)`
  width: 30px;
  height: 30px;
  fill: #4267b2;
  transition: all 0.2s;
  &:hover {
    filter: drop-shadow(0 0 2px ${Colors.midShadow});
    scale: 1.1;
  }
`;
export const AboutContainer = styled.div`
  margin: 0 auto;
  max-width: 60vw;
  box-shadow: 0 1 0 ${Colors.midGray};
  border-radius: 20px;
  background-color: ${Colors.whiteOpaque};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${animateInsertionScaling}
  h1,
  h2 {
    margin: 20px 40px;
    align-self: flex-start;
    margin-top: 20px;
  }
  p {
    margin-top: 10px;
    margin: 10px 40px;
    span {
      color: blue;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .contact {
    p {
      margin: 0;
    }
    display: flex;
    gap: 40px;
    align-items: center;
  }
  @media ${DisplaySizes.smallPC} {
    max-width: 80vw;
  }
  @media ${DisplaySizes.tablet} {
    max-width: 90vw;
    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 20px;
    }
  }
  @media ${DisplaySizes.mobile} {
    h1 {
      font-size: 18px;
      align-self: center;
    }
    h2 {
      font-size: 16px;
      align-self: center;
    }
    p {
      font-size: 12px;
    }
    text-align: center;
  }
`;
