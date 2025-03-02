// src/components/Layout.js
import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../layout/navbar/Navbar';
import Footer from '../layout/footer/Footer';
import ScrollToTopButton from '../ui/ScrollToTopButton';

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      {/* Global Reset */}
      <CssBaseline />

      {/* Scroll to Top Anchor */}
      <div id="top" aria-hidden="true"></div>

      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
        }}
      >
        <Outlet />
      </Box>

      {/* Footer Section */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </Box>
  );
};

export default Layout;
