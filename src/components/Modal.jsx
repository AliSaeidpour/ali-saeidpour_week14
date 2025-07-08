function Modal({ onConfirm, onCancel }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>Are you sure?</p>
        <button onClick={onConfirm}>✅ Confirm</button>
        <button onClick={onCancel}>❌ Cancel</button>
      </div>
    </div>
  );
}

export default Modal;