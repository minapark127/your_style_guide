import styled from "styled-components";
import { useColourDispatch, useColourState } from "../colourContext";
import { slideIn, FadeOut } from "./GlobalStyles";
import { ResetIcon, EditIcon } from "../Assets/Icons";

const Section = styled.section`
  padding: 20px 10px;
  border: var(--border-lightGrey);
  border-radius: 3px;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: 30px;
    justify-items: center;
    li {
      text-align: center;
      font-size: 18px;
      letter-spacing: 0.5px;
    }
  }
  animation: ${slideIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const Chip = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${(props) => props.colour || `white`};
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  div {
    display: none;
    color: black;
    animation: ${FadeOut} 1.5s ease-out both;
  }
  .show {
    display: block;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    align-content: center;
    border: none;
    padding: 5px;
    &:last-child {
      margin-left: 10px;
    }
    svg {
      stroke: var(--color-blue);
      stroke-width: 2;
      margin-right: 2px;
      width: 17px;
      height: 17px;
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

export const copyToClipboard = (content) => {
  navigator.clipboard.writeText(content);
};

const Palette = ({ inputref }) => {
  const { colours } = useColourState();
  const dispatch = useColourDispatch();

  const onEdit = () => {
    dispatch({ type: "edit" });
    inputref.current.value = `${colours.join(", ")}`;
  };
  return (
    <Section>
      <ul>
        {colours.map((colour, index) => (
          <li key={index}>
            <Chip
              colour={colour}
              onClick={(event) => {
                copyToClipboard(colour);
                event.target.firstChild.classList.toggle("show");
              }}
              title="copy"
            >
              <div
                onAnimationEnd={(event) =>
                  event.target.classList.remove("show")
                }
              >
                copied!
              </div>
            </Chip>

            {colour}
          </li>
        ))}
      </ul>

      <ButtonContainer>
        <button onClick={onEdit}>{EditIcon}edit</button>
        <button onClick={() => dispatch({ type: "reset" })}>
          {ResetIcon}reset
        </button>
      </ButtonContainer>
    </Section>
  );
};

export default Palette;
