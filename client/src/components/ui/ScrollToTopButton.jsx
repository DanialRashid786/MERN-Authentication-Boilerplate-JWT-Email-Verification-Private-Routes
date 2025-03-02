import { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // React Scroll component for smooth scrolling
import { Fab } from '@mui/material'; // Optional Material UI Button
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'; // Material UI icon

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Handle scroll visibility and smooth appearance
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Show button after 300px of scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <Link
          to="top" // This should match the ID of the element at the top of the page
          smooth={true} // Smooth scroll
          duration={500} // Duration for the scroll
          offset={-50} // Optional offset to adjust scroll position
        >
          <Fab
            color="primary"
            size="medium"
            sx={{
              position: 'fixed',
              bottom: 30,
              right: 30,
              transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
              opacity: showButton ? 1 : 0,
              transform: showButton ? 'translateY(0)' : 'translateY(50px)', // Smooth fade-in and slide-up effect
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Link>
      )}
    </>
  );
};

export default ScrollToTopButton;
