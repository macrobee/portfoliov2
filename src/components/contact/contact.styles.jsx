import styled from "styled-components";

import { LinkText } from "../projects/projectlist.styles";

export const ContactContainer = styled.div`
  width: max(300px, 50%);
  border-radius: 1rem;
  border: 2px solid ${(props) => props.themeColors.text};
  padding: 2rem;
  box-sizing: border-box;
`;

export const ConnectText = styled.h2`
  font-size: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid ${(props) => props.themeColors.text};
`;

export const ConnectLinkText = styled(LinkText)`
  gap: 0.5rem;
`;
