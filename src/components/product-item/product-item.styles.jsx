import styled, { keyframes } from "styled-components";
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

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: block;
  background-color: #000000aa;
  top: 0;
  left: 0;
  z-index: 25;
  backdrop-filter: blur(3px);
  .modal-box {
    z-index: 50;
    background-color: ${Colors.lightOrange};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 100px;
    box-shadow: 0 0 10px 2px ${Colors.darkGray};
    transition: all 0.5s;
    img {
      height: 80%;
      /* height: 70vh; */
    }
    h3 {
      margin: 0;
      align-self: center;
    }
  }
`;
