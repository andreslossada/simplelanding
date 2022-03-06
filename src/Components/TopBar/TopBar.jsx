import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useApp from '../../store/Context';
import { auth } from '../../firebase/firebase.utils';
import './topbar.styles.scss';

import { NavLink } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';

export default function ButtonAppBar() {
  const { currentUser } = useApp();
  console.log(currentUser);

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
          {!currentUser ? (
            <NavLink to='/login'>ACCEDER</NavLink>
          ) : (
            <div onClick={() => auth.signOut()} className='salir-btn'>
              CERRAR SESIÓN
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
