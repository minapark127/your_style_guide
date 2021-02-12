import React from "react";
import { useState } from "react";
import {
  ArrowsSortIcon,
  BoldIcon,
  CheckIcon,
  EditIcon,
  HIcon,
  LineHeightIcon,
  ResetIcon,
  TypographyIcon,
} from "../Assets/Icons";
import CreatableSelect from "react-select/creatable";
import { fonts } from "../Assets/Fonts";
import Select from "react-select";
import styled from "styled-components";

const Wrapper = styled.form`
  border: var(--border-lightGrey);
  border-radius: 5px;
  margin-bottom: 25px;
`;

const SelectBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 10px;
  padding: 10px 20px;
`;

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  white-space: nowrap;
  span {
    margin-right: 10px;
    svg {
      stroke-width: 2.5;
    }
  }
`;

const Display = styled.div`
  padding: 30px;
  border-top: ${(props) =>
    props.submitted ? "none" : "var(--border-lightGrey)"};
`;

const SampleText = styled.section`
  font-family: ${(props) => (props.font ? props.font : "Open Sans")};
  font-size: ${(props) => (props.size ? props.size : "18px")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 1.5)};
  margin-bottom: 40px;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    li {
      font-size: 14px;
      color: var(--color-grey);
      &:not(:last-child) {
        margin-right: 10px;
        ::after {
          content: "·";
          position: relative;
          right: -5px;
        }
      }
    }
  }
  div {
    display: flex;
    button {
      border: none;
      display: flex;
      align-content: center;
      padding: 5px;
      border-radius: 5px;
      transition: all linear 0.2s;
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
  }
`;

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    width: "100%",
    fontSize: "16px",
  }),

  indicatorsContainer: (provided, state) => ({
    ...provided,
    cursor: "pointer",
  }),
  menu: (provided, state) => ({
    ...provided,
    margin: "0 0 0 0",
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: state.data.font,
    fontWeight: state.data.weight,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontFamily: state.data.font,
    fontWeight: state.data.weight,
    overflow: "visible",
  }),
};

//style ends

const headings = ["Heading 1", "Heading 2", "Heading 3", "Heading 4", "Body"];

const headingOptions = headings.map((heading) => ({
  value: heading,
  label: heading,
}));

const fontOptions = fonts.map((font) => ({
  value: font.fontName,
  label: font.fontName,
  font: font.fontName,
}));

const makeSizeOptions = () => {
  let sizeArr = [];
  for (let i = 14; i < 100; i += 2) {
    sizeArr.push(i);
  }
  const sizeOptions = sizeArr.map((size) => ({
    value: `${size}px`,
    label: `${size}px`,
  }));
  return sizeOptions;
};

const makeLineHeightOptions = () => {
  let heightArr = [];
  for (let i = 0; i < 10; i += 0.1) {
    heightArr.push(i.toFixed(1));
  }
  const heightOptions = heightArr.map((height) => ({
    value: `${height}`,
    label: `${height}`,
  }));
  return heightOptions;
};

const makeFontWeightOptions = (selectedFont) => {
  if (selectedFont) {
    const fontWeightArr = fonts.filter(
      (font) => font.fontName === selectedFont.value
    )[0].fontWeight;

    const fontWeightOptions = fontWeightArr.map((weight) => ({
      value: weight,
      label: weight,
      weight: weight.split(" ")[1],
      font: selectedFont.font,
    }));

    return fontWeightOptions;
  } else {
    const defaultFontWeightOptions = fonts[0].fontWeight.map((fontWeight) => ({
      value: fontWeight,
      label: fontWeight,
      weight: fontWeight.split(" ")[1],
    }));

    return defaultFontWeightOptions;
  }
};

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

  const [selectedHeading, setSelectedHeading] = useState(headingOptions[0]);
  const [selectedFont, setSelectedFont] = useState(fontOptions[0]);
  const [selectedSize, setSelectedSize] = useState(makeSizeOptions()[2]);
  const [selectedWeight, setSelectedWeight] = useState(
    makeFontWeightOptions(fontOptions[0])[1]
  );
  const [selectedHeight, setSelectedHeight] = useState(
    makeLineHeightOptions()[15]
  );
  const selected = {
    heading: selectedHeading ? selectedHeading : headingOptions[0],
    font: selectedFont ? selectedFont : fontOptions[0],
    size: selectedSize ? selectedSize : makeSizeOptions()[2],
    weight: selectedWeight
      ? selectedWeight
      : makeFontWeightOptions(fontOptions[0])[1],
    height: selectedHeight ? selectedHeight : makeLineHeightOptions()[15],
  };

  const reset = (event) => {
    event.preventDefault();
    setSelectedHeading(headingOptions[0]);
    setSelectedFont(fontOptions[0]);
    setSelectedSize(makeSizeOptions()[2]);
    setSelectedWeight(makeFontWeightOptions(fontOptions[0])[1]);
    setSelectedHeight(makeLineHeightOptions()[15]);
  };

  return (
    <Wrapper>
      {!create.submitted ? (
        <SelectBar>
          <SelectContainer>
            <span>{HIcon}</span>
            <Select
              defaultValue={selectedHeading}
              value={selectedHeading}
              onChange={setSelectedHeading}
              options={headingOptions}
              styles={customStyles}
            />
          </SelectContainer>
          <SelectContainer>
            <span>{TypographyIcon}</span>
            <Select
              defaultValue={selectedFont}
              value={selectedFont}
              onChange={setSelectedFont}
              options={fontOptions}
              styles={customStyles}
            />
          </SelectContainer>
          <SelectContainer>
            <span>{ArrowsSortIcon}</span>
            <CreatableSelect
              isClearable
              defaultValue={selectedSize}
              value={selectedSize}
              onChange={setSelectedSize}
              options={makeSizeOptions()}
              styles={customStyles}
            />
          </SelectContainer>
          <SelectContainer>
            <span>{BoldIcon}</span>
            <Select
              defaultValue={selectedWeight}
              value={selectedWeight}
              onChange={setSelectedWeight}
              options={makeFontWeightOptions(selectedFont)}
              styles={customStyles}
            />
          </SelectContainer>
          <SelectContainer>
            <span>{LineHeightIcon}</span>
            <CreatableSelect
              isClearable
              defaultValue={selectedHeight}
              value={selectedHeight}
              onChange={setSelectedHeight}
              options={makeLineHeightOptions()}
              styles={customStyles}
            />
          </SelectContainer>
        </SelectBar>
      ) : null}
      <Display submitted={create.submitted}>
        <SampleText
          font={selected.font.font}
          size={selected.size.value}
          weight={selected.weight.weight}
          lineHeight={selected.height.value}
        >
          {!create.submitted ? (
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </>
          ) : (
            <>{selected.heading.value}</>
          )}
        </SampleText>
        <Info>
          <ul>
            <li>{selected.font.font}</li>
            <li>{selected.size.value}</li>
            <li>{selected.weight.value}</li>
            <li>{selected.height.value}</li>
          </ul>
          <div>
            {!create.submitted ? (
              <>
                <button onClick={reset}>{ResetIcon}reset</button>
                <button onClick={create.onCreate}>{CheckIcon}create</button>
              </>
            ) : (
              <button onClick={create.onEdit}>{EditIcon}edit</button>
            )}
          </div>
        </Info>
      </Display>
    </Wrapper>
  );
};

export default TypographyForm;
