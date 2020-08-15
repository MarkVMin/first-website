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
            Markings of a Minimalist, formerly Musings of a Minimalist, was renamed due to the name already being taken which is sad because I think that name has a better ring to it, but this new name not only incorporates both parts of my name but has a meaning with a different and more powerful meaning.
            <br />
            <br />
            This is a small personal project that I hope to turn into a place for me to store all my ideas and creations into an easily navigatable and easy to look at format. Like most people, I have so many things that I want to try and I feel that by having a place
            to put these things, I'll be not only more inclined to do it, but also more inclined the stick with an idea.
          </p>
        </div>
      </div>
      <div id="Minimalism">
        <div id="minimalism-text">
          <h2>
            <span className="title" data-aos="fade-down">Namesake</span>
          </h2>
          <p className="pg" data-aos="fade-up">
            Filler filler filler filler filler
            Filler filler filler filler filler
            Filler filler filler filler filler
            Filler filler filler filler filler
            Filler filler filler filler filler
            Filler filler filler filler filler
            Filler filler filler filler filler
            Filler filler filler filler filler
            Filler filler filler filler filler
            Filler filler filler filler filler
            Filler filler filler filler filler
            Filler filler filler filler filler
            Filler filler filler filler filler
          </p>
        </div>
      </div>
      <div id="most-recent">
        <div id="most-recent-text">
          <h2>
            <span className="title" data-aos="fade-down">Most Recent Project</span>
          </h2>
          <p className="pg" data-aos="fade-up">
            Random stuff
          </p>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Home;