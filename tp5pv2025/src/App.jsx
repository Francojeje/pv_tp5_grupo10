import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ListaAlumnos from './components/ListaAlumnos'
import AlumnoDetalle from './components/AlumnoDetalle'
import AlumnoForm from './components/AlumnoForm'
import Acerca from './components/Acerca'
import './App.css'

function App() {
  const [alumnos, setAlumnos] = useState([
    {
      lu: 'APU00999',
      nombre: 'María Eugenia',
      apellido: 'Diaz',
      curso: 'Tercero',
      email: 'mariadiaz@mail.com',
      domicilio: 'Av. Congreso 125',
      telefono: '3884895999'
    }
    
  ])

  
  const agregarAlumno = (alumno) => {
    setAlumnos([...alumnos, alumno])
  }

  
  const editarAlumno = (alumnoEditado) => {
    setAlumnos(alumnos.map(a => a.lu === alumnoEditado.lu ? alumnoEditado : a))
  }

  
  const eliminarAlumno = (lu) => {
    setAlumnos(alumnos.filter(a => a.lu !== lu))
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#e3e6ea', 
      }}
    >
      <Router>
        <NavBar />
        <main style={{ width: '100%', maxWidth: 700 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/alumnos"
              element={<ListaAlumnos alumnos={alumnos} onEliminar={eliminarAlumno} />}
            />
            <Route
              path="/alumnos/nuevo"
              element={<AlumnoForm onGuardar={agregarAlumno} />}
            />
            <Route
              path="/alumnos/:id"
              element={<AlumnoDetalle alumnos={alumnos} />}
            />
            <Route
              path="/alumnos/:id/editar"
              element={
                <AlumnoForm
                  onGuardar={editarAlumno}
                  alumnos={alumnos}
                  editar={true}
                />
              }
            />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
