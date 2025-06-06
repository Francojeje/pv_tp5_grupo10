import { AppBar, Toolbar, Typography, Button, Box, IconButton, Tooltip } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import HomeIcon from '@mui/icons-material/Home'
import PeopleIcon from '@mui/icons-material/People'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import InfoIcon from '@mui/icons-material/Info'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar({ darkMode, setDarkMode }) {
  const location = useLocation()

  return (
    <AppBar position="static" color="primary" elevation={3}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <SchoolIcon />
          <Typography
            variant="h6"
            sx={{
              color: '#fff',
              fontWeight: 700,
              letterSpacing: 1,
              userSelect: 'none'
            }}
          >
            Gestión de Alumnos
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            component={Link}
            to="/"
            color="inherit"
            startIcon={<HomeIcon />}
            sx={{
              fontWeight: location.pathname === '/' ? 700 : 500,
              borderBottom: location.pathname === '/' ? '2px solid #fff' : 'none',
              borderRadius: 0
            }}
          >
            Inicio
          </Button>
          <Button
            component={Link}
            to="/alumnos"
            color="inherit"
            startIcon={<PeopleIcon />}
            sx={{
              fontWeight: location.pathname.startsWith('/alumnos') && !location.pathname.endsWith('/nuevo') ? 700 : 500,
              borderBottom: location.pathname.startsWith('/alumnos') && !location.pathname.endsWith('/nuevo') ? '2px solid #fff' : 'none',
              borderRadius: 0
            }}
          >
            Alumnos
          </Button>
          <Button
            component={Link}
            to="/alumnos/nuevo"
            color="inherit"
            startIcon={<PersonAddIcon />}
            sx={{
              fontWeight: location.pathname.endsWith('/nuevo') ? 700 : 500,
              borderBottom: location.pathname.endsWith('/nuevo') ? '2px solid #fff' : 'none',
              borderRadius: 0
            }}
          >
            Agregar
          </Button>
          <Button
            component={Link}
            to="/acerca"
            color="inherit"
            startIcon={<InfoIcon />}
            sx={{
              fontWeight: location.pathname === '/acerca' ? 700 : 500,
              borderBottom: location.pathname === '/acerca' ? '2px solid #fff' : 'none',
              borderRadius: 0
            }}
          >
            Acerca
          </Button>

          {/* Botón de modo oscuro */}
          <Tooltip title={darkMode ? 'Modo claro' : 'Modo oscuro'}>
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
