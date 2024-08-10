import Modal from "react-modal";
import { useState } from "react";
import "./Modal.css";

export default function Delete(prop) {
  const { isOpen, onClose } = prop;

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handleCloseModal}
          style={{ cursor: "pointer", padding: "5px" }}
        >
          X
        </button>
      </div>
    </Modal>
  );
}
