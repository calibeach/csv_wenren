import React from "react";
import ReusableModal from "../ReusableModal/ReusableModal";

// import { StyledModalContainer } from "./StyledModals";
import { generateHanziCSV } from "../../customHooks/useCreateCSV";

interface ModalsProps {
  isSettingsModalOpen: boolean;
  closeSettingsModal: () => void;
  isShareModalOpen: boolean;
  closeShareModal: () => void;
  isInstructionsModalOpen: boolean;
  closeInstructionsModal: () => void;
  isDonationsModalOpen: boolean;
  closeDonationsModal: () => void;
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
}) => {
  const handleGenerateCSV = () => {
    generateHanziCSV(); // Call the CSV generation function
  };
  return (
    <>
      <ReusableModal
        isOpen={isSettingsModalOpen}
        onRequestClose={closeSettingsModal}
        title="Settings"
      >
        <h1>Settings</h1>
        <button onClick={handleGenerateCSV}>Generate Hanzi CSV</button>
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
        title="Donations"
      >
        <h1>Donations</h1>
      </ReusableModal>
    </>
  );
};

export default Modals;
