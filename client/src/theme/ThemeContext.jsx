import { createContext, useMemo, useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { lightTheme, darkTheme } from './theme';

const ThemeContext = createContext();

// ThemeContextProvider component
export const ThemeContextProvider = ({ children }) => {
  // Load the theme mode from localStorage or default to light
  const savedMode = localStorage.getItem('themeMode');
  const [isDarkMode, setIsDarkMode] = useState(savedMode === 'dark');

  // Memoize the theme to optimize performance and avoid unnecessary re-renders
  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  // Function to toggle the theme mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save the new theme mode to localStorage
      localStorage.setItem('themeMode', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // Effect to persist the theme mode in localStorage on initial load
  useEffect(() => {
    // Ensure the initial theme is set correctly based on localStorage
    if (savedMode) {
      setIsDarkMode(savedMode === 'dark');
    }
  }, [savedMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Resets styles for consistent appearance */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// PropTypes validation for children
ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is passed and of a valid type
};

export { ThemeContext };
