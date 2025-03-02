// src/routes/AppRoutes.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from '../components/ui/ScrollToTop';  // Import the component
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound';

import LoginScreen from '../pages/Auth/LoginScreen';
import RegisterScreen from '../pages/Auth/RegisterScreen';

import ProfileScreen from '../pages/Auth/ProfileScreen';
import PrivateRoute from '../components/auth/PrivateRoute';


import ProtectedLayout from "../components/auth/ProtectedLayout";


import VerifyScreen from "../pages/Auth/VerifyScreen";



const About = lazy(() => import('../pages/About'));

const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.5 },
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />  {/* Add ScrollToTop globally */}
        <Layout />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key="home" {...pageTransition}>
              <Home />
            </motion.div>
          </AnimatePresence>
        ),
      },
      {
        path: 'about',
        element: (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key="about" {...pageTransition}>
              <Suspense fallback={<LoadingSpinner message="Loading About Page..." />}>
                <About />
              </Suspense>
            </motion.div>
          </AnimatePresence>
        ),
      },


      {
        path: '',
        element: <PrivateRoute />,
        children: [
          {
            path: 'profile',
            
            element:
            <ProtectedLayout> 
              <ProfileScreen /> 
              </ProtectedLayout>,
          },
        ],
      },



    ],
  },
  {
    path: "login", element: <LoginScreen />

  },
  {
    path: "register", element: <RegisterScreen />
    
},

{
  path: "/verify/:token", element: <VerifyScreen />
  
},


  {
    path: '*',
    element: <NotFound />,
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
