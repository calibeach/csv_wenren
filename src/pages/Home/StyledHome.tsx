import styled, { css, keyframes } from "styled-components";

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
  color: #1c1c1c;
  position: relative;
`;

const StyledEmperorTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledBackgroundImage = styled.img`
  width: 36vw;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1000; /* Ensure the image is behind other content */
`;

const StyledImperialSeal = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  position: relative;
  position: absolute;
  top: 60%;
  left: 40%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  animation: ${fadeIn} 2s forwards;
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

const StyledPlayingArea = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100vh;
  border: 1px solid green;
  z-index: 1000;
`;

const StyledCharacterArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const StyledWinningChengyuBoard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 35vw;
  padding: 20px; /* Add padding if needed */
  background-color: transparent; /* Customize as needed */
`;

const StyledScoringArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export {
  StyledHomeContainer,
  StyledEmperorTile,
  StyledEunuchTiles,
  StyledSelectedTile,
  StyledWinningChengyuBoard,
  StyledPlayingArea,
  StyledBackgroundImage,
  StyledCharacterArea,
  StyledImperialSeal,
  StyledScoringArea,
};
