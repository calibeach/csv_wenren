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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 1280px;
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
  width: 35%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1000; /* Ensure the image is behind other content */
  opacity: 0; /* Start with the image hidden */
  animation: fadeIn 2s forwards; /* Apply the fade-in animation */

  @keyframes fadeIn {
    to {
      opacity: 1; /* End with the image fully visible */
    }
  }
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
  max-width: 1280px;
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
  height: 100%;
  width: 35vw;
  padding: 20px; /* Add padding if needed */
  background-color: transparent; /* Customize as needed */
`;

const StyledScoringArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const StyledScoringAreaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 35%;
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
  StyledScoringAreaContainer,
};
