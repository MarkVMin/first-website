import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';


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
        <h2 id = "website-title" data-aos="fade-down">This Website</h2>

        <p id = "website-pg" data-aos="fade-down">
          This project was rough. I came into this project with practically no useful skills. I knew very little HTML, some JavaScript, no React, no talent in design. 
          I came out of this project with a lot of angst but a lot of new and interesting knowledge. Click the picture for a full article.
        </p>
        <Parallax
          className="website-pic" y={[-20, 40]} 
        >
        <img data-aos="fade-down" src={require('../Pictures/Website.png')} style={{width:"30vw"}}/>
        </Parallax>
      </div>
    </motion.div>
  );
}

export default Coding;