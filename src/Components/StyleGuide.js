import React from "react";
import styled from "styled-components";
import { ClipboardIcon } from "../Assets/Icons";
import ColourPalette from "./ColourPalette";
import Typography from "./Typography";

const Wrapper = styled.div`
  padding: 10px;
`;

const H1 = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 2.5;
  color: var(--color-blue);
  margin-bottom: 35px;
  span {
    font-size: 25px;
    color: var(--color-black);
  }
  p {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 300;
    color: var(--color-black);
    svg {
      margin-right: 3px;
      width: 18px;
      height: 18px;
    }
  }
`;

const StyleGuide = React.forwardRef(({ title }, styleGuideRef) => {
  return (
    <Wrapper ref={styleGuideRef}>
      <H1>
        Style Guide - <span>{title}</span>
        <p>
          {ClipboardIcon}click and copy hex colour codes and typography styles
        </p>
      </H1>
      <ColourPalette />
      <Typography />
    </Wrapper>
  );
});

export default StyleGuide;
