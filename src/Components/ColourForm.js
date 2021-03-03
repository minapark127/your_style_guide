import React, { forwardRef } from "react";
import styled from "styled-components";
import { useColourDispatch } from "../colourContext";
import { ButtonWithBorder } from "../GlobalStyles";

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
`;

const ButtonWithBorderExtended = styled(ButtonWithBorder)`
  position: absolute;
  right: 10px;
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
      <ButtonWithBorderExtended onClick={onSubmit}>
        done
      </ButtonWithBorderExtended>
    </Form>
  );
};

export default forwardRef(ColourForm);
