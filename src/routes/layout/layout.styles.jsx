import styled from "styled-components";
import imgSource from "../../assets/background2.svg";
export const BackgroundContainer = styled.div`
  background-image: url(${imgSource});
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-size: cover;
  position: fixed;
  z-index: -5;
`;
