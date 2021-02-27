import styled from "styled-components";
import {
  ArrowsSortIcon,
  BoldIcon,
  HIcon,
  LineHeightIcon,
  TypographyIcon,
} from "../Assets/Icons";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import {
  fontOptions,
  headingOptions,
  makeFontWeightOptions,
  makeLineHeightOptions,
  makeSizeOptions,
} from "../Assets/Typography";

const SelectBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 10px;
  padding: 10px 20px;
`;

const SDiv = styled.div`
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
    overflow: "visible",
  }),
};

const SelectContainer = ({
  icon,
  creatable,
  defaultValue,
  value,
  onChange,
  options,
}) => (
  <SDiv>
    <span>{icon}</span>
    {creatable ? (
      <CreatableSelect
        isClearable
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        options={options}
        styles={customStyles}
        maxMenuHeight={160}
      />
    ) : (
      <Select
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        options={options}
        styles={customStyles}
        maxMenuHeight={160}
      />
    )}
  </SDiv>
);

const TypoSelectBar = ({ selected, set }) => {
  return (
    <SelectBar>
      <SelectContainer
        icon={HIcon}
        defaultValue={selected.heading}
        value={selected.heading}
        onChange={set.heading}
        options={headingOptions}
      />
      <SelectContainer
        icon={TypographyIcon}
        defaultValue={selected.font}
        value={selected.font}
        onChange={set.font}
        options={fontOptions}
      />
      <SelectContainer
        creatable
        icon={ArrowsSortIcon}
        defaultValue={selected.size}
        value={selected.size}
        onChange={set.size}
        options={makeSizeOptions()}
      />
      <SelectContainer
        icon={BoldIcon}
        defaultValue={selected.weight}
        value={selected.weight}
        onChange={set.weight}
        options={makeFontWeightOptions(selected.font)}
      />
      <SelectContainer
        creatable
        icon={LineHeightIcon}
        defaultValue={selected.height}
        value={selected.height}
        onChange={set.height}
        options={makeLineHeightOptions()}
      />
    </SelectBar>
  );
};

export default TypoSelectBar;
