import React from "react";

import {
  StyledCharacterArea,
  StyledEmperorTile,
  StyledEunuchTiles,
} from "./StyledCharacterArea";
import { EmperorTile } from "../Tiles/EmperorTile/EmperorTile";
import { EunuchTile } from "../Tiles/EunuchTile/EunuchTile";

interface CharacterAreaProps {
  emperorCharacter: string | null;
  onEmperorClick: (chengyu: string) => void;
  handleEmperorAnimationEnd: () => void;
  isEmperorAnimationComplete: boolean;
  gameTiles: string[];
  onEunuchClick: (eunuchCharacter: string) => void;
  resetSignal: boolean;
}

const CharacterArea: React.FC<CharacterAreaProps> = ({
  emperorCharacter,
  onEmperorClick,
  handleEmperorAnimationEnd,
  isEmperorAnimationComplete,
  gameTiles,
  onEunuchClick,
  resetSignal,
}) => {
  return (
    <StyledCharacterArea>
      <StyledEmperorTile>
        <EmperorTile
          emperorCharacter={emperorCharacter}
          onEmperorClick={onEmperorClick}
          onAnimationEnd={handleEmperorAnimationEnd}
          resetSignal={resetSignal}
        />
      </StyledEmperorTile>
      <StyledEunuchTiles
        $isEmperorAnimationComplete={isEmperorAnimationComplete}
      >
        {gameTiles.map((tile: string, index: number) => (
          <EunuchTile
            key={index}
            eunuchCharacter={tile}
            onEunuchClick={onEunuchClick}
            resetSignal={resetSignal}
          />
        ))}
      </StyledEunuchTiles>
    </StyledCharacterArea>
  );
};

export { CharacterArea };
export default CharacterArea;
