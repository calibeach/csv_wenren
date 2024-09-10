import React from "react";
import ReusableModal from "../ReusableModal/ReusableModal";

import { Button } from "../Button/Button";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
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
  const handleOpenDonationPage = () => {
    window.open(
      "https://www.paypal.com/donate/?hosted_button_id=UQRGCK75RX2QA",
      "_blank"
    );
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
        <p>
          Creating 文人 has been a labor of love, and now, I'd love to have you
          involved. <br />
          <br />
          If you’ve enjoyed using it, consider making a small donation to help
          us keep the servers running and bring new features your way.
          <br />
          <br />
          Even better, 10% of all donations will go to Alzheimer’s Disease
          International, supporting critical research and care for those
          affected by dementia.
          <br />
          <br />
          Thanks so much for being part of this community—your support really
          helps us grow and do more!
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
    </>
  );
};

export default Modals;
