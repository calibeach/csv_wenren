import styled from "styled-components";

const StyledCharacterArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  height: 100%;
  width: 30%;
  font-weight: bold;
  margin-left: 1rem;
  margin-bottom: 4em;

  @media (max-width: 430px) {
    margin-bottom: 0em;
  }
`;

const StyledEmperorTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
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
