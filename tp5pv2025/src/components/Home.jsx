import { Box, Paper, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none', 
        p: 2,
      }}
    >
      <Paper elevation={6} sx={{ p: 5, borderRadius: 4, textAlign: 'center', maxWidth: 500 }}>
        <Typography variant="h3" component="h1" gutterBottom color="primary">
          Sistema de Gestión de Alumnos
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Bienvenido/a al sistema del Grupo 10 para Programación Visual 2025.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Gestiona alumnos, consulta detalles, edita información y mucho más desde un solo lugar.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/alumnos"
          sx={{ mr: 2 }}
        >
          Ver Alumnos
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          component={Link}
          to="/acerca"
        >
          Acerca de
        </Button>
      </Paper>
    </Box>
  )
}