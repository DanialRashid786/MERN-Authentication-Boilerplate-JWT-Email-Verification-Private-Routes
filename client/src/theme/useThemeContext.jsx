import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

// Custom hook to use the ThemeContext
export const useThemeContext = () => {
  const context = useContext(ThemeContext); // Corrected to match the imported context
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};
