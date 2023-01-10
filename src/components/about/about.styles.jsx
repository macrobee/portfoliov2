import styled, { keyframes } from "styled-components";

export const AboutSection = styled.div`
  width: max(300px, 50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 5rem;
  position: relative;
  img {
    border-radius: 100px;
    border: 2px solid ${(props) => props.themeColors.text};
    background-color: ${(props) => props.themeColors.background};
  }
  p {
    border: 2px solid ${(props) => props.themeColors.text};
    border-radius: 10px;
    padding: 10px 20px;
  }
  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  p {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: auto 1rem;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
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
    #2D82B7 0%,
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
  @media (max-width: 1020px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const StaggeredDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span:nth-of-type(1) {
    font-size: 3rem;
  }
  span:nth-of-type(2) {
    font-size: 1.5rem;
  }
  @media (max-width: 1020px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    gap: 2rem;
    span {
      position: absolute;
      bottom: -2rem;
    }
    span:nth-of-type(2) {
      left: 6rem;
    }
  }
`;

// export const LoadingBackground = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-color: ${(props) => props.themeColors.main};
// `;
