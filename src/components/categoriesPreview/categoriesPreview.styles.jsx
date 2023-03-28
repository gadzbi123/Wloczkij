import styled from "styled-components";
import { BaseComponentStyle } from "../../styles/variables.styles";
export const CategoriesPreviewContainer = styled.div`
  ${BaseComponentStyle}
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  row-gap: 10px;
  column-gap: 10px;
`;
