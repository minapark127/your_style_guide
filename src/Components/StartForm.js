import React, { useState } from "react";
import styled from "styled-components";
import StyleGuide from "./StyleGuide";
import { ResetIcon, DownloadIcon } from "../Assets/Icons";
import html2canvas from "html2canvas";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
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

const onFocus = (event) => {
  const { target } = event;
  target.placeholder = "";
};

const changeHeader = (text) => {
  const header = document.querySelector(".headerText");
  header.innerHTML = text;
};

const useSubmit = (initialValue) => {
  const [submitted, setSubmitted] = useState(initialValue);
  const [businessName, setBusinessName] = useState();
  const [error, setError] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    const [input] = event.target.form;
    if (input.value !== "") {
      setBusinessName(input.value);
      setSubmitted(1);
      setError(0);
    } else {
      setError(1);
    }
  };

  const onReset = () => {
    const input = document.querySelector(".businessNameInput");
    changeHeader("Your style guide");
    setSubmitted(0);
    setError(0);
    input.value = "";
  };

  return { submitted, businessName, error, onSubmit, onReset };
};

const saveImg = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const StartForm = () => {
  const submit = useSubmit(0);

  if (submit.submitted) {
    changeHeader(`Style Guide - ${submit.businessName}`);
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
      saveImg(canvas.toDataURL(), `Style Guide - ${submit.businessName}`);
      document.body.removeChild(canvas);
    });
  };

  return (
    <>
      <Section>
        <Form onSubmit={submit.onSubmit}>
          <input
            type="text"
            placeholder="type your business name"
            className="businessNameInput"
            {...onFocus}
          />
          <button onClick={submit.onSubmit}>start</button>
        </Form>
        {submit.error ? (
          <Error>business name must be typed in</Error>
        ) : submit.submitted ? null : (
          <span>
            type your business name and press start to start generating your
            style guide
          </span>
        )}
      </Section>

      {submit.submitted ? (
        <>
          <ResetBtn>
            <button onClick={submit.onReset}>{ResetIcon}reset</button>
          </ResetBtn>
          <StyleGuide title={submit.businessName} ref={styleGuideRef} />

          <SaveP>
            <button onClick={getImg}>
              {DownloadIcon} <span>Save Style Guide</span>
            </button>
          </SaveP>
        </>
      ) : null}
    </>
  );
};

export default StartForm;
