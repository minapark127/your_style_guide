import styled from "styled-components";
import ColourPalette from "./ColourPalette";

const H1 = styled.h1`
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 40px;
`;

const StyleGuide = ({ title }) => {
  return (
    <>
      <H1>Style Guide - {title}</H1>
      <ColourPalette />
    </>
  );
};

export default StyleGuide;
