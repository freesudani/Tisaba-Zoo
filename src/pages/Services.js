import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImageThree from "../images/pexels-vlada-karpovich-4452125.jpg";

const Services = () => {
  return (
    <>
      <Header />
      <Hero
        image={ImageThree}
        title="Live in the Wild"
        desc="Live like the wild animals"
      />
    </>
  );
};

export default Services;
