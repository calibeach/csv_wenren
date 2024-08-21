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
}

const CharacterArea: React.FC<CharacterAreaProps> = ({
  emperorCharacter,
  onEmperorClick,
  handleEmperorAnimationEnd,
  isEmperorAnimationComplete,
  gameTiles,
  onEunuchClick,
}) => {
  return (
    <StyledCharacterArea>
      <StyledEmperorTile>
        <EmperorTile
          emperorCharacter={emperorCharacter}
          onEmperorClick={onEmperorClick}
          onAnimationEnd={handleEmperorAnimationEnd}
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
          />
        ))}
      </StyledEunuchTiles>
    </StyledCharacterArea>
  );
};

export { CharacterArea };
export default CharacterArea;
