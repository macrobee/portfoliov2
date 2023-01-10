import styled from "styled-components";
import { themeColors } from "../../colors/colors";

export const ProjectListContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 5rem;
`
export const ProjectsSectionContainer= styled.div`
width: max(300px, 50%);
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 2rem;
`
export const LinksContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
gap: 1rem;
`

export const LinkText = styled.a`
color:${themeColors.text};
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
transition: 0.3s;
:hover{
    color:${themeColors.main};
    transform: scale(1.1);
    filter: drop-shadow(0 0 10px ${themeColors.main});
}
`