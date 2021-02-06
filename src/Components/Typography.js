import StyleGuideSection from "./StyleGuideSection";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import styled from "styled-components";
import { useState } from "react";

const SelectBar = styled.div``;
const Display = styled.div``;

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
  const [selectedFont, setSelectedFont] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedHeight, setSelectedHeight] = useState(null);

  return (
    <StyleGuideSection heading="02.Typography">
      <SelectBar>
        <div>
          fonts
          <Select
            defaultValue={selectedFont}
            onChange={setSelectedFont}
            options={fontOptions}
          />
        </div>
        <div>
          size
          <CreatableSelect
            isClearable
            defaultValue={selectedSize}
            onChange={setSelectedSize}
            options={makeSizeOptions()}
          />
        </div>
        <div>
          font weight
          <Select
            defaultValue={selectedWeight}
            onChange={setSelectedWeight}
            options={makeFontWeightOptions(selectedFont)}
          />
        </div>
        <div>
          line height
          <CreatableSelect
            isClearable
            defaultValue={selectedHeight}
            onChange={setSelectedHeight}
            options={makeLineHeightOptions()}
          />
        </div>
      </SelectBar>

      <Display>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
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
