import styled from "styled-components";
import { Colors } from "../../styles/variables.styles";

export const ProductItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 350px;
  background-color: ${Colors.orange};
  border-radius: 30px;
  overflow: hidden;
  transition: all 0.2s;
  &.different {
    background-color: ${Colors.red};
  }

  img {
    height: 80%;
  }
  h3 {
    display: flex;
    align-items: center;
    font-size: 24px;
    height: 20%;
    margin: 0;
  }
  &:hover {
    box-shadow: 0 0 0 2px ${Colors.darkRed};
  }
`;
