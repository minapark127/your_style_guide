import React, { useRef } from "react";
import styled from "styled-components";
import ColourPalette from "./ColourPalette";
import Typography from "./Typography";
import html2canvas from "html2canvas";
import { useEntryFormDispatch, useEntryFormState } from "../entryFormContext";
import { changeHeader } from "./Entry";
import { DownloadIcon, ResetIcon } from "../Assets/Icons";
import ColourProvider from "../colourContext";

const Guide = styled.div`
  padding: 10px;
`;

const ResetBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    display: flex;
    align-content: center;
    padding: 5px;
    border: none;
    svg {
      stroke: var(--color-blue);
      stroke-width: 2;
      margin-right: 3px;
    }
    &:hover {
      opacity: 0.8;
      color: var(--color-grey);
      svg {
        stroke: var(--color-grey);
      }
    }
  }
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
`;

const SaveP = styled.div`
  display: flex;
  justify-content: center;
  button {
    display: flex;
    align-content: flex-end;
    border-radius: 5px;
    padding: 5px 10px;
    transition: all linear 0.2s;
    svg {
      stroke: var(--color-blue);
      margin-right: 3px;
    }
    &:hover {
      background-color: var(--color-blue);
      color: white;
      svg {
        stroke: white;
      }
    }
    span {
      padding: 2px;
    }
  }
`;
//
// style
// ends
//
const reset = () => {
  const input = document.querySelector(".businessNameInput");
  changeHeader("Your style guide");
  input.value = "";
};

const saveImg = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
//
// component begins
//
const StyleGuide = () => {
  const styleGuideRef = useRef();
  const { businessName } = useEntryFormState();
  const dispatch = useEntryFormDispatch();

  const getImg = () => {
    const styleGuide = styleGuideRef.current;

    html2canvas(styleGuide, {
      width: styleGuide.scrollWidth,
      height: styleGuide.scrollHeight,
      scrollY: -window.scrollY,
    }).then((canvas) => {
      document.body.appendChild(canvas);
      saveImg(canvas.toDataURL(), `Style Guide - ${businessName}`);
      document.body.removeChild(canvas);
    });
  };

  return (
    <>
      <ResetBtn>
        <button
          onClick={() => {
            reset();
            dispatch({ type: "reset" });
          }}
        >
          {ResetIcon}reset
        </button>
      </ResetBtn>

      <Guide ref={styleGuideRef}>
        <H1>
          Style Guide - <span>{businessName}</span>
        </H1>

        <ColourProvider>
          <ColourPalette />
        </ColourProvider>
        <Typography />
      </Guide>

      <SaveP>
        <button onClick={() => getImg()}>
          {DownloadIcon} <span>Save Style Guide</span>
        </button>
      </SaveP>
    </>
  );
};

export default StyleGuide;
