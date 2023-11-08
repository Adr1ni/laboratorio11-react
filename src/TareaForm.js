import React, { useState } from 'react';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === '') {
      alert('El texto de la tarea no puede estar en blanco.');
      return;
    }
    if (texto.length > 20) {
      alert('El texto de la tarea es demasiado largo.');
      return;
    }
    agregarTarea(texto);
    setTexto('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Añadir tarea..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">Agregar Tarea</button>
        </div>
      </div>
    </form>
  );
}

export default TareaForm;



