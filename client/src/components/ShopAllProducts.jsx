import React from "react";
import styled from "styled-components";
import { devices } from "../device";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  @media ${devices.desktop} {
    width: 400px;
  }
  @media ${devices.desktopM} {
    width: 350px;
  }
  @media ${devices.mobileL} {
    width: 200px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: 250px;
  @media ${devices.mobileL} {
    height: 200px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 14px;
  color: black;
  margin-bottom: 10px;
  text-align: center;
`;

const ShopAllProducts = ({ item }) => {
  return (
    <Container>
      <Link to={`/detail/item/${item._id}`} style={{ textDecoration: "none" }}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Title>{item.price}</Title>
        </Info>
      </Link>
    </Container>
  );
};

export default ShopAllProducts;
