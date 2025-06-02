import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardContent, Typography, Button } from '@mui/material'

export default function AlumnoDetalle({ alumnos }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const alumno = alumnos.find(a => a.lu === id)

  if (!alumno) {
    return <Typography variant="h6">Alumno no encontrado</Typography>
  }

  return (
    <Card sx={{ maxWidth: 400, margin: '2rem auto' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {alumno.nombre} {alumno.apellido}
        </Typography>
        <Typography>LU: {alumno.lu}</Typography>
        <Typography>Curso: {alumno.curso}</Typography>
        <Typography>Email: {alumno.email}</Typography>
        <Typography>Domicilio: {alumno.domicilio}</Typography>
        <Typography>Teléfono: {alumno.telefono}</Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => navigate(`/alumnos/${alumno.lu}/editar`)}
        >
          Editar
        </Button>
      </CardContent>
    </Card>
  )
}