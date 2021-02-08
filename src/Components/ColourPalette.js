import { useRef, useState } from "react";
import styled from "styled-components";
import { ResetIcon, EditIcon } from "../Assets/Icons";
import { slideIn, FadeOut } from "./GlobalStyles";
import StyleGuideSection from "./StyleGuideSection";

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

const Palette = styled.section`
  padding: 20px 10px;
  border: var(--border-lightGrey);
  border-radius: 3px;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: 30px;
    justify-items: center;
    li {
      text-align: center;
      font-size: 18px;
      letter-spacing: 0.5px;
    }
  }
  animation: ${slideIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const Chip = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${(props) => props.colour || `white`};
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  div {
    display: none;
    color: black;
    animation: ${FadeOut} 1.5s ease-out both;
  }
  .show {
    display: block;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    align-content: center;
    border: none;
    padding: 5px;
    &:last-child {
      margin-left: 10px;
    }
    svg {
      stroke: var(--color-blue);
      stroke-width: 2;
      margin-right: 2px;
      width: 17px;
      height: 17px;
    }
    &:hover {
      opacity: 0.8;
      color: var(--color-grey);
      svg {
        stroke: var(--color-grey);
      }
    }
  }
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
      <StyleGuideSection heading="01.Colour Palette">
        <Form onSubmit={submit.onSubmit}>
          <input
            type="text"
            placeholder="add colour codes - #000000, #ffffff"
            ref={colourPaletteInput}
          />
          <button onClick={submit.onSubmit}>done</button>
        </Form>

        {submit.submitted ? (
          <Palette>
            <ul>
              {submit.colours.map((colour, index) => (
                <li key={index}>
                  <Chip
                    key={index}
                    colour={colour}
                    onClick={(event) => {
                      navigator.clipboard.writeText(colour);
                      event.target.firstChild.classList.toggle("show");
                    }}
                    title="copy"
                  >
                    <div
                      onAnimationEnd={(event) =>
                        event.target.classList.remove("show")
                      }
                    >
                      copied!
                    </div>
                  </Chip>

                  {colour}
                </li>
              ))}
            </ul>

            <ButtonContainer>
              <button onClick={onEdit}>{EditIcon}edit</button>
              <button onClick={submit.onReset}>{ResetIcon}reset</button>
            </ButtonContainer>
          </Palette>
        ) : null}
      </StyleGuideSection>
    </>
  );
};

export default ColourPalette;
