import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BusinessIcon from '@mui/icons-material/Business';
import './sidebar.styles.scss';

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Sidebar() {
  const [state, setState] = React.useState({});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <NavLink to='/'>
          <ListItem button key='Home'>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Pagina Principal' />
          </ListItem>
        </NavLink>

        <Divider />

        <NavLink to='/pricing'>
          <ListItem button key='Afiliación'>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary='Afiliación' />
          </ListItem>
        </NavLink>

        <Divider />

        <NavLink to='/form'>
          <ListItem button key='formulario'>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='Formulario' />
          </ListItem>
        </NavLink>
        <Divider />
        <ListItem button key='Ambulancia'>
          <ListItemIcon>
            <AirportShuttleIcon />
          </ListItemIcon>
          <ListItemText primary='Ambulancia' />
        </ListItem>
        <ListItem button key='FUNERARIA'>
          <ListItemIcon>
            <LocalFloristIcon />
          </ListItemIcon>
          <ListItemText primary='Funeraria' />
        </ListItem>
        <ListItem button key='ASISTENCIA FINANCIERA EN DUELO'>
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary='Asistencia financiera en duelo' />
        </ListItem>
        <ListItem button key=' CITAS ODONTOLOGICAS'>
          <ListItemIcon>
            <HealthAndSafetyIcon />
          </ListItemIcon>
          <ListItemText primary=' Citas Odontologicas' />
        </ListItem>
      </List>
      <Divider />
      <List>
        {['Nosotros'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <NavLink to='/login'>
        <ListItem button key='login'>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary='Acceder' />
        </ListItem>
      </NavLink>
      <Divider />
      <NavLink to='/signup'>
        <ListItem button key='login'>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary='Crear Cuenta' />
        </ListItem>
      </NavLink>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {' '}
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
