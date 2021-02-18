import React from "react";
import styled from "styled-components";
import ColourPalette from "./ColourPalette";
import Typography from "./Typography";

const Wrapper = styled.div`
  padding: 10px;
`;

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

const StyleGuide = React.forwardRef(({ title }, styleGuideRef) => {
  return (
    <Wrapper ref={styleGuideRef}>
      <H1>
        Style Guide - <span>{title}</span>
      </H1>
      <ColourPalette />
      <Typography />
    </Wrapper>
  );
});

export default StyleGuide;
