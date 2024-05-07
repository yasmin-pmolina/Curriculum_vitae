import React, { Component } from 'react';

class Modal extends Component {
  render() {
    const { isOpen, onClose, imagePath } = this.props;

    if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <img src={imagePath} alt="Imagen" />
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  }
}

export default Modal;
