import styled from "styled-components";
export const IconsListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  svg {
    filter: drop-shadow(0 0 5px #fff);
  }
`;
