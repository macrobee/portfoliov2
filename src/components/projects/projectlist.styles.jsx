import styled from "styled-components";

export const ProjectListContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 5rem;
box-sizing: border-box;
width: 100%;
`
export const ProjectsSectionContainer= styled.div`
width: max(300px, 50%);
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
gap: 2rem;
@media (max-width: 800px) {width: 80%;}
@media (max-width: 500px) {width: 100%;}

`
export const LinksContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
gap: 1rem;
`

export const LinkText = styled.a`
color:${props=> props.themeColors.text};
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
transition: 0.3s;
:hover{
    color:${props=>props.themeColors.main};
    transform: scale(1.1);
    filter: drop-shadow(0 0 10px ${props=>props.themeColors.main});
}
`