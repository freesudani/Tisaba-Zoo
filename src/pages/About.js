import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImageTwo from "../images/pexels-robin-rodriguez-4652070.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

const About = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <Hero
        image={ImageTwo}
        title="What Makes Us Special"
        desc="Get to know more about us"
      />
    </motion.div>
  );
};

export default About;
