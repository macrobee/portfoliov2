import styled from "styled-components";


export const PreviewImage = styled.img`
  border-radius: 1rem;
  border: 2px solid ${props=>props.themeColors.text};
  transition: 0.3s;
  :hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 10px ${props=>props.themeColors.main});
  }
`;
