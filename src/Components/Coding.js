import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';

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

const Coding = () => {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="gradient-bg">
        <div data-aos="fade-up" className="white-box">
          <h1 id="coding-title">
            Coding
          </h1>
        </div>
      </div>
      <div className="black-bg">
        <h2 id = "website-title">This Website</h2>

        <p id = "website-pg">Fifty Nifty United States</p>
      </div>
    </motion.div>
  );
}

export default Coding;