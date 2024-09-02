import React, { useEffect, useRef } from 'react';
import './Modal.css';

const Modal = ({ children, onClose }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-backdrop">
      <div className="modal" ref={modalRef}>
        <button onClick={onClose} className="modal-close-button">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
