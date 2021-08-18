import React from "react";
import {
  FcDonate,
  FcBusinessman,
  FcCalendar,
  FcApproval,
} from "react-icons/fc";
import styled from "styled-components";

const MiscSection = styled.div`
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 70% 1fr;
  justify-items: center;
  align-items: center;
  padding: 3rem;
`;

const MiscDiv = styled.div`
  text-align: center;
`;

const MiscParag = styled.h2`
  text-align: center;
`;

const MiscPar = styled.div`
  text-align: center;

  h2 {
    width: 100%;
  }
`;

const Misc = () => {
  return (
    <MiscSection>
      <MiscDiv style={{ gridColumn: 1 / 2 }}>
        <FcApproval />
        <MiscParag>Become A Member</MiscParag>
      </MiscDiv>
      <MiscDiv style={{ gridColumn: 2 / 3 }}>
        <FcBusinessman />
        <MiscParag>Career Opportunity</MiscParag>
      </MiscDiv>
      <MiscDiv style={{ gridColumn: 3 / 4 }}>
        <FcCalendar />
        <MiscParag>Events</MiscParag>
      </MiscDiv>
      <MiscDiv style={{ gridColumn: 4 / 5 }}>
        <FcDonate />
        <MiscParag>Donate To The Zoo</MiscParag>
      </MiscDiv>
      <MiscPar style={{ gridRow: 2 / 3, gridColumn: 2 / 4 }}>
        <h2>Connecting People With Nature</h2>
      </MiscPar>
    </MiscSection>
  );
};

export default Misc;
