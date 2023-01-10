import styled from "styled-components";

import { themeColors } from "../../colors/colors";

export const ToolsContainer = styled.div`
width: 100%
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
  border: 2px solid ${themeColors.text};
  border-radius: 10px;
  padding: 3rem;
  box-sizing: border-box;
`;

export const ToolsSectionContainer = styled.div`
width: max(300px, 50%);
display: flex;
flex-direction: column;
gap: 2rem;
padding-top: 5rem;
justify-content: center;
  align-items: center;
`