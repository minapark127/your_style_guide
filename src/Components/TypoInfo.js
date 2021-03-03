import styled from "styled-components";
import { CheckIcon, EditIcon, ResetIcon } from "../Assets/Icons";
import { ButtonNoBorderWithIcon } from "../GlobalStyles";

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
  }
`;

const ButtonNoBorderWithIconExtended = styled(ButtonNoBorderWithIcon)`
  &:last-child {
    margin-left: 10px;
  }
  svg {
    width: 17px;
    height: 17px;
  }
`;
//
//style ends
//

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
          <ButtonNoBorderWithIconExtended onClick={reset}>
            {ResetIcon}reset
          </ButtonNoBorderWithIconExtended>
          <ButtonNoBorderWithIconExtended onClick={create.onCreate}>
            {CheckIcon}create
          </ButtonNoBorderWithIconExtended>
        </>
      ) : (
        <ButtonNoBorderWithIconExtended onClick={create.onEdit}>
          {EditIcon}edit
        </ButtonNoBorderWithIconExtended>
      )}
    </div>
  </Info>
);

export default TypoInfo;
