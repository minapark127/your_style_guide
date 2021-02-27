import React, { useState } from "react";
import StyleGuideSectionLayout from "./StyleGuideSectionLayout";
import TypographyForm from "./TypographyForm";
import { AddIcon } from "../Assets/Icons";
import styled from "styled-components";
import AddedTypoSection from "./AddedTypoSection";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    border: none;
    display: flex;
    align-content: center;
    padding: 5px;
    border-radius: 5px;
    transition: all linear 0.2s;
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

//style ends

const useAdd = (initialValue) => {
  const [clickedNumber, setClickedNumber] = useState(initialValue);
  const added = [];

  for (var i = 0; i < clickedNumber; i += 1) {
    added.push(<AddedTypoSection key={i} />);
  }

  const onClick = () => {
    setClickedNumber(clickedNumber + 1);
  };

  return { added, onClick };
};

const Typography = () => {
  const add = useAdd(0);

  return (
    <StyleGuideSectionLayout heading="02.Typography">
      <div>
        <TypographyForm />
        {add.added}
        <ButtonContainer>
          <button onClick={add.onClick}>{AddIcon}add</button>
        </ButtonContainer>
      </div>
    </StyleGuideSectionLayout>
  );
};

export default Typography;
