import { Link } from 'react-router-dom'
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, Box, Stack, IconButton, Tooltip
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import BadgeIcon from '@mui/icons-material/Badge'
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import EmailIcon from '@mui/icons-material/Email'
import HomeIcon from '@mui/icons-material/Home'
import PhoneIcon from '@mui/icons-material/Phone'
import SettingsIcon from '@mui/icons-material/Settings'

export default function ListaAlumnos({ alumnos, onEliminar }) {
  return (
    <Box sx={{ mt: 4, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" sx={{ mb: 2, color: '#55f', fontWeight: 700 }}>
        Lista de Alumnos
      </Typography>
      <TableContainer
        component={Paper}
        elevation={6}
        sx={{
          width: '90vw',
          maxWidth: 1100,
          minWidth: 1000,
          overflowX: 'auto',
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#e3eafc' }}>
              <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>
                <BadgeIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                LU
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>
                <PersonIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Nombre
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>
                <PersonIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Apellido
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>
                <SchoolIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Curso
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>
                <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Email
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>
                <HomeIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Domicilio
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>
                <PhoneIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Teléfono
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                <SettingsIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alumnos.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No hay alumnos para mostrar.
                </TableCell>
              </TableRow>
            ) : (
              alumnos.map((a) => (
                <TableRow key={a.lu} hover>
                  <TableCell sx={{ fontSize: 15 }}>{a.lu}</TableCell>
                  <TableCell sx={{ fontSize: 15 }}>{a.nombre}</TableCell>
                  <TableCell sx={{ fontSize: 15 }}>{a.apellido}</TableCell>
                  <TableCell sx={{ fontSize: 15 }}>{a.curso}</TableCell>
                  <TableCell sx={{ fontSize: 15 }}>{a.email}</TableCell>
                  <TableCell sx={{ fontSize: 15 }}>{a.domicilio}</TableCell>
                  <TableCell sx={{ fontSize: 15 }}>{a.telefono}</TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <Tooltip title="Ver Detalle">
                        <IconButton
                          component={Link}
                          to={`/alumnos/${a.lu}`}
                          color="primary"
                          size="small"
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Editar">
                        <IconButton
                          component={Link}
                          to={`/alumnos/${a.lu}/editar`}
                          color="secondary"
                          size="small"
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Eliminar">
                        <IconButton
                          color="error"
                          size="small"
                          onClick={() => onEliminar(a.lu)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}