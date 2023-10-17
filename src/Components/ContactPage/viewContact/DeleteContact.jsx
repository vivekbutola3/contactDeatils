import React from "react";

const DeleteConfirmationModal = ({ contact, onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Delete Contact</h2>
        <p>Are you sure you want to delete {contact.firstName}?</p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
