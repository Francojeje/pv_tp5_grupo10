import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardContent, Typography, Button, Stack } from '@mui/material'
import BadgeIcon from '@mui/icons-material/Badge'
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import EmailIcon from '@mui/icons-material/Email'
import HomeIcon from '@mui/icons-material/Home'
import PhoneIcon from '@mui/icons-material/Phone'

export default function AlumnoDetalle({ alumnos }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const alumno = alumnos.find(a => a.lu === id)

  if (!alumno) {
    return <Typography variant="h6">Alumno no encontrado</Typography>
  }

  return (
    <Card sx={{ maxWidth: 400, margin: '2rem auto', borderRadius: 3, boxShadow: 4 }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <PersonIcon color="primary" />
          <Typography variant="h5" fontWeight={700}>
            {alumno.nombre} {alumno.apellido}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <BadgeIcon color="action" />
          <Typography variant="body1">LU: {alumno.lu}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <SchoolIcon color="secondary" />
          <Typography variant="body1">Curso: {alumno.curso}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <EmailIcon color="action" />
          <Typography variant="body1">Email: {alumno.email}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <HomeIcon color="action" />
          <Typography variant="body1">Domicilio: {alumno.domicilio}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <PhoneIcon color="action" />
          <Typography variant="body1">Teléfono: {alumno.telefono}</Typography>
        </Stack>
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