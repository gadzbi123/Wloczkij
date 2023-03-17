import styled from "styled-components";
import { Colors } from "../../styles/variables.styles";
export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 5px;
  margin: 5px 10px;
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
  }
`;