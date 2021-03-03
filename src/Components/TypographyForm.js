import React from "react";
import { useState } from "react";
import { initialTypoOpt } from "../Assets/Typography";
import styled from "styled-components";
import TypoSelectBar from "./TypoSelectBar";
import TypoSampleText from "./TypoSampleText";
import TypoInfo from "./TypoInfo";

const Wrapper = styled.form`
  border: var(--border-lightGrey);
  border-radius: 5px;
  margin-bottom: 25px;
`;

const Display = styled.div`
  padding: 30px;
  border-top: ${(props) =>
    props.submitted ? "none" : "var(--border-lightGrey)"};
`;

//style ends

const useCreate = (initialValue) => {
  const [submitted, setSubmitted] = useState(initialValue);

  const onCreate = (event) => {
    event.preventDefault();
    setSubmitted(1);
  };
  const onEdit = (event) => {
    event.preventDefault();
    setSubmitted(0);
  };
  return { submitted, setSubmitted, onCreate, onEdit };
};

const TypographyForm = () => {
  const create = useCreate(0);

  const [selectedHeading, setSelectedHeading] = useState(
    initialTypoOpt.heading
  );
  const [selectedFont, setSelectedFont] = useState(initialTypoOpt.font);
  const [selectedSize, setSelectedSize] = useState(initialTypoOpt.size);
  const [selectedWeight, setSelectedWeight] = useState(initialTypoOpt.weight);
  const [selectedHeight, setSelectedHeight] = useState(initialTypoOpt.height);

  const selected = {
    heading: selectedHeading ? selectedHeading : initialTypoOpt.heading,
    font: selectedFont ? selectedFont : initialTypoOpt.font,
    size: selectedSize ? selectedSize : initialTypoOpt.size,
    weight: selectedWeight ? selectedWeight : initialTypoOpt.weight,
    height: selectedHeight ? selectedHeight : initialTypoOpt.height,
  };

  const set = {
    heading: setSelectedHeading,
    font: setSelectedFont,
    size: setSelectedSize,
    weight: setSelectedWeight,
    height: setSelectedHeight,
  };

  const reset = (event) => {
    event.preventDefault();
    setSelectedHeading(initialTypoOpt.heading);
    setSelectedFont(initialTypoOpt.font);
    setSelectedSize(initialTypoOpt.size);
    setSelectedWeight(initialTypoOpt.weight);
    setSelectedHeight(initialTypoOpt.height);
  };

  return (
    <Wrapper>
      {!create.submitted ? (
        <TypoSelectBar selected={selected} set={set} />
      ) : null}
      <Display submitted={create.submitted}>
        <TypoSampleText selected={selected} submitted={create.submitted} />
        <TypoInfo selected={selected} create={create} reset={reset} />
      </Display>
    </Wrapper>
  );
};

export default TypographyForm;
