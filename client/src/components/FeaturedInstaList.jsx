import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 50px;
`;

const Img = styled.img`
  object-fit: cover;
  height: 260px;
`;

const FeaturedInstaList = ({ item }) => {
  return (
    <Container>
      <Img src={item.img} alt="#" />
    </Container>
  );
};

export default FeaturedInstaList;
