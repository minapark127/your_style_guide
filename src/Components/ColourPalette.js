import { useRef, useState } from "react";
import styled from "styled-components";
import { ResetIcon } from "../Assets/Icons";

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
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

const PaletteContainer = styled.section`
  border: var(--border-lightGrey);
`;

const useSubmit = (initialValue) => {
  const [submitted, setSubmitted] = useState(initialValue);
  const [colours, setColours] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    const [input] = event.target.form;
    const colours = input.value.split(" ").join("").split(",");
    const coloursArray = colours.map((colour) => {
      return colour.startsWith("#") ? colour : `#${colour}`;
    });

    setColours(coloursArray);
    setSubmitted(1);
    input.value = "";
  };

  const onReset = () => {
    setColours([]);
    setSubmitted(0);
  };

  return { submitted, colours, onSubmit, onReset, setSubmitted };
};

const ColourPalette = () => {
  const colourPaletteInput = useRef(null);
  const submit = useSubmit(0);

  const onEdit = () => {
    submit.setSubmitted(0);
    colourPaletteInput.current.value = `${submit.colours.join(", ")}`;
  };

  return (
    <>
      <H2>01. Colour Palette</H2>
      <Form onSubmit={submit.onSubmit}>
        <input
          type="text"
          placeholder="add colour codes - #000000, #ffffff"
          ref={colourPaletteInput}
        />
        <button onClick={submit.onSubmit}>done</button>
      </Form>
      {submit.submitted ? (
        <PaletteContainer>
          <button onClick={submit.onReset}>{ResetIcon}reset</button>
          <button onClick={onEdit}>{ResetIcon}edit</button>
          <ul>
            {submit.colours.map((colour, index) => (
              <li key={index}>{colour}</li>
            ))}
          </ul>
        </PaletteContainer>
      ) : null}
    </>
  );
};

export default ColourPalette;
