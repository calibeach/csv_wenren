import React from "react";

import Modals from "../Modals/Modals";
import { useModals } from "../../customHooks/useModals";
import menu2 from "../../assets/misc/menu.jpg";
import RestoreIcon from "@mui/icons-material/Restore";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { StyledGameControlsContainer } from "./StyledGameControls";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Action } from "../../reducer/reducer";

interface GameControlsProps {
  fetchData: () => void;
  resetTiles: () => void;
  dispatch: React.Dispatch<Action>;
  score: number;
}

const GameControls: React.FC<GameControlsProps> = ({
  fetchData,
  resetTiles,
  dispatch,
  score,
}) => {
  const {
    isSettingsModalOpen,
    openSettingsModal,
    closeSettingsModal,
    isShareModalOpen,
    openShareModal,
    closeShareModal,
    isInstructionsModalOpen,
    openInstructionsModal,
    closeInstructionsModal,
    isDonationsModalOpen,
    openDonationsModal,
    closeDonationsModal,
    isWinningModalOpen,
    openWinningModal,
    closeWinningModal,
  } = useModals();

  const handleNewGameClick = () => {
    dispatch({ type: "CLEAR_WINNING_CHENGYU", payload: [] });
    dispatch({ type: "CLEAR_SCORE" });
    fetchData();
  };

  const handleResetTilesClick = () => {
    resetTiles();
  };

  const actions = [
    { icon: <SettingsIcon />, name: "Settings", onClick: openSettingsModal },
    { icon: <CelebrationIcon />, name: "Share", onClick: openShareModal },
    {
      icon: <MenuBookIcon />,
      name: "Instructions",
      onClick: openInstructionsModal,
    },
    {
      icon: <VolunteerActivismIcon />,
      name: "Donations",
      onClick: openDonationsModal,
    },
    {
      icon: <RestoreIcon />,
      name: "Reset Tiles",
      onClick: handleResetTilesClick,
    },
    {
      icon: <PlayCircleOutlineIcon />,
      name: "New Game",
      onClick: handleNewGameClick,
    },
  ];
  return (
    <StyledGameControlsContainer>
      <SpeedDial
        ariaLabel="Game Controls"
        icon={
          <img
            src={menu2}
            alt="Menu"
            style={{ width: 56, height: 56, borderRadius: "50%" }}
          />
        }
        direction="up"
        className="custom-speed-dial"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
      <Modals
        isSettingsModalOpen={isSettingsModalOpen}
        closeSettingsModal={closeSettingsModal}
        isShareModalOpen={isShareModalOpen}
        closeShareModal={closeShareModal}
        isInstructionsModalOpen={isInstructionsModalOpen}
        closeInstructionsModal={closeInstructionsModal}
        isDonationsModalOpen={isDonationsModalOpen}
        closeDonationsModal={closeDonationsModal}
        isWinningModalOpen={isWinningModalOpen}
        openWinningModal={openWinningModal}
        closeWinningModal={closeWinningModal}
        score={score}
      />
    </StyledGameControlsContainer>
  );
};

export { GameControls };
export default GameControls;
