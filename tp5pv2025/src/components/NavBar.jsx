import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav style={{ margin: '1rem 0' }}>
      <Link to="/" style={{ marginRight: 10 }}>Inicio</Link>
      <Link to="/alumnos" style={{ marginRight: 10 }}>Lista de Alumnos</Link>
      <Link to="/alumnos/nuevo" style={{ marginRight: 10 }}>Nuevo Alumno</Link>
      <Link to="/acerca">Acerca de</Link>
    </nav>
  )
}