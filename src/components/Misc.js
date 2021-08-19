import React from "react";
import {
  FcDonate,
  FcBusinessman,
  FcCalendar,
  FcApproval,
} from "react-icons/fc";
import styled from "styled-components";
import { motion } from "framer-motion";

const MiscSection = styled.div`
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  justify-items: center;
  align-items: center;
  padding: 3rem;
`;

const MiscDiv = styled(motion.div)`
  text-align: center;
`;

const MiscParag = styled.h2`
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: #ffb347;
    font-size: 1.8rem;
  }
`;

const MiscPar = styled.h2`
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  margin-top: 3rem;
  font-size: 3.5rem;
`;

const Misc = () => {
  return (
    <>
      <MiscPar>Connecting People With Nature</MiscPar>
      <MiscSection>
        <MiscDiv
          style={{ gridColumn: 1 / 2 }}
          whileHover={{ scale: 1.1, textShadow: "0px 0px 4px rgb(0,0,0)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FcApproval style={{ fontSize: "100" }} />
          <MiscParag>Become A Member</MiscParag>
        </MiscDiv>
        <MiscDiv
          style={{ gridColumn: 2 / 3 }}
          whileHover={{ scale: 1.1, textShadow: "0px 0px 4px rgb(0,0,0)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FcBusinessman style={{ fontSize: "100" }} />
          <MiscParag>Career Opportunity</MiscParag>
        </MiscDiv>
        <MiscDiv
          style={{ gridColumn: 3 / 4 }}
          whileHover={{ scale: 1.1, textShadow: "0px 0px 4px rgb(0,0,0)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FcCalendar style={{ fontSize: "100" }} />
          <MiscParag>Events</MiscParag>
        </MiscDiv>
        <MiscDiv
          style={{ gridColumn: 4 / 5 }}
          whileHover={{ scale: 1.1, textShadow: "0px 0px 4px rgb(0,0,0)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FcDonate style={{ fontSize: "100" }} />
          <MiscParag>Donate To The Zoo</MiscParag>
        </MiscDiv>
      </MiscSection>
    </>
  );
};

export default Misc;
