import React, { useState } from "react";
import styled from "styled-components";
import StyleGuide from "./StyleGuide";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
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
    transition: all linear 0.3s;
  }
  input[type="text"] {
    width: 50%;
    border: 1px solid var(--color-lightGrey);
    color: var(--color-grey);
    margin-right: 10px;
    &:focus {
      border: 1px solid var(--color-blue);
      box-shadow: var(--shadow-grey);
    }
  }
  button {
    font-weight: 600;
    border: 2px solid var(--color-blue);
    color: var(--color-blue);
    cursor: pointer;
    &:hover {
      background-color: var(--color-blue);
      color: white;
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

const StartForm = () => {
  const submit = useSubmit(0);

  if (submit.submitted) {
    changeHeader(`Style Guide - ${submit.businessName}`);
  }

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
        <span>
          type your business name and press start to start generating your style
          guide
        </span>
        {submit.error ? <span>business name must be typed in</span> : null}
      </Section>

      {submit.submitted ? (
        <>
          <button onClick={submit.onReset}>reset</button>
          <StyleGuide title={submit.businessName} />
        </>
      ) : null}
    </>
  );
};

export default StartForm;
