import React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import './NavbarStyles.css';
import Drawer from './Drawer';

const  Navbar = (props) => {
    const drawerWidth = 240;
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
        props.handleNavbarChange('true',drawerWidth);
      };
    const handleDrawerClose = () => {
        setOpen(false);
        props.handleNavbarChange('false',drawerWidth)
    };
    useEffect(() => {
        props.handleNavbarChange('true',drawerWidth)
    },[])
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className='navbarMain'>
        <Toolbar>
          <IconButton size="large" edge="start" onClick={handleDrawerOpen} color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: 'flex' } }}>
            <IconButton size="large" color="inherit" >
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    <Drawer open={open} drawerWidth={drawerWidth} handleDrawerClose={handleDrawerClose}/>
    </>
  )
}
export default Navbar;
