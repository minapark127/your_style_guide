import StyleGuideSection from "./StyleGuideSection";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import styled from "styled-components";
import { useState } from "react";
import {
  ArrowsSortIcon,
  BoldIcon,
  LineHeightIcon,
  TypographyIcon,
} from "../Assets/Icons";

const SelectBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 0 20px;
  margin-bottom: 20px;
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
  }),
};

const Display = styled.div``;
const SampleText = styled.section`
  font-family: ${(props) => (props.font ? props.font : "Open Sans")};
  font-size: ${(props) => (props.size ? props.size : "18px")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 1)};
`;

const fonts = [
  {
    fontName: "Open Sans",
    fontWeight: ["Light 300", "Regular 400", "Semi-bold 600", "Bold 700"],
  },
  {
    fontName: "Montserrat",
    fontWeight: ["Light 300", "Regular 400", "Semi-bold 600", "Bold 700"],
  },
  {
    fontName: "Lato",
    fontWeight: ["Light 300", "Regular 400", "Bold 700"],
  },
  {
    fontName: "Ubuntu",
    fontWeight: ["Light 300", "Regular 400", "Medium 500", "Bold 700"],
  },
  {
    fontName: "Source Code Pro",
    fontWeight: ["Light 300", "Regular 400", "Medium 500", "Bold 700"],
  },
];

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

const defaultontWeights = [
  "Light 300",
  "Regular 400",
  "Semi-bold 600",
  "Bold 700",
];

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
    const defaultFontWeightOptions = defaultontWeights.map((fontWeight) => ({
      value: fontWeight,
      label: fontWeight,
    }));

    return defaultFontWeightOptions;
  }
};

const Typography = () => {
  const [selectedFont, setSelectedFont] = useState(fontOptions[0]);
  const [selectedSize, setSelectedSize] = useState(makeSizeOptions()[2]);
  const [selectedWeight, setSelectedWeight] = useState(
    makeFontWeightOptions(fontOptions[0])[1]
  );
  const [selectedHeight, setSelectedHeight] = useState(
    makeLineHeightOptions()[10]
  );

  return (
    <StyleGuideSection heading="02.Typography">
      <SelectBar>
        <SelectContainer>
          <span>{TypographyIcon}</span>
          <Select
            defaultValue={selectedFont}
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
            onChange={setSelectedSize}
            options={makeSizeOptions()}
            styles={customStyles}
          />
        </SelectContainer>
        <SelectContainer>
          <span>{BoldIcon}</span>
          <Select
            defaultValue={selectedWeight}
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
            onChange={setSelectedHeight}
            options={makeLineHeightOptions()}
            styles={customStyles}
          />
        </SelectContainer>
      </SelectBar>

      <Display>
        <SampleText
          font={selectedFont ? selectedFont.font : fontOptions[0]}
          size={selectedSize ? selectedSize.value : makeSizeOptions()[2]}
          weight={
            selectedWeight
              ? selectedWeight.weight
              : makeFontWeightOptions(fontOptions[0])[1]
          }
          lineHeight={
            selectedHeight ? selectedHeight.value : makeLineHeightOptions()[10]
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SampleText>
        <span>{selectedFont ? selectedFont.value : null}</span>
        <span>{selectedSize ? selectedSize.value : null}</span>
        <span>{selectedWeight ? selectedWeight.value : null}</span>
        <span>{selectedHeight ? selectedHeight.value : null}</span>
        <button>create</button>
      </Display>
    </StyleGuideSection>
  );
};

export default Typography;
