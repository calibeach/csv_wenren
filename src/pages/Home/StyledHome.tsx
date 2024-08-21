import styled, { css } from "styled-components";

const StyledHomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 20px; /* Add padding if needed */
  background-color: transparent; /* Customize as needed */
`;
// const StyledWinningChengyuBoard = styled.div`
//   width: 200px; /* Adjust the width as needed */
//   margin-right: 200px;
//   margin-top: 40px;
//   padding: 10px;
//   background-color: transparent; /* Adjust the background color as needed */
//   z-index: 1000; /* Ensure it appears above other elements */
//   margin-left: auto; /* Pushes the element to the right */
//   align-self: flex-start;
//   border: 1px solid green;
//   &.fade-in {
//     animation: ${fadeIn} 2s forwards;
//   }
// `;

// const StyledPlayingArea = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   flex-direction: column;
//   padding-bottom: 140px;
//   height: 100vh;
// `;

export {
  StyledHomeContainer,
  StyledEmperorTile,
  StyledEunuchTiles,
  StyledSelectedTile,
  StyledWinningChengyuBoard,
  StyledPlayingArea,
  StyledBackgroundImage,
  StyledCharacterArea,
};
