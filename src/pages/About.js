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
      <Hero image={ImageTwo} title="Beautiful views" desc="Never seen before" />
    </motion.div>
  );
};

export default About;
