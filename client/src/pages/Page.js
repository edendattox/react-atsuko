import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
`;

const Text = styled.h1`
  font-size: 148px;
  color: black;
`;
const SmallText = styled.h1`
  font-size: 32px;
  color: black;
`;

const Page = () => {
  return (
    <Container>
      <Text>404</Text>
      <SmallText>Page Not Found</SmallText>
    </Container>
  );
};

export default Page;
