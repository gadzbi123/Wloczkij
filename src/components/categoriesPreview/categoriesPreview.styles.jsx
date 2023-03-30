import styled from "styled-components";
import { DisplaySizes } from "../../styles/variables.styles";
export const CategoriesPreviewContainer = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  row-gap: 10px;
  column-gap: 10px;
  @media ${DisplaySizes.smallPC} {
    max-width: 90vw;
  }
  @media ${DisplaySizes.tablet} {
    grid-template-columns: 1fr;
    max-width: 80vw;
  }
`;
