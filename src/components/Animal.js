import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AnimalBox = styled(motion.div)`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  background: #fff;
`;

const AnimalImage = styled.img`
  width: 100%;
  height: 200px;
`;

const AnimalTitle = styled.h2`
  color: #000;
  text-align: center;
  text-transform: uppercase;
  padding: 0.5rem;
`;

const AnimalSubtitle = styled.p`
  color: #000;
  text-align: justify;
  padding: 0.5rem;
`;

const Animal = ({ id, image, title, subtitle }) => {
  return (
    <AnimalBox
      key={id}
      whileHover={{ height: 375, originX: 0, originY: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 150 }}
    >
      <AnimalImage src={image} alt={title} />
      <AnimalTitle>{title}</AnimalTitle>
      <AnimalSubtitle>{subtitle}</AnimalSubtitle>
    </AnimalBox>
  );
};

export default Animal;
