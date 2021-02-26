import React, { forwardRef } from "react";
import styled from "styled-components";
import { useColourDispatch } from "../colourContext";

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  input {
    width: 100%;
    padding: 10px 15px;
    border: var(--border-lightGrey);
    font-size: 18px;
  }
  button {
    position: absolute;
    right: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 16px;
    transition: all linear 0.2s;
    &:hover {
      background-color: var(--color-blue);
      color: white;
    }
  }
`;

const ColourForm = (props, ref) => {
  const dispatch = useColourDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const [input] = event.target.form;
    const colours = input.value.split(" ").join("").split(",");
    const coloursArray = colours.map((colour) => {
      return colour.startsWith("#") ? colour : `#${colour}`;
    });
    dispatch({ type: "setColours", payload: coloursArray });
    input.value = "";
  };

  return (
    <Form onSubmit={onSubmit}>
      <input
        ref={ref}
        type="text"
        placeholder="add colour codes - #000000, #ffffff"
      />
      <button onClick={onSubmit}>done</button>
    </Form>
  );
};

export default forwardRef(ColourForm);
