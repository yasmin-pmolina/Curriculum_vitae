import { event } from 'jquery';
import React, { useState } from 'react';
import './floatingPanel.css';

export default function FloatingPanel() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar datos del formulario a través de una solicitud HTTP o una función
  };

  const handleClose = () => {
    // Función para cerrar el panel flotante
    
  };

  return (
    <div className="floating-panel">
      <button className="close-button" onClick={handleClose}>X</button>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Correo electrónico:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}