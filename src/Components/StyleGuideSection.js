import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 35px;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const StyleGuideSection = ({ heading, children }) => (
  <Container>
    <H2>{heading}</H2>
    <section>{children}</section>
  </Container>
);

export default StyleGuideSection;
