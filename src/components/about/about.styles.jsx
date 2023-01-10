import styled, { keyframes } from "styled-components";

import { themeColors } from "../../colors/colors";

export const AboutSection = styled.div`
  width: max(300px, 50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 5rem;

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

export const AboutContent = styled.div`
  display: flex;
  gap: 1rem;
`;
const gradientAnimation = keyframes`
to {background-position: 100% center;}
`;
export const BigName = styled.span`
  font-size: 7rem;
  font-weight: bold;
  font-family: "Satisfy", cursive, serif;
  color: white;
  background-image: linear-gradient(
    30deg,
    ${themeColors.main} 0%,
    #77f 20%,
    #1f3 100%
  );
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: ${gradientAnimation} 2s ease-in-out infinite;
  animation-direction: alternate;
`;

export const RoundImage = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const StaggeredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span:nth-of-type(1) {
    font-size: 3rem;
  }
  span:nth-of-type(2) {
    font-size: 1.5rem;
  }
`;

export const LoadingBackground=styled.div`
width: 100vw;
height: 100vh;
background-color: ${themeColors.main};
`