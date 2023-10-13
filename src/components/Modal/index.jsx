import React, { useState } from 'react';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Abrir Modal</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Olá Modal</h2>
            <button onClick={handleCloseModal}>Fechar Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;