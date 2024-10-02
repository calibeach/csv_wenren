import styled, { css } from "styled-components";

const StyledCharacterArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  font-size: 1.5rem;
  height: 100%;
  width: 30%;
  font-weight: bold;
  margin-left: 1rem;
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
  opacity: ${({ $isEmperorAnimationComplete }) =>
    $isEmperorAnimationComplete ? 1 : 0};
  transition: ${({ $isEmperorAnimationComplete }) =>
    $isEmperorAnimationComplete ? "opacity 2s ease-in-out 0.25s" : "none"};
`;

export { StyledCharacterArea, StyledEmperorTile, StyledEunuchTiles };
