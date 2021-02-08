import StyleGuideSection from "./StyleGuideSection";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import styled from "styled-components";
import { useState } from "react";
import {
  ArrowsSortIcon,
  BoldIcon,
  CheckIcon,
  LineHeightIcon,
  ResetIcon,
  TypographyIcon,
} from "../Assets/Icons";

const Wrapper = styled.div`
  border: var(--border-lightGrey);
  border-radius: 5px;
`;

const SelectBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.3fr 0.8fr 1fr 0.8fr;
  grid-gap: 15px;
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
  border-top: var(--border-lightGrey);
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
    makeLineHeightOptions()[15]
  );

  const reset = () => {
    setSelectedFont(fontOptions[0]);
    setSelectedSize(makeSizeOptions()[2]);
    setSelectedWeight(makeFontWeightOptions(fontOptions[0])[1]);
    setSelectedHeight(makeLineHeightOptions()[15]);
  };

  return (
    <StyleGuideSection heading="02.Typography">
      <Wrapper>
        <SelectBar>
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
              selectedHeight
                ? selectedHeight.value
                : makeLineHeightOptions()[15]
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </SampleText>
          <Info>
            <ul>
              <li>{selectedFont ? selectedFont.font : fontOptions[0]}</li>
              <li>
                {selectedSize ? selectedSize.value : makeSizeOptions()[2]}
              </li>
              <li>
                {selectedWeight
                  ? selectedWeight.weight
                  : makeFontWeightOptions(fontOptions[0])[1]}
              </li>
              <li>
                {selectedHeight
                  ? selectedHeight.value
                  : makeLineHeightOptions()[15]}
              </li>
            </ul>
            <div>
              <button onClick={reset}>{ResetIcon}reset</button>
              <button>{CheckIcon}create</button>
            </div>
          </Info>
        </Display>
      </Wrapper>
    </StyleGuideSection>
  );
};

export default Typography;
