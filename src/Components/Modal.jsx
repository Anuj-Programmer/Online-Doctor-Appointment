// Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeButton}>X</button>
        {children}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    minWidth: '300px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '20px',
    background: 'transparent',
    border: 'none',
  },
};

export default Modal;
