import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import Snowstorm from 'react-snowstorm';

const pageVariants = {
  initial: {
    opacity: 1,
    x: "-100vw",
    scale: 1
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 1,
    x: "100vw",
    scale: 1
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  delay: .15,
  duration: 0.5
};

const pageStyle = {
  position: "absolute"
};

const Creative = () => {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Snowstorm/>
      <div id = "creative-header"> 
      <div className = "blurred-box">
        <span id = "creative-text">Creative</span>
      </div>
      </div>
    </motion.div>
  );
}

export default Creative;