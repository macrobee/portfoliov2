import styled from "styled-components";

import { themeColors } from "../../colors/colors";

export const ProjectContainer = styled.div`
  width: max(300px, 50%);
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 2rem;
  flex-wrap: wrap;
  border: 2px solid ${themeColors.text};
  border-radius: 10px;
  padding: 2rem 3rem;
  background-color: ${themeColors.background};
`;