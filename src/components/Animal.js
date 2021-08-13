import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AnimalsList } from "../data/AnimalsData";

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

const Animal = () => {
  const [selected, setSelected] = useState(true);

  return (
    <AnimalBox
      key={animal.id}
      onMouseEnter={(id) => {
        if (id == animal.id) return setSelected(true);
      }}
      onMouseLeave={(id) => {
        if (id == animal.id) return setSelected(false);
      }}
    >
      <AnimalImage src={animal.image} alt={animal.title} />
      {selected && (
        <>
          <AnimalTitle>{animal.title}</AnimalTitle>
          <AnimalSubtitle>{animal.subtitle}</AnimalSubtitle>
        </>
      )}
    </AnimalBox>
  );
};

export default Animal;
