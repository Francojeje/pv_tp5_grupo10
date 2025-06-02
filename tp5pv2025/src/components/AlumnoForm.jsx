import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, TextField, Button, Paper } from '@mui/material'

export default function AlumnoForm({ onGuardar, alumnos, editar }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const alumnoExistente = editar ? alumnos.find(a => a.lu === id) : null

  const [alumno, setAlumno] = useState(
    alumnoExistente || {
      lu: '',
      nombre: '',
      apellido: '',
      curso: '',
      email: '',
      domicilio: '',
      telefono: ''
    }
  )

  useEffect(() => {
    if (editar && alumnoExistente) {
      setAlumno(alumnoExistente)
    }
  }, [editar, alumnoExistente])

  const handleChange = (e) => {
    setAlumno({ ...alumno, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onGuardar(alumno)
    navigate('/alumnos')
  }

  return (
    <Box
      component={Paper}
      elevation={4}
      sx={{
        minHeight: '70vh',
        maxWidth: 420,
        margin: '3rem auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        p: 4,
        backgroundColor: '#f7f8fa',
        color: '#222',
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: '#1a237e', fontWeight: 700 }}>
        {editar ? 'Editar Alumno' : 'Agregar Alumno'}
      </Typography>
      <TextField
        label="LU"
        name="lu"
        value={alumno.lu}
        onChange={handleChange}
        required
        disabled={editar}
        fullWidth
      />
      <TextField
        label="Nombre"
        name="nombre"
        value={alumno.nombre}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Apellido"
        name="apellido"
        value={alumno.apellido}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Curso"
        name="curso"
        value={alumno.curso}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        value={alumno.email}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Domicilio"
        name="domicilio"
        value={alumno.domicilio}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Teléfono"
        name="telefono"
        value={alumno.telefono}
        onChange={handleChange}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        {editar ? 'Guardar Cambios' : 'Guardar'}
      </Button>
    </Box>
  )
}