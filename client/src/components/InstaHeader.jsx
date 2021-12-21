import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 100px auto;
  width: 300px;
`;

const Text = styled.p`
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
`;

const InstaHeader = () => {
  return (
    <Container>
      <Text>Featured Instagram</Text>
    </Container>
  );
};

export default InstaHeader;
