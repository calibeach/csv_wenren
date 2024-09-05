import React from "react";
import ReusableModal from "../ReusableModal/ReusableModal";

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
}) => (
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
      <h1>Instructions</h1>
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

export default Modals;
