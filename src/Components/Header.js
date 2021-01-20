import styled from "styled-components";

const SHeader = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px 35px;
  font-size: 20px;
  font-weight: 600;
  box-shadow: 0px 0px 18px 0px rgba(217, 217, 217, 1);
  position: sticky;
  top: 0;
  margin-bottom: 50px;
`;

const Header = () => <SHeader>✍🏼 Your style guide</SHeader>;

export default Header;
