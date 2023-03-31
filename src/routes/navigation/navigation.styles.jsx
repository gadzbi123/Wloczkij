import styled from "styled-components";
import { Colors, DisplaySizes } from "../../styles/variables.styles";
export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 5px;
  margin: 5px 10px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 2px solid ${Colors.lightGray};
  background-color: ${Colors.white};
  svg {
    width: 75px;
    height: auto;
    transition: 0.2s all;
    &:hover {
      scale: 1.03;
    }
    @media ${DisplaySizes.tablet} {
      width: 50px;
      padding: 0;
    }
    @media ${DisplaySizes.mobile} {
      width: 35px;
      padding: 0;
    }
  }
`;
export const LinksContainer = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
  gap: 15px;
  a {
    font-size: 25px;
    font-weight: 700;
    text-decoration: none;
    color: ${Colors.darkGray};
    transition: 0.2s;
    &:hover {
      color: ${Colors.gray};
      box-shadow: 0 1px 0 ${Colors.gray};
      text-shadow: 0 0px 2px ${Colors.midShadow};
    }
    @media ${DisplaySizes.tablet} {
      font-size: 20px;
      white-space: nowrap;
    }
  }
  @media ${DisplaySizes.tablet} {
    gap: 30px;
  }
  @media ${DisplaySizes.mobile} {
    gap: 0;
    width: 40%;
  }
  @media ${DisplaySizes.smallMobile} {
    width: 45%;
  }
`;
