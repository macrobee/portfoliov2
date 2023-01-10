import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: baseline;
  gap: 2rem;
  flex-wrap: wrap;
  border: 2px solid ${(props) => props.themeColors.text};
  border-radius: 10px;
  padding: 2rem 3rem;
  box-sizing: border-box;
  background-color: ${(props) => props.themeColors.background};
`;
