import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  & > * {
    font-size: 18px;
    text-transform: capitalize;
    padding: 10px 15px;
    border-radius: 16px;
    transition: all linear 0.3s;
  }
  input[type="text"] {
    width: 50%;
    border: 1px solid var(--color-lightGrey);
    color: var(--color-grey);
    margin-right: 10px;
    &:focus {
      border: 1px solid var(--color-blue);
      box-shadow: var(--shadow-grey);
    }
  }
  button {
    font-weight: 600;
    border: 2px solid var(--color-blue);
    color: var(--color-blue);
    cursor: pointer;
    &:hover {
      background-color: var(--color-blue);
      color: white;
    }
  }
`;

const StartForm = () => (
  <Section>
    <Form>
      <input type="text" placeholder="type your business name" />
      <button>start</button>
    </Form>
    <span>
      type your business name and press start to start generating your style
      guide
    </span>
  </Section>
);

export default StartForm;
