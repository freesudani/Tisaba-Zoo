import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SimpleForm = styled(motion.form)`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-content: right;
  justify-content: center;
  border-radius: 5px;
  padding: 1rem;
  width: 30rem;
`;

const FormControl = styled.div`
  margin-bottom: 1rem;

  input {
    display: block;
    font: inherit;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
    &:focus {
      outline: none;
      border-color: #240370;
      background-color: #e0d4fd;
    }
  }
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  select {
    font: inherit;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }
`;

const FormAction = styled.div`
  text-align: left;

  button {
    font: inherit;
    background-color: #240370;
    color: white;
    border: 1px solid #240370;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    /*  margin-left: 1rem; */

    &:hover,
    &:active {
      background-color: #33059e;
      border-color: #33059e;
    }
  }
`;

const FormVariant = {
  animationOne: {
    x: "100vw",

    transition: { type: "spring", stiffness: "120" },
  },
  animationTwo: {
    x: "9vw",

    transition: { type: "spring", stiffness: "120" },
  },
};

const Form = (props) => {
  return (
    <SimpleForm variants={FormVariant} animate={props.onAnimation}>
      <FormControl>
        <label htmlFor="name">You Name</label>
        <input type="text" id="name" />
      </FormControl>
      <FormControl>
        <label htmlFor="email">You E-mail</label>
        <input type="text" id="email" />
      </FormControl>

      <FormControl style={{ display: "inline-block", width: "10rem" }}>
        <label for="time">Choose Opening Time</label>
        <select id="time">
          <option value="morning">08:00 - 10:00</option>
          <option value="afternoon">11:00 - 13:00</option>
          <option value="evening">15:00 - 17:00</option>
        </select>
      </FormControl>
      <FormControl style={{ display: "inline-block", width: "10rem" }}>
        <label for="pickadate">Pick A Day:</label>
        <input type="date" id="pickadate" name="Pick a Day"></input>
      </FormControl>

      <FormControl style={{ display: "inline-block", width: "7rem" }}>
        <label for="tickets">Number of Tickets</label>
        <input
          type="number"
          id="tickets"
          name="points"
          step="1"
          min="1"
        ></input>
      </FormControl>
      <FormAction>
        <button>Submit</button>
      </FormAction>
      <p style={{ color: "#000", marginTop: "1rem" }}>
        *After submitting an email with confirmation number and payment
        procedures will be sent to the mentioned email
      </p>
    </SimpleForm>
  );
};

export default Form;
