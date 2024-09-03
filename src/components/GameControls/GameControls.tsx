import React from "react";

import { Button } from "../Button/Button";
import { StyledGameControlsContainer } from "./StyledGameControls";

interface GameControlsProps {
  fetchData: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({ fetchData }) => {
  const handleNewGameClick = () => {
    fetchData();
  };

  return (
    <StyledGameControlsContainer>
      <Button onClick={handleNewGameClick}>New Game</Button>
      <Button>Reset Tiles</Button>
      <Button>Donations</Button>
      <Button>Settings</Button>
    </StyledGameControlsContainer>
  );
};

export { GameControls };
export default GameControls;
