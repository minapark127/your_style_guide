import React, { useState } from "react";
import StyleGuideSectionLayout from "./StyleGuideSectionLayout";
import TypographyForm from "./TypographyForm";

const useAdd = (initialValue) => {
  const [clickedNumber, setClickedNumber] = useState(initialValue);
  const added = [];

  for (var i = 0; i < clickedNumber; i += 1) {
    added.push(<TypographyForm key={i} />);
  }

  const onClick = () => {
    setClickedNumber(clickedNumber + 1);
  };

  return { added, onClick };
};

const Typography = () => {
  const add = useAdd(0);

  return (
    <StyleGuideSectionLayout heading="02.Typography">
      <div>
        <TypographyForm />
        {add.added}
        <button {...add}>add</button>
      </div>
    </StyleGuideSectionLayout>
  );
};

export default Typography;
