import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImageOne from "../images/pexels-tuesday-temptation-1551437.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <Hero
        image={ImageOne}
        title="Exprience Nature"
        desc="Once in a lifetime"
      />
    </>
  );
};

export default Home;
