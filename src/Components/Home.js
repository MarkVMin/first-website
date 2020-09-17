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

const Home = () => {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
    <div>
      <div id="banner">
        <div id="banner-image" />
        <div id="grey-box"></div>
        <div id="header">
          <h1>
            <span id="Markings">Markings</span><br />
            <span id="of-a">of a</span><br />
            <span id="Minimalist">Minimalist</span>
          </h1>
          <h6>
            <span id="subtext">A Mark Min creative endeavor</span>
          </h6>
        </div>
      </div>
      <div id="preamble">
        <div id="photo-flower" data-aos="fade-right" />
        <div id="preamble-text">
          <div id="preamble-title" data-aos="fade-left">
            <h2>
              <span className="title">Preamble</span>
            </h2>
          </div>
          <p className="pg" data-aos="fade-left">
            This is a small personal project that I hope to turn into a place for me to store all my ideas and creations into an easily navigatable and easy to look at format. Like most people, I have so many things that I want to try and I feel that by having a place
            to put these things, I'll be not only more inclined to do it, but also more inclined the stick with an idea. 
            <br/><br/>
            One of my biggest worries in life is that I don't have enough exposure to the more creative side of life. I've always been pushed into taking
            a STEM based curriculum and although I do enjoy these kinds of classes, I want to dip my toes into unexplored waters and make sure I'm not missing out.
          </p>
        </div>
      </div>
      <div id="Minimalism">
        <div id="minimalism-text">
          <h2>
            <span className="title" data-aos="fade-down">Namesake</span>
          </h2>
          <p className="pg" data-aos="fade-up">
            Markings of a Minimalist was originally supposed to be called Musings of a Minimalist but I decided to change it even though it hurts. I do believe that Musings rolls off the tongue better but I truly think that Markings applies more to what I am trying to achieve.
            We all strive to be remembered in this world in one form or another and through the process of turning an idea into something people can interact with, I can leave my "Markings" on the world. 
            <br/> <br/>
            The "Minimalist" can be misleading. I wouldn't call myself the dictionary definition of a Minimalist. My definition is a rather twisted interpretation. As long as I have a bed to sleep in, food to eat, and a computer
            to use, I am happy. I'm almost entirely out of my comfort zone with this project and the projects to come. I want to experience what life has to offer to make sure I'm truly content with what I currently have.
            It's possible I may change after these experiences and that's ok, but for now the name fits.
          </p>
        </div>
      </div>
      <div id="most-recent">
        <div id="most-recent-text">
          <h2>
            <span className="title" data-aos="fade-down">Most Recent Project</span>
          </h2>
          <p className="pg" data-aos="fade-up">
            This website! Click the image to see the full article!
          </p>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Home;