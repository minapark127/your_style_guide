import React from "react";
import styled from "styled-components";
import StyleGuide from "./StyleGuide";
import { useEntryFormState } from "../entryFormContext";
import { ClipboardIcon } from "../Assets/Icons";
import EntryForm from "./EntryForm";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    svg {
      margin-right: 3px;
      width: 18px;
      height: 18px;
    }
  }
`;

const Error = styled.span`
  color: var(--color-red);
  font-weight: 600;
`;
//
// style
// ends
//
export const changeHeader = (text) => {
  const header = document.querySelector(".headerText");
  header.innerHTML = text;
};
//
// component begins
//
const StartForm = () => {
  const { submitted, businessName, error } = useEntryFormState();

  if (submitted) {
    changeHeader(`Style Guide - ${businessName}`);
  }

  return (
    <>
      <Wrapper>
        <EntryForm />

        {error ? (
          <Error>business name must be typed in</Error>
        ) : submitted ? (
          <span>
            {ClipboardIcon}click and copy hex colour codes and typography styles
          </span>
        ) : (
          <span>
            type your business name and press start to start generating your
            style guide
          </span>
        )}
      </Wrapper>

      {submitted ? <StyleGuide /> : null}
    </>
  );
};

export default StartForm;
