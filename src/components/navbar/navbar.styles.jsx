import styled from "styled-components";

export const NavBar = styled.div`
  //   border-left: 10px solid ${(props) => props.themeColors.text};
  position: fixed;
  width: 180px;
  right: 1rem;
  bottom: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 800px) {
    width: 100%;
    height: max(5%, 50px);
    bottom: 0;
    right: 0;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-left: none;
    z-index: 4;
    padding: 0.5rem 0;
    
    border-top: 2px solid ${props=> props.themeColors.text};
    background-color: ${(props) => props.themeColors.background};
  }
`;
