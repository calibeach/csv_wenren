import React from "react";
import Modal from "react-modal";

import "./StyledReusableModal.css"; 

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
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    closeTimeoutMS={1000}
    style={{
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        zIndex: 1000,
      },
      content: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "4px",
        width: "50%",
        height: "50%",
      },
    }}
  >
    <h2>{title}</h2>
    {children}
    {/* <button onClick={onRequestClose}>Close</button> */}
  </Modal>
);

export default ReusableModal;
