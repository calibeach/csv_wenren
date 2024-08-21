import styled, { css } from "styled-components";

const StyledCharacterArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  font-size: 1.5rem;
  height: 100vh;
  width: 30vw;
  font-weight: bold;
`;

const StyledEmperorTile = styled.div`
  display: flex;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

interface StyledEunuchTilesProps {
  $isEmperorAnimationComplete: boolean;
}

const StyledEunuchTiles = styled.div<StyledEunuchTilesProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  justify-items: center;
  align-items: center;
  opacity: 0;
  transition: opacity 2s ease-in-out;
  transition-delay: 0.25s;
  margin-bottom: 3rem;
  ${({ $isEmperorAnimationComplete }) =>
    $isEmperorAnimationComplete &&
    css`
      opacity: 1;
    `}
`;

export { StyledCharacterArea, StyledEmperorTile, StyledEunuchTiles };
