import React, { useState } from "react";
import styled from "styled-components";
import StyleGuide from "./StyleGuide";
import { ResetIcon } from "../Assets/Icons";

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
    text-transform: none;
    &:focus {
      border: 1px solid var(--color-blue);
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
      margin-right: 5px;
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
          <StyleGuide title={submit.businessName} />
        </>
      ) : null}
    </>
  );
};

export default StartForm;
