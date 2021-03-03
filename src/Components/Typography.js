import React, { useState } from "react";
import StyleGuideSectionLayout from "./StyleGuideSectionLayout";
import TypographyForm from "./TypographyForm";
import { AddIcon } from "../Assets/Icons";
import styled from "styled-components";
import AddedTypoSection from "./AddedTypoSection";
import { ButtonNoBorderWithIcon } from "../GlobalStyles";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonNoBorderWithIconExtended = styled(ButtonNoBorderWithIcon)`
  svg {
    width: 17px;
    height: 17px;
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
          <ButtonNoBorderWithIconExtended onClick={add.onClick}>
            {AddIcon}add
          </ButtonNoBorderWithIconExtended>
        </ButtonContainer>
      </div>
    </StyleGuideSectionLayout>
  );
};

export default Typography;
