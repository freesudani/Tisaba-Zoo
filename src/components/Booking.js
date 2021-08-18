import React from "react";
import styled from "styled-components";
import Form from "./Form";
import { useCycle } from "framer-motion";

const BookingSection = styled.section`
  height: 100vh;
  padding: 0.2rem;
  padding: 1rem;
  background: #ffb347;
  display: flex;
  justify-content: space-between;
`;

const BookingHeader = styled.h1`
  font-size: clamp(2rem, 8vw, 5rem);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: #fff;
  margin-top: 60px;
`;

const BookingParagh = styled.h3`
  color: #fff;
  margin-top: 30px;
  font-size: clamp(1rem, 6vw, 3rem);
`;

const BookingButton = styled.button`
  font-size: clamp(0.8rem, 4vw, 1.2rem);
  padding: 0.8rem 2rem;
  color: #000;
  background: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  margin-top: 60px;
  width: 15rem;
`;

const Booking = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <BookingSection>
      <div>
        <BookingHeader>We're Open!</BookingHeader>
        <BookingParagh>All Services Are Accessible</BookingParagh>
        <BookingButton onClick={() => cycleAnimation()}>
          Book Here!!
        </BookingButton>
        <p style={{ color: "#fff", marginTop: "1rem" }}>
          *Only For non-members
        </p>
      </div>
      <Form onAnimation={animation} />)
    </BookingSection>
  );
};

export default Booking;
