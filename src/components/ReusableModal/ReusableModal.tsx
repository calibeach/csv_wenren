import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // This is important for accessibility

interface ReusableModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  isOpen,
  onRequestClose,
  title,
  children,
}) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    <h2>{title}</h2>
    {children}
    <button onClick={onRequestClose}>Close</button>
  </Modal>
);

export default ReusableModal;
