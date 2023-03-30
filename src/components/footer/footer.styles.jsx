import styled from "styled-components";
import { DisplaySizes } from "../../styles/variables.styles";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3vh;
  margin-top: auto;
  padding-top: 50px;
  background-image: linear-gradient(to bottom, #00000000, #a12f0c96);
  p {
    font-size: 11px;
    margin: 0;
    @media ${DisplaySizes.mobile} {
      font-size: 8px;
    }
  }
`;
