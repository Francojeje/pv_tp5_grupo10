import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, TextField, Button, Paper, Fade } from '@mui/material'

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
    if (!alumno.lu) {
      alert('El campo LU es obligatorio')
      return
    }
    onGuardar(alumno)
    navigate('/alumnos')
  }

  return (
    <Fade in timeout={500}>
      <Box
        component={Paper}
        elevation={6}
        sx={{
          maxWidth: 420,
          width: '100%',
          margin: '3rem auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          p: 4,
          backgroundColor: '#f7f8fa',
          color: '#222',
          borderRadius: 3,
          boxShadow: '0 4px 24px 0 rgba(60, 72, 88, 0.12)',
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: '#1a237e',
            fontWeight: 700,
            mb: 2,
            letterSpacing: 1,
            textAlign: 'center'
          }}
        >
          {editar ? 'Editar Alumno' : 'Agregar Alumno'}
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="LU"
            name="lu"
            value={alumno.lu}
            onChange={handleChange}
            required
            disabled={editar}
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#1a237e' } }}
          />
          <TextField
            label="Nombre"
            name="nombre"
            value={alumno.nombre}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Apellido"
            name="apellido"
            value={alumno.apellido}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Curso"
            name="curso"
            value={alumno.curso}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={alumno.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            type="email"
          />
          <TextField
            label="Domicilio"
            name="domicilio"
            value={alumno.domicilio}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Teléfono"
            name="telefono"
            value={alumno.telefono}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            type="tel"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              fontWeight: 600,
              fontSize: '1.1rem',
              letterSpacing: 1
            }}
          >
            {editar ? 'Guardar Cambios' : 'Guardar'}
          </Button>
        </form>
      </Box>
    </Fade>
  )
}