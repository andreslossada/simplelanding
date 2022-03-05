import * as React from 'react';
import './navigation.styles.scss';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%', height: '' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className='nav-box'
      >
        <BottomNavigationAction
          className='nav-box--icon'
          label='Recents'
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          className='nav-box--icon'
          label='Favorites'
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          className='nav-box--icon'
          label='Nearby'
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
