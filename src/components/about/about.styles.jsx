import styled from "styled-components";

import { themeColors } from "../../colors/colors";

export const AboutSection = styled.div`
  width: max(300px, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  img {
    border-radius: 100px;
    border: 2px solid ${themeColors.text};
    background-color: ${themeColors.background};
  }
  p {
    border: 2px solid ${themeColors.text};
    border-radius: 10px;
    padding: 10px 20px;
  }
`;
