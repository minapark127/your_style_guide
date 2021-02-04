import styled from "styled-components";

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const StyleGuideSection = ({ heading, children }) => (
  <>
    <H2>{heading}</H2>
    <section>{children}</section>
  </>
);

export default StyleGuideSection;
