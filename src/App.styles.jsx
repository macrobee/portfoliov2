import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
  font-family: "Fira Code", monospace;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 10rem;
  color: ${props=>props.themeColors.text};
    background-color: ${props=>props.themeColors.noColor};
  a {
    text-decoration: none;
  }
`;
