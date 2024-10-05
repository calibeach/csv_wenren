import React, { useEffect } from "react";
import ReusableModal from "../ReusableModal/ReusableModal";

import { Button } from "../Button/Button";
import { StyledWinningAward } from "./StyledModals";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import { StyledAchievementSeal } from "../AchievementLevels/StyledAchievementLevels";
import { AchievementLevelTile } from "../Tiles/AchievementLevelTiles/AchievementLevelTile";

interface ModalsProps {
  isSettingsModalOpen: boolean;
  closeSettingsModal: () => void;
  isShareModalOpen: boolean;
  closeShareModal: () => void;
  isInstructionsModalOpen: boolean;
  closeInstructionsModal: () => void;
  isDonationsModalOpen: boolean;
  closeDonationsModal: () => void;
  isWinningModalOpen: boolean;
  openWinningModal: () => void;
  closeWinningModal: () => void;
  score: number;
}

const Modals: React.FC<ModalsProps> = ({
  isSettingsModalOpen,
  closeSettingsModal,
  isShareModalOpen,
  closeShareModal,
  isInstructionsModalOpen,
  closeInstructionsModal,
  isDonationsModalOpen,
  closeDonationsModal,
  isWinningModalOpen,
  openWinningModal,
  closeWinningModal,
  score,
}) => {
  useEffect(() => {
    if (score > 99) {
      openWinningModal();
    }
  }, [score, openWinningModal]);

  const handleOpenDonationPage = () => {
    window.open(
      "https://www.paypal.com/donate/?hosted_button_id=UQRGCK75RX2QA",
      "_blank"
    );
  };

  const winningCharacters = ["文", "雅", "之", "人"];

  return (
    <>
      <ReusableModal
        isOpen={isSettingsModalOpen}
        onRequestClose={closeSettingsModal}
        title="Settings"
      >
        <h1>Settings</h1>
      </ReusableModal>
      <ReusableModal
        isOpen={isShareModalOpen}
        onRequestClose={closeShareModal}
        title="Share"
      >
        <div className="sharethis-inline-share-buttons"></div>
      </ReusableModal>

      <ReusableModal
        isOpen={isInstructionsModalOpen}
        onRequestClose={closeInstructionsModal}
        title="Instructions"
      >
        <p>
          Welcome to <strong>文人</strong>！This is a game I developed for Leila
          Li, my darling wife.
        </p>
        <p>
          <strong>To Win: </strong> Find all of the 成语 that can be made with
          the characters on the left-hand side of the screen.
        </p>
        <p>
          <strong>Rules: </strong> The "文人" character is the large character
          on the left. You must use the "文人" character at least once in the
          成语.
        </p>
        <p>
          <strong>Achievements: </strong>Watch your literary level grow in the
          upper right-hand corner as you successfully identify 成语
        </p>
      </ReusableModal>

      <ReusableModal
        isOpen={isDonationsModalOpen}
        onRequestClose={closeDonationsModal}
        title="捐款"
      >
        <p>
          Creating 文人 has been a labor of love, and now I'd love for you to be
          part of it.
          <br />
          <br />
          If you've enjoyed using it, please consider a small donation to keep
          the servers running and bring new features.
          <br />
          <br />
          I also created 文人 because Alzheimer’s runs in both Leila's and my
          families, and word games are proven to help with memory. That’s why
          10% of all donations go to Alzheimer’s Disease International to
          support research and care.
          <br />
          <br />
          Thanks for being part of this community—your support means the world
          to us!
          <br />
          <br />
          Contact us at: wenrenyouxi@gmail.com with any suggestions or ideas to
          improve 文人.
          <br />
          <br />
        </p>
        <Button onClick={handleOpenDonationPage}>
          {" "}
          <LocalFloristIcon
            style={{ marginRight: "16px", verticalAlign: "middle" }}
          />
          Help Us Grow!
        </Button>
      </ReusableModal>
      <ReusableModal
        isOpen={isWinningModalOpen}
        onRequestClose={closeWinningModal}
        title="您已获得排名"
      >
        <StyledWinningAward>
          <StyledAchievementSeal
            src={"/src/assets/level_seals/8_literati_transparent.png"}
          />
          {winningCharacters.map((character, index) => (
            <AchievementLevelTile
              key={index}
              achievementLevelTile={character}
            />
          ))}
        </StyledWinningAward>
      </ReusableModal>
    </>
  );
};

export default Modals;
