import styled, { keyframes } from "styled-components";

export const MovingBackgroundColors = () => {
  return (
    <div className="outside-color">
      <Color1 className="inside-color"></Color1>
      <Color2 className="inside-color"></Color2>
      <Color3 className="inside-color"></Color3>
    </div>
  );
};

export default MovingBackgroundColors;

const height = "50px";
const width = "100px";
const color1 = "red";
const color2 = "green";
const color3 = "blue";
const opacity = "0.3";
const animationDuration = "4s";

const slideSideAnimation = keyframes`
from {transform: translateX(0);}
    to {transform: translateX(100px) scaleX(1.1);}
`;
const slideAroundAnimation = keyframes`
    0%{transform: translate(0);}
    50% {transform: translate(100px -50px) scaleY(1.3);}
    100%{transform: translate(200px);}
  `;

const slideUpAnimation = keyframes`
    from {transform: translateY(0);}
    to{transform: translateY(150px) scaleX(1.1);}
`
const Color1 = styled.div`
  box-shadow: 0 0 60px 100px ${color1};
  height: ${height};
  width: ${width};
  border-radius: 50%;
  opacity: ${opacity};
  background-color: ${color1};
  position: fixed;
  z-index: 1;
  top: 10%;
  left: 10%;
  transition-timing-function: ease-in-out;
  animation-name: ${slideSideAnimation};
  animation-duration: ${animationDuration};
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;

const Color2 = styled.div`
  box-shadow: 0 0 60px 100px ${color2};
  height: ${height};
  width: ${width};
  border-radius: 50%;
  opacity: ${opacity};
  background-color: ${color2};
  position: fixed;
  z-index: 2;
  top: 30%;
  right: 10%;
  transition-timing-function: ease-in-out;
  animation-name: ${slideUpAnimation};
  animation-duration: ${animationDuration};
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;

const Color3 = styled.div`
  box-shadow: 0 0 60px 100px ${color3};
  height: ${height};
  width: ${width};
  border-radius: 50%;
  opacity: ${opacity};
  background-color: ${color3};
  position: fixed;
  z-index: 3;
  bottom: 10%;
  left: 40%;
  transition-timing-function: ease-in-out;
  animation-name: ${slideAroundAnimation};
  animation-duration: ${animationDuration};
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;
