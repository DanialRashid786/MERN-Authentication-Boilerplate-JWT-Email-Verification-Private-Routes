// Fade In From Left
export const fadeInOnScroll = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  export const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  
//   Zoom In (for cards or images)
  export const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  
//   Slide Up (for text or buttons)
export const slideUp = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };


//    Slide Down (for headers or banners)
export const slideDown = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  
//   Rotate (for decorative elements)
export const rotateIn = {
    hidden: { rotate: -90, opacity: 0 },
    visible: { rotate: 0, opacity: 1, transition: { duration: 1 } },
  };

  
//   Staggered Fade (for lists or cards)
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };
  
  export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  

  
// Bounce In (for call-to-action buttons)
export const bounceIn = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  
//    Flip In (for cards or images)
export const flipIn = {
    hidden: { rotateY: -180, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  
//   Scale In with Rotation (for icons or logos)
export const scaleRotate = {
    hidden: { scale: 0.5, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  


// Fade In Animation
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

// Slide In Animation (for example, from the left)
export const slideInLeft = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  transition: { duration: 0.7 }
};

// Bounce Animation (for buttons or interactive elements)
export const bounce = {
  initial: { y: 0 },
  animate: { y: -10 },
  transition: { yoyo: Infinity, duration: 0.3 }
};

// Scale In Animation (for images or cards)
export const scaleIn = {
  initial: { scale: 0.8 },
  animate: { scale: 1 },
  transition: { duration: 0.6 }
};

// Rotate Animation (for decorative elements)
export const rotate = {
  initial: { rotate: 0 },
  animate: { rotate: 360 },
  transition: { duration: 1 }
};
