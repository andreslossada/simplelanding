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
import CustomButton from '../custom-button/custom-button.component';

export default function ButtonAppBar() {
  const { currentUser } = useApp();

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
            <NavLink to='/login'>
              <CustomButton>Acceder</CustomButton>
            </NavLink>
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
