import styled from "styled-components";
import { CheckIcon, EditIcon, ResetIcon } from "../Assets/Icons";

const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    li {
      font-size: 14px;
      color: var(--color-grey);
      &:not(:last-child) {
        margin-right: 10px;
        ::after {
          content: "·";
          position: relative;
          right: -5px;
        }
      }
    }
  }
  div {
    display: flex;
    button {
      border: none;
      display: flex;
      align-content: center;
      padding: 5px;
      border-radius: 5px;
      transition: all linear 0.2s;
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
  }
`;

const TypoInfo = ({ selected, create, reset }) => (
  <Info>
    <ul>
      <li>{selected.font.font}</li>
      <li>{selected.size.value}</li>
      <li>{selected.weight.value}</li>
      <li>{selected.height.value}</li>
    </ul>
    <div>
      {!create.submitted ? (
        <>
          <button onClick={reset}>{ResetIcon}reset</button>
          <button onClick={create.onCreate}>{CheckIcon}create</button>
        </>
      ) : (
        <button onClick={create.onEdit}>{EditIcon}edit</button>
      )}
    </div>
  </Info>
);

export default TypoInfo;
