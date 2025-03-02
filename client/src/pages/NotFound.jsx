// src/pages/NotFound.js
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';




const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeInOut' },
};

const bounceEffect = {
  initial: { scale: 0.8 },
  animate: { scale: 1 },
  transition: {
    duration: 0.8,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'reverse',
  },
};

const NotFound = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      
<Helmet>
        <title>404 Page</title>
        <meta name="description" content="404 Error Page Not Found" />
</Helmet>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <Box
          sx={{
            textAlign: 'center',
            backgroundColor: 'background.paper',
            padding: { xs: 3, sm: 4, md: 5 },
            borderRadius: 2,
            boxShadow: 3,
            maxWidth: { xs: '100%', sm: '80%', md: '600px' },
          }}
        >
          <motion.div {...bounceEffect}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                color: 'primary.main',
                fontSize: { xs: '4rem', sm: '5rem', md: '6rem' },
              }}
            >
              404
            </Typography>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                marginBottom: { xs: 1, md: 2 },
                fontSize: { xs: '1.8rem', sm: '2.2rem' },
              }}
            >
              Page Not Found
            </Typography>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                marginBottom: { xs: 2, md: 4 },
                fontSize: { xs: '0.9rem', sm: '1rem' },
              }}
            >
              The page you are looking for does not exist or has been moved.
            </Typography>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
            <Button
              component={Link}
              to="/"
              variant="contained"
              size="large"
              sx={{
                paddingX: { xs: 3, sm: 4 },
                textTransform: 'none',
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 600,
              }}
            >
              Go to Homepage
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default NotFound;
