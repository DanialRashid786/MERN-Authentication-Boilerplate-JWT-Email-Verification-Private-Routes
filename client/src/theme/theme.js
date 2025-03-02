import { createTheme } from '@mui/material/styles';

// Base theme options for consistent styling
const baseThemeOptions = {
  // typography: {
  //   fontFamily: `'Inter', 'Roboto', sans-serif`,
  //   h1: { fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.2 },
  //   h2: { fontSize: '2rem', fontWeight: 600 },
  //   h3: { fontSize: '1.75rem', fontWeight: 500 },
  //   body1: { fontSize: '1rem', fontWeight: 400 },
  //   body2: { fontSize: '0.875rem', fontWeight: 400 },
  //   button: { fontWeight: 600, textTransform: 'none' },
  // },
  // shape: {
  //   borderRadius: 8, // Smooth but subtle rounded corners
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Keep text case as entered
          borderRadius: 4, // Slight rounding for professionalism
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)', // Soft shadow for depth
          padding: '10px 20px', // Sufficient padding for comfortable click area
          '&:hover': {
            backgroundColor: '#1976d2', // Professional blue hover color
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded corners for cards
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for cards
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)', // Hover shadow effect for interactivity
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 6, // Rounded inputs for a softer feel
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#bbb', // Light border color for inputs
            },
            '&:hover fieldset': {
              borderColor: '#1976d2', // Blue border on focus for a subtle pop
            },
          },
        },
      },
    },
  },
};

// Light theme configuration (for a clean, bright interface)
export const lightTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Professional, trust-inducing blue
    },
    secondary: {
      main: '#004d40', // Dark green accent for contrast
    },
    background: {
      default: '#fafafa', // Light background for a calm environment
      paper: '#ffffff', // White background for paper elements
    },
    text: {
      primary: '#212121', // Dark text for readability
      secondary: '#757575', // Light gray for secondary text
    },
  },
});

// Dark theme configuration (for a more elegant, darker mode)
export const darkTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d3', // Trustworthy blue for primary
    },
    secondary: {
      main: '#004d40', // Dark green for secondary elements
    },
    background: {
      default: '#121212', // Dark background for modern look
      paper: '#1e1e1e', // Slightly lighter paper for contrast
    },
    text: {
      primary: '#ffffff', // White text for readability on dark background
      secondary: '#b0b0b0', // Soft gray for secondary text
    },
  },
});
