import React from "react";
import { featuredInstagram } from "../data";
import styled from "styled-components";
import FeaturedInstaList from "./FeaturedInstaList";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const FeaturedInsta = () => {
  return (
    <Container>
      {featuredInstagram.map((item) => (
        <FeaturedInstaList item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default FeaturedInsta;
