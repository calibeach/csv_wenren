import styled, { css, keyframes } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  font-family: "KaiTi", serif;
  background-color: #f5f5f5;
  color: #1c1c1c;
  background-image: url("/src/assets/blank-rectangle-frame-design_53876-115749.jpg");
  background-size: cover; /* Ensures the image covers the entire background */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
`;

const StyledEmperorTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

interface StyledEunuchTilesProps {
  $isEmperorAnimationComplete: boolean;
}

const StyledEunuchTiles = styled.div<StyledEunuchTilesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  opacity: 0;
  transition: opacity 2s ease-in-out;
  transition-delay: 1s;
  ${({ $isEmperorAnimationComplete }) =>
    $isEmperorAnimationComplete &&
    css`
      opacity: 1;
    `}
`;

const StyledSelectedTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledWinningChengyuBoard = styled.div`
  width: 200px; /* Adjust the width as needed */
  margin-right: 200px;
  margin-top: 40px;
  padding: 10px;
  background-color: transparent; /* Adjust the background color as needed */
  z-index: 1000; /* Ensure it appears above other elements */
  margin-left: auto; /* Pushes the element to the right */
  align-self: flex-start;
  &.fade-in {
    animation: ${fadeIn} 2s forwards;
  }
`;

const StyledPlayingArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 140px;
  height: 100vh;
`;

export {
  StyledHomeContainer,
  StyledEmperorTile,
  StyledEunuchTiles,
  StyledSelectedTile,
  StyledWinningChengyuBoard,
  StyledPlayingArea,
};
