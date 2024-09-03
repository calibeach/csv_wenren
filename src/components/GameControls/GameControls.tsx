import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

import { Button } from "../Button/Button";
import { StyledGameControlsContainer } from "./StyledGameControls";

interface GameControlsProps {
  fetchData: () => void;
}

const actions = [
  { icon: <Button>Reset Tiles</Button>, name: "Reset Tiles" },
  { icon: <Button>Donations</Button>, name: "Donations" },
  { icon: <Button>Instructions</Button>, name: "Instructions" },
  { icon: <Button>Share</Button>, name: "Share" },
  { icon: <Button>Settings</Button>, name: "Settings" },
];

const GameControls: React.FC<GameControlsProps> = ({ fetchData }) => {
  const handleNewGameClick = () => {
    fetchData();
  };

  return (
    <StyledGameControlsContainer>
      <SpeedDial
        ariaLabel="Game Controls"
        icon={<SpeedDialIcon />}
        direction="up"
      >
        <SpeedDialAction
          key="New Game"
          icon={<Button onClick={handleNewGameClick}>New Game</Button>}
          tooltipTitle="New Game"
        />
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </StyledGameControlsContainer>
  );
};

export { GameControls };
export default GameControls;
