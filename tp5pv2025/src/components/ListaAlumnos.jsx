import { Link, useNavigate } from 'react-router-dom'

export default function ListaAlumnos({ alumnos, onEliminar }) {
  const navigate = useNavigate()

  const handleEliminar = (lu) => {
    if (window.confirm('¿Seguro que deseas eliminar este alumno?')) {
      onEliminar(lu)
    }
  }

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <table>
        <thead>
          <tr>
            <th>LU</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map(alumno => (
            <tr key={alumno.lu}>
              <td>{alumno.lu}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellido}</td>
              <td>
                <button onClick={() => navigate(`/alumnos/${alumno.lu}`)}>Ver Detalles</button>
                <button onClick={() => navigate(`/alumnos/${alumno.lu}/editar`)}>Editar</button>
                <button onClick={() => handleEliminar(alumno.lu)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}