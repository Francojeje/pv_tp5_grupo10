import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ListaAlumnos from './components/ListaAlumnos'
import AlumnoDetalle from './components/AlumnoDetalle'
import AlumnoForm from './components/AlumnoForm'
import Acerca from './components/Acerca'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
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

  // Estado para el diálogo de confirmación
  const [dialogOpen, setDialogOpen] = useState(false)
  const [luAEliminar, setLuAEliminar] = useState(null)

  const pedirConfirmacionEliminar = (lu) => {
    setLuAEliminar(lu)
    setDialogOpen(true)
  }

  const confirmarEliminar = () => {
    setAlumnos(prevAlumnos => prevAlumnos.filter(a => a.lu !== luAEliminar))
    setDialogOpen(false)
    setLuAEliminar(null)
  }

  const agregarAlumno = (alumno) => {
    setAlumnos(prevAlumnos => [...prevAlumnos, alumno])
  }

  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/alumnos"
            element={
              <ListaAlumnos
                alumnos={alumnos}
                onEliminar={pedirConfirmacionEliminar}
              />
            }
          />
          <Route
            path="/alumnos/nuevo"
            element={<AlumnoForm onGuardar={agregarAlumno} alumnos={alumnos} />}
          />
          <Route
            path="/alumnos/:id"
            element={<AlumnoDetalle alumnos={alumnos} />}
          />
          <Route
            path="/alumnos/:id/editar"
            element={
              <AlumnoForm
                onGuardar={alumnoEditado =>
                  setAlumnos(alumnos.map(a => a.lu === alumnoEditado.lu ? alumnoEditado : a))
                }
                alumnos={alumnos}
                editar={true}
              />
            }
          />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      {/* Diálogo de confirmación */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <WarningAmberIcon color="warning" sx={{ fontSize: 32 }} />
          Confirmar eliminación
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar este alumno? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary" variant="outlined">
            Cancelar
          </Button>
          <Button onClick={confirmarEliminar} color="error" variant="contained">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Router>
  )
}

export default App
