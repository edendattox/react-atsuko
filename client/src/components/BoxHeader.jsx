import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  margin: 100px 0;
`;

const Text = styled.h3`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const SubHeading = styled.h2`
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 16px;
  letter-spacing: 2px;
`;

const BoxHeader = () => {
  return (
    <Container>
      <Text>Featured collections</Text>
      <SubHeading>NEW ARRIVALS</SubHeading>
    </Container>
  );
};

export default BoxHeader;
