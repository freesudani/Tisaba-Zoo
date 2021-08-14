import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AnimalBox = styled(motion.div)`
  width: 100%;
  height: 400px;
  border-radius: 5px;
  background: #fff;
`;

const AnimalImage = styled.img`
  width: 100%;
  height: 200px;
`;

const AnimalTitle = styled.h2`
  color: #000;
`;

const AnimalSubtitle = styled.p`
  color: #000;
`;

const Animal = ({ id, image, title, subtitle }) => {
  const [selected, setSelected] = useState(false);
  const adjustableWidth = selected ? 400 : 200;

  return (
    <AnimalBox
      key={id}
      onMouseEnter={() => {
        setSelected(true);
      }}
      onMouseLeave={() => {
        setSelected(false);
      }}
      style={{ height: adjustableWidth }}
    >
      <AnimalImage src={image} alt={title} />
      {selected && (
        <>
          <AnimalTitle>{title}</AnimalTitle>
          <AnimalSubtitle>{subtitle}</AnimalSubtitle>
        </>
      )}
    </AnimalBox>
  );
};

export default Animal;
