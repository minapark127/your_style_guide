import styled from "styled-components";
import ColourPalette from "./ColourPalette";

const H1 = styled.h1`
  font-size: 32px;
  margin-bottom: 60px;
  color: var(--color-blue);
  font-weight: 600;
  span {
    font-size: 25px;
    color: var(--color-black);
  }
`;

const StyleGuide = ({ title }) => {
  return (
    <>
      <H1>
        Style Guide - <span>{title}</span>
      </H1>
      <ColourPalette />
    </>
  );
};

export default StyleGuide;
