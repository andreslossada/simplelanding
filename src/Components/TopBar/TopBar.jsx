import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { NavLink } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <Sidebar />

          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
          ></Typography>

          <NavLink to='/login'>ACCEDER</NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
