import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import TshirtsList from "./TshirtsList";

const Container = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
`;

const Header = styled.div``;

const Title = styled.h2`
  margin-left: 100px;
  text-transform: uppercase;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const Line = styled.hr`
  width: 80%;
  margin-top: 20px;
  margin-left: 50px;
`;

console.log(process.env.REACT_APP_DOMAIN);

const Tshirts = () => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const getAccessories = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/item`);

        setAccessories(res.data);
      } catch (e) {
        throw new Error("error fetching data");
      }
    };
    getAccessories();
  }, []);

  return (
    <Container>
      <Header>
        <Title>t-shirts</Title>
        <Line />
      </Header>
      <Row>
        {accessories.map((item) => (
          <TshirtsList item={item} />
        ))}
      </Row>
    </Container>
  );
};

export default Tshirts;
