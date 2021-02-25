import React, { useState } from "react";
import styled from "styled-components";
import StyleGuide from "./StyleGuide";
import { ResetIcon, DownloadIcon } from "../Assets/Icons";
import html2canvas from "html2canvas";
import { useStartFormDispatch, useStartFormState } from "../startFormContext";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
    margin-top: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  & > * {
    font-size: 18px;
    text-transform: capitalize;
    padding: 10px 15px;
    border-radius: 16px;
    transition: all linear 0.2s;
  }
  input[type="text"] {
    width: 50%;
    border: var(--border-lightGrey);
    color: var(--color-grey);
    margin-right: 5px;
    text-transform: none;
    &:focus {
      border: var(--border-blue);
      box-shadow: var(--shadow-grey);
    }
  }
  button {
    &:hover {
      background-color: var(--color-blue);
      color: white;
    }
  }
`;

const Error = styled.span`
  color: var(--color-red);
  font-weight: 600;
`;

const ResetBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    display: flex;
    align-content: center;
    padding: 5px;
    border: none;
    svg {
      stroke: var(--color-blue);
      stroke-width: 2;
      margin-right: 3px;
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

const SaveP = styled.div`
  display: flex;
  justify-content: center;
  button {
    display: flex;
    align-content: flex-end;
    border-radius: 5px;
    padding: 5px 10px;
    transition: all linear 0.2s;
    svg {
      stroke: var(--color-blue);
      margin-right: 3px;
    }
    &:hover {
      background-color: var(--color-blue);
      color: white;
      svg {
        stroke: white;
      }
    }
    span {
      padding: 2px;
    }
  }
`;

//
// style
// ends
//

const changeHeader = (text) => {
  const header = document.querySelector(".headerText");
  header.innerHTML = text;
};

const saveImg = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const reset = () => {
  const input = document.querySelector(".businessNameInput");
  changeHeader("Your style guide");
  input.value = "";
};

const StartForm = () => {
  const { submitted, businessName, error } = useStartFormState();
  const dispatch = useStartFormDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const [input] = event.target.form;
    if (input.value !== "") {
      dispatch({ type: "submit", payload: input.value });
    } else {
      dispatch({ type: "error" });
    }
  };

  if (submitted) {
    changeHeader(`Style Guide - ${businessName}`);
  }

  const styleGuideRef = React.createRef();
  const getImg = () => {
    const styleGuide = styleGuideRef.current;

    html2canvas(styleGuide, {
      width: styleGuide.scrollWidth,
      height: styleGuide.scrollHeight,
      scrollY: -window.scrollY,
    }).then((canvas) => {
      document.body.appendChild(canvas);
      saveImg(canvas.toDataURL(), `Style Guide - ${businessName}`);
      document.body.removeChild(canvas);
    });
  };

  return (
    <>
      <Section>
        <Form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="type your business name"
            className="businessNameInput"
          />
          <button onClick={onSubmit}>start</button>
        </Form>

        {error ? (
          <Error>business name must be typed in</Error>
        ) : submitted ? null : (
          <span>
            type your business name and press start to start generating your
            style guide
          </span>
        )}
      </Section>

      {submitted ? (
        <>
          <ResetBtn>
            <button
              onClick={() => {
                reset();
                dispatch({ type: "reset" });
              }}
            >
              {ResetIcon}reset
            </button>
          </ResetBtn>
          <StyleGuide title={businessName} ref={styleGuideRef} />

          <SaveP>
            <button onClick={() => getImg()}>
              {DownloadIcon} <span>Save Style Guide</span>
            </button>
          </SaveP>
        </>
      ) : null}
    </>
  );
};

export default StartForm;
