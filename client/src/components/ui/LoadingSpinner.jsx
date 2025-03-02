// src/components/LoadingSpinner.js
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types'; // Import PropTypes

// LoadingSpinner component with improvements
const LoadingSpinner = ({ message = 'Loading...', size = 60 }) => {
  return (
    <Box
      sx={{
        position: 'fixed', // Position it on top of everything else
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Transparent background to dim the screen
        zIndex: 9999, // Ensure it's on top of other elements
        backdropFilter: 'blur(5px)', // Optional: adds a subtle blur effect to the background
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <CircularProgress size={size} color="primary" />
        <Typography variant="h6" sx={{ marginTop: 2, color: 'white', fontWeight: 'bold' }}>
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

// Define prop types for validation
LoadingSpinner.propTypes = {
  message: PropTypes.string,
  size: PropTypes.number,
};

export default LoadingSpinner;
