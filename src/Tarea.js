import React, { useState } from 'react';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        type="checkbox"
        checked={completada}
        onChange={onToggleCompletada}
        className="mr-3"
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="form-control"
          />
          <button
            onClick={handleSaveClick}
            className="btn btn-success ml-2"
          >
            Guardar
          </button>
        </>
      ) : (
        <>
          {tarea}
          <button onClick={onDelete} className="btn btn-danger ml-2">
            Eliminar
          </button>
          <button onClick={handleEditClick} className="btn btn-primary ml-2">
            Editar
          </button>
        </>
      )}
    </li>
  );
}

export default Tarea;


