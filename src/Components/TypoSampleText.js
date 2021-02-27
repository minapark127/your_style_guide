import styled from "styled-components";
import { CheckIcon } from "../Assets/Icons";
import { slideIn } from "./GlobalStyles";
import { copyToClipboard } from "./Palette";

const SampleText = styled.section`
  font-family: ${(props) => (props.font ? props.font : "Open Sans")};
  font-size: ${(props) => (props.size ? props.size : "18px")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 1.5)};
  margin-bottom: 40px;

  span {
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
    &:active {
      opacity: 0.4;
      font-size: 0.9em;
      transition: all linear 0.8s;
    }
  }
  p {
    opacity: 0;
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 400;
    color: var(--color-blue);
    display: flex;
    align-items: center;
    margin-top: 5px;
    svg {
      stroke: var(--color-blue);
      margin-right: 3px;
    }
  }
  .show {
    opacity: 1;
    animation: ${slideIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const toggleAnimation = (event) => {
  event.target.nextSibling.classList.add("show");
  setTimeout(() => event.target.nextSibling.classList.remove("show"), 800);
};

const TypoSampleText = ({ selected, submitted }) => {
  const typographyStyle = `{font-family: ${selected.font.font}; font-size: ${selected.size.value}; font-weight: ${selected.weight.weight}; line-height: ${selected.height.value};}`;
  return (
    <SampleText
      font={selected.font.font}
      size={selected.size.value}
      weight={selected.weight.weight}
      lineHeight={selected.height.value}
    >
      {!submitted ? (
        <>{lorem}</>
      ) : (
        <>
          <span
            title="copy style"
            onClick={(event) => {
              copyToClipboard(typographyStyle);
              toggleAnimation(event);
            }}
          >
            {selected.heading.value}
          </span>
          <p>{CheckIcon}copied</p>
        </>
      )}
    </SampleText>
  );
};

export default TypoSampleText;
