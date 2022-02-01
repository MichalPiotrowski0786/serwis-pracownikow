import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BadgeIcon from '@mui/icons-material/Badge';

function Header() {
  return (
    <Box sx={{ mb: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <BadgeIcon fontSize="large" />
          <Typography variant="h5" component="div" sx={{ ml: 3 }}>
            Employees Managing App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;