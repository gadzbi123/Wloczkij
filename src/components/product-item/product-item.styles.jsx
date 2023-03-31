import styled from "styled-components";
import { Colors, DisplaySizes } from "../../styles/variables.styles";

export const ProductItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
    @media ${DisplaySizes.tablet} {
      font-size: 20px;
    }
    @media ${DisplaySizes.mobile} {
      font-size: 18px;
    }
  }
  &:hover {
    box-shadow: 0 0 0 2px ${Colors.darkRed};
  }
  @media ${DisplaySizes.tablet} {
    height: 300px;
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
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    border-radius: 100px;
    box-shadow: 0 0 10px 2px ${Colors.darkGray};
    transition: all 0.5s;
    text-align: center;
    .image-box {
      overflow: hidden;
      align-items: center;
      display: flex;
      justify-content: center;
      width: 100%;
      img {
        height: 120%;
        scale: 1.1;
        @media ${DisplaySizes.smallPC} {
          width: 100%;
          height: auto;
          scale: 1;
        }
      }
    }
    h3 {
      margin: 20px 0;
      font-size: 34px;
    }
    p {
      text-align: center;
      width: 80%;
      margin: 0;
      margin-bottom: 20px;
    }
    @media ${DisplaySizes.tablet} {
      border-radius: 50px;
      h3 {
        font-size: 24px;
        margin: 10px 0;
      }
      p {
        font-size: 12px;
        margin-bottom: 15px;
      }
      height: 60%;
    }
    @media ${DisplaySizes.mobile} {
      border-radius: 30px;
      height: 50%;
    }
    @media ${DisplaySizes.smallMobile} {
      border-radius: 10px;
      width: 70vw;
    }
  }
`;
