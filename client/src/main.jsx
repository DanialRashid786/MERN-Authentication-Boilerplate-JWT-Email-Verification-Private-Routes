// import { StrictMode } from 'react';
import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes'; // Import the routes component
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeContextProvider } from './theme/ThemeContext';
import './styles/global.css';

import { ToastContainer } from "react-toastify"
import store from "./store";
import { Provider } from "react-redux";



// Import Roboto font styles
import '@fontsource/roboto/300.css';  // Light
import '@fontsource/roboto/400.css';  // Regular
import '@fontsource/roboto/500.css';  // Medium
import '@fontsource/roboto/700.css';  // Bold

// Check if we are in a production environment
const isProduction = import.meta.env.MODE === 'production';

if (isProduction) {
  // In production, you might want to suppress some logs, enable performance optimizations, etc.
  console.log = () => {}; // Disable console.log in production
} else {
  // Development-specific behaviors (logging, debugging, etc.)
  console.log('Development Mode: Full logging enabled');
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
    <CssBaseline /> {/* Provides a consistent baseline for styling */}
    <ErrorBoundary FallbackComponent={() => <div>Error Occurred!</div>}>
      <HelmetProvider>
        <ThemeContextProvider>


        <ToastContainer 
        position="top-right"
        autoClose={3000} // Auto-close in 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

          <AppRoutes /> {/* This will handle routing */}


        </ThemeContextProvider>
      </HelmetProvider>
    </ErrorBoundary>
    </Provider>
  // </StrictMode>
);
