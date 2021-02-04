import styled from "styled-components";
import ColourPalette from "./ColourPalette";
import Typography from "./Typography";

const H1 = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: var(--color-blue);
  margin-bottom: 35px;
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
      <Typography />
    </>
  );
};

export default StyleGuide;
