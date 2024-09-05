import { useEffect, useState } from "react";

export const useModals = () => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);
  const [isDonationsModalOpen, setIsDonationsModalOpen] = useState(false);

  const openSettingsModal = () => setIsSettingsModalOpen(true);
  const closeSettingsModal = () => setIsSettingsModalOpen(false);

  const openShareModal = () => setIsShareModalOpen(true);
  const closeShareModal = () => setIsShareModalOpen(false);

  const openInstructionsModal = () => setIsInstructionsModalOpen(true);
  const closeInstructionsModal = () => setIsInstructionsModalOpen(false);

  const openDonationsModal = () => setIsDonationsModalOpen(true);
  const closeDonationsModal = () => setIsDonationsModalOpen(false);

  useEffect(() => {
    console.log("isSettingsModalOpen", isSettingsModalOpen);
  }, [isSettingsModalOpen]);

  return {
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
  };
};
