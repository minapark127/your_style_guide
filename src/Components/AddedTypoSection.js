import styled from "styled-components";
import { DeleteIcon } from "../Assets/Icons";
import { slideIn } from "./GlobalStyles";
import TypographyForm from "./TypographyForm";

const Section = styled.section`
  animation: ${slideIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  position: relative;
  .delete {
    z-index: 1;
    position: absolute;
    right: -15px;
    top: -15px;
    button {
      border-radius: 50%;
      color: var(--color-red);
      background-color: white;
      border: 1px solid var(--color-red);
      svg {
        width: 20px;
        height: 20px;
        stroke: var(--color-red);
      }
      &:hover {
        opacity: 1;
        background: var(--color-red);
        color: white;
        border: 1px solid transparent;
        svg {
          stroke: white;
        }
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    border: none;
    display: flex;
    align-content: center;
    padding: 5px;
    border-radius: 5px;
    transition: all linear 0.2s;
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

const AddedTypoSection = () => {
  const onDelete = (event) => {
    const {
      target: { tagName },
    } = event;

    switch (tagName) {
      case "BUTTON":
        event.target.parentElement.parentElement.style.display = "none";
        break;
      case "svg":
        event.target.parentElement.parentElement.parentElement.style.display =
          "none";
        break;
      default:
        break;
    }
  };
  return (
    <Section>
      <TypographyForm />
      <ButtonContainer className="delete">
        <button onClick={onDelete}>{DeleteIcon}</button>
      </ButtonContainer>
    </Section>
  );
};

export default AddedTypoSection;
