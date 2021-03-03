import React, { useRef } from "react";
import { useColourState } from "../colourContext";
import ColourForm from "./ColourForm";
import Palette from "./Palette";
import StyleGuideSectionLayout from "./StyleGuideSectionLayout";

const ColourPalette = () => {
  const { submitted } = useColourState();
  const inputref = useRef(null);

  return (
    <StyleGuideSectionLayout heading="01.Colour Palette">
      <ColourForm ref={inputref} />
      {submitted ? <Palette inputref={inputref} /> : null}
    </StyleGuideSectionLayout>
  );
};

export default ColourPalette;
