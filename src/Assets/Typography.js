export const fonts = [
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

const headings = ["Heading 1", "Heading 2", "Heading 3", "Heading 4", "Body"];

export const headingOptions = headings.map((heading) => ({
  value: heading,
  label: heading,
}));

export const fontOptions = fonts.map((font) => ({
  value: font.fontName,
  label: font.fontName,
  font: font.fontName,
}));

export const makeSizeOptions = () => {
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

export const makeLineHeightOptions = () => {
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

export const makeFontWeightOptions = (selectedFont) => {
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
    const defaultFontWeightOptions = fonts[0].fontWeight.map((fontWeight) => ({
      value: fontWeight,
      label: fontWeight,
      weight: fontWeight.split(" ")[1],
    }));

    return defaultFontWeightOptions;
  }
};

export const initialTypoOpt = {
  heading: headingOptions[0],
  font: fontOptions[0],
  size: makeSizeOptions()[2],
  weight: makeFontWeightOptions(fontOptions[0])[1],
  height: makeLineHeightOptions()[15],
};
