import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3, mt: 5 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} MERN Auth. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Link href="#" color="inherit" sx={{ mx: 2 }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 2 }}>
            Terms of Service
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
