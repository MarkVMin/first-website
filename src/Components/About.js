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

const About = () => {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="lightergrey">
        <div className="about-container" data-aos="fade-up" data-aos-duration="2500">
          <div className="about-header"></div>
          <h1 className="about-text-name-first" >
            MARK
          </h1>
          <h1 className="about-text-name-second" >
            MIN
          </h1>
          <h1 className="about-text-first">
            MARKINGS OF A
          </h1>
          <h1 className="about-text-second">
            MINIMALIST
          </h1>
          <div className="about-header-head"></div>
        </div>
      </div>
      <div className="darkergrey">
        <Parallax
          className="broken-leg-mark" y={[-20, 40]} 
        >
        <img data-aos="fade-down" src={require('../Pictures/CasualMark.jpg')} style={{width:"12vw"}}/>
        </Parallax>
        <Parallax
          className="who-title" y={[-40, 70]}
        >
          <span data-aos="fade-down">
          Who I am.
          </span>
        </Parallax>
        <Parallax
          className="who-text" y={[-40, 60]}
        >
          <span data-aos="fade-down">
          If you couldn't tell from the fancy little title card (hover over it), I'm Mark Min. <br/>
          I'm currently a Junior at the University of Washington studying Computer Science. <br/>
          I was born in Kazakhstan, but my family lineage traces back to Korea. <br/>
          Also, since I was born in the former Soviet Union, Russian was my first language. <br/>
          This is a more realistic picture of me when I broke my leg in late 2019 <br/>
          at my 2nd favorite burger joint given that the picture above is a little old and <br/>
          I don't spend my free time posing on bridges. This other picture is <br />
          Osbert Lee who helped me design parts of my website since I have no sense of what <br />
          looks good. He specifically requested the parallax scrolling images.
          </span>
        </Parallax>
        <Parallax
          className="osburrito" y={[-70, 60]}
        >
        <img data-aos="fade-down" src={require('../Pictures/osburrito.jpg')} style={{width:"13vw"}}/>
        </Parallax>
      </div>
      <div className="lightergrey">
        <Parallax
          className="why-title" y={[-50, 50]}
        >
          <span data-aos="fade-down">
            Why I made this.
          </span>
        </Parallax>
        <Parallax 
          className="why-text" y={[-50, 50]}
        >
          <span data-aos="fade-down">
            Do you ever see something and think "that seems like a fun thing to do"? <br/>
            That's pretty much what this website is built for. For the impulses to do<br/>
            interesting projects or cool ideas. I want to create a platform where I'm able<br/>
            to show all these projects and record the process that I went through. <br/>
            This will motivate me to get past that hesitant stage of thinking the<br/>
            project won't work out and just start working instead.<br/>
          </span>
        </Parallax>
        <Parallax
          className="plane-image" y={[-70, 70]}
        >
          <img data-aos="fade-down" src={require('../Pictures/Airplane.jpg')} style={{width:"13vw"}}/>
        </Parallax>
        <Parallax
          className="city-image" y={[-40, 40]}
        >
          <img data-aos="fade-down" src={require('../Pictures/tokyocity.jpg')} style={{width:"27vw"}}/>
        </Parallax>
        <Parallax
          className="city-image-2" y={[-50, 50]}
        >
          <img data-aos="fade-down" src={require('../Pictures/canal.jpg')} style={{width:"12vw"}}/>
        </Parallax>
      </div>
      <div className="darkergrey">
        <Parallax
          className="resume" x={[-50, 50]}
        >
          <span data-aos="fade-right">
            Here's my resume!
          </span>
        </Parallax>

        <p data-aos="fade-right" className="contact">
          You can also contact me at markvmin@gmail.com or by phone at (425)-445-0605.
        </p>
      </div>
    </motion.div>
  );
}

export default About;