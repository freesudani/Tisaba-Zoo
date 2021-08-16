import { motion } from "framer-motion";
import React from "react";
import { animationOne, transition } from "../animations";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImageThree from "../images/pexels-vlada-karpovich-4452125.jpg";

const Services = () => {
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
        image={ImageThree}
        title="We Have Much To Offer"
        desc="Live like the wild animals"
      />
    </motion.div>
  );
};

export default Services;
