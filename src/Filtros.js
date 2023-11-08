import React from 'react';

function Filtros({ filtrarTareas, ordenarTareas }) {
  return (
    <div className="btn-group">
      <button className="btn btn-primary" onClick={() => filtrarTareas("Todas")}>Todas</button>
      <button className="btn btn-primary" onClick={() => filtrarTareas("Pendientes")}>Pendientes</button>
      <button className="btn btn-primary" onClick={() => filtrarTareas("Completadas")}>Completadas</button>
      <button className="btn btn-primary" onClick={() => filtrarTareas("ascendente")}>ascendente</button>
      <button className="btn btn-primary" onClick={() => filtrarTareas("descendente")}>descendente</button>
    </div>
  );
}

export default Filtros;



