import React from "react";

import styled from "styled-components";
import Animal from "./Animal";

const SectionAnimals = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  padding: 1rem;
  background: #000;
  height: 100vh;
`;

const Animals = () => {
  return (
    <SectionAnimals>
      {AnimalsList.map((ani) => (
        <Animal />
      ))}
    </SectionAnimals>
  );
};

export default Animals;
