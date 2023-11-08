import Tarea from './Tarea';

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada }) {
  

    const filtrarTareas = (filtro) => {
        let tareasFiltradas = [...tareas];
        if (filtro === 'Pendientes') {
          tareasFiltradas = tareasFiltradas.filter((tarea) => !tarea.completada);
        } else if (filtro === 'Completadas') {
          tareasFiltradas = tareasFiltradas.filter((tarea) => tarea.completada);
        } else if (filtro === 'ascendente') {
          tareasFiltradas.sort((a, b) => {
            if (a.texto < b.texto) {
              return -1;
            }
            if (a.texto > b.texto) {
              return 1;
            }
            return 0;
          });
        } else if (filtro === 'descendente') {
          tareasFiltradas.sort((a, b) => {
            if (a.texto > b.texto) {
              return -1;
            }
            if (a.texto < b.texto) {
              return 1;
            }
            return 0;
          });
        }
      
        return tareasFiltradas;
      };
      


  const tareasFiltradas = filtrarTareas('Todas'); // Filtro inicial

  return (
    <div>
      <ul className="list-group">
        {tareasFiltradas.map((tarea, index) => (
          <Tarea
            key={tarea.id}
            tarea={tarea.texto}
            completada={tarea.completada}
            onDelete={() => eliminarTarea(index)}
            onEdit={(nuevoTexto) => editarTarea(index, nuevoTexto)}
            onToggleCompletada={() => toggleCompletada(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;



