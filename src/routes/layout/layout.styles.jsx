import styled from "styled-components";
import imgSource from "../../assets/background2.svg";
export const BackgroundContainer = styled.div`
  background-image: url(${imgSource});
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  overflow: hidden auto;
  z-index: -100;
`;
