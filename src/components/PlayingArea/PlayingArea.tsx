import React, { useEffect, useState } from "react";
import { StyledGridContainer } from "./StyledPlayingArea";
import { SelectedTile } from "../Tiles/SelectedTiles/SelectedTile";

type ChosenTilesArea = {
  chosenCharacters: string[];
  className?: string;
};

const ChosenTilesArea: React.FC<ChosenTilesArea> = ({
  chosenCharacters,
  className,
}) => {
  const [fadeOut, setFadeOut] = useState(false);
  console.log("ChosenTilesArea", className);
  useEffect(() => {
    if (className === "fade-out") {
      setFadeOut(true);
      console.log("Setting fadeOut to true");
      const gridElement = document.querySelector(".fade-out");
      if (gridElement) {
        const htmlElement = gridElement as HTMLElement;
        void htmlElement.offsetWidth; // Force a reflow
      }
      const timer = setTimeout(() => {
        console.log("Fade-out animation should have completed");
      }, 2100); // Slightly longer than the animation duration

      return () => clearTimeout(timer);
    }
  }, [className]);
  return (
    <StyledGridContainer className={fadeOut ? "fade-out" : ""}>
      {chosenCharacters.map((character, index) => (
        <SelectedTile key={index} selectedCharacter={character} />
      ))}
    </StyledGridContainer>
  );
};

export default React.memo(ChosenTilesArea);
