import styled, { css, keyframes } from "styled-components";

export const fadeInAndMoveIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const scaleUpRotate = keyframes`
  0% {

    scale: 0;
    transform: rotate(0);
}
100% {
    scale: 1;
    transform: rotate(360deg);  
  }
`;

export const scaleUp = keyframes`
  0% {
    scale: 0;
}
100% {
    scale: 1;
  }
`;

export const animateInsertionUpToDown = css`
  animation: ${fadeInAndMoveIn} 0.5s ease-out forwards;
  transition: all;
  backface-visibility: hidden;
`;

export const animateInsertionScalingRotate = css`
  animation: ${scaleUpRotate} 1s ease-out;
`;
export const animateInsertionScaling = css`
  animation: ${scaleUp} 0.5s ease-out;
`;
