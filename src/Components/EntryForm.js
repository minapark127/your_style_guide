import React from "react";
import styled from "styled-components";
import { useEntryFormDispatch } from "../entryFormContext";

const Form = styled.form`
  display: flex;
  justify-content: center;
  & > * {
    font-size: 18px;
    padding: 8px 15px;
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
//
// component begins
//
const EntryForm = () => {
  const dispatch = useEntryFormDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const [input] = event.target.form;
    if (input.value !== "") {
      dispatch({ type: "submit", payload: input.value });
    } else {
      dispatch({ type: "error" });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="type your business name"
        className="businessNameInput"
      />
      <button onClick={onSubmit}>start</button>
    </Form>
  );
};

export default EntryForm;
