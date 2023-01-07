import styled from "styled-components";

import { themeColors } from "../../colors/colors";

export const ToolsContainer = styled.div`
  width: max(300px, 50%);
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
  border: 2px solid ${themeColors.text};
  border-radius: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
`;
