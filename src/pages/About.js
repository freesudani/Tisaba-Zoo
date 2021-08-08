import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImageTwo from "../images/pexels-robin-rodriguez-4652070.jpg";

const About = () => {
  return (
    <>
      <Header />
      <Hero image={ImageTwo} title="Beautiful views" desc="Never seen before" />
    </>
  );
};

export default About;
