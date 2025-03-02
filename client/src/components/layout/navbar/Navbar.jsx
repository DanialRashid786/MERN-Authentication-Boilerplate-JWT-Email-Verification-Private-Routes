import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  Divider,
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeContext } from '../../../theme/useThemeContext';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../slices/authSlice';
import { useLogoutMutation } from '../../../slices/usersApiSlice'; // ✅ Fixed incorrect import

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap(); // ✅ Properly handle API response
      dispatch(logout());
      toast.success("Logged out successfully");
      navigate('/'); // ✅ Moved after dispatch to prevent race condition
    } catch (err) {
      console.error('Logout failed:', err);
      toast.error("Logout failed! Please try again.");
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    
    ...(userInfo ? [{ label: 'Profile', path: '/profile' }] : [])
  ];

  const drawer = (
    <Box sx={{ width: 250, bgcolor: 'background.paper', color: 'text.primary' }}>
      <List>
        {navLinks.map(({ label, path }) => (
          <ListItem
            key={label}
            component={NavLink}
            to={path}
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              px: 2,
              py: 1,
              '&.active': {
                fontWeight: 'bold',
                bgcolor: 'secondary.light',
                borderRadius: '8px',
              },
            }}
          >
            <Typography>{label}</Typography>
          </ListItem>
        ))}
        {userInfo ? (
          <>
            <ListItem>
              <Typography sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Welcome, {userInfo.name || 'User'} {/* ✅ Prevents undefined error */}
              </Typography>
            </ListItem>
            <ListItem>
              <Button
                onClick={logoutHandler}
                fullWidth
                sx={{
                  fontWeight: 'bold',
                  color: 'error.main',
                  textTransform: 'none',
                  '&:hover': { bgcolor: 'error.light' },
                }}
              >
                Logout
              </Button>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem component={NavLink} to="/login">
              <Typography>Sign In</Typography>
            </ListItem>
            <ListItem component={NavLink} to="/register">
              <Typography>Sign Up</Typography>
            </ListItem>
          </>
        )}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <IconButton color="inherit" onClick={toggleTheme}>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main', boxShadow: 3 }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 700,
            fontSize: '1.5rem',
          }}
        >
          MERN Authentication
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
          {navLinks.map(({ label, path }) => (
            <Button
              key={label}
              color="inherit"
              component={NavLink}
              to={path}
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? '#fff' : 'inherit',
                backgroundColor: isActive ? 'secondary.main' : 'transparent',
                borderRadius: '8px',
                padding: '8px 16px',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              })}
            >
              {label}
            </Button>
          ))}
          {userInfo ? (
            <>
              <Typography sx={{ fontWeight: 'bold', color: 'secondary', mr: 2 }}>
                {userInfo.name || 'User'}
              </Typography>
              <Button
                color="inherit"
                onClick={logoutHandler}
                sx={{
                  fontWeight: 'bold',
                  bgcolor: 'error.main',
                  color: '#fff',
                  '&:hover': { bgcolor: 'error.dark' },
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={NavLink} to="/login">
                Sign In
              </Button>
              <Button color="inherit" component={NavLink} to="/register">
                Sign Up
              </Button>
            </>
          )}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>

        {/* Dark Mode Toggle */}
        <IconButton color="inherit" onClick={toggleTheme} sx={{ display: { xs: 'none', sm: 'block' } }}>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
