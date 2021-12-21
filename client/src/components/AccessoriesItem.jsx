import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { accData } from "../utils/accData";
import AccessoriesItemList from "./AccessoriesItemList";
import axios from "axios";

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

const AccessoriesItem = () => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const getAccessories = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_DOMAIN}/api/accessories`
        );

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
        <Title>Accessories</Title>
        <Line />
      </Header>
      <Row>
        {accessories.map((item) => (
          <AccessoriesItemList item={item} key={item._id} />
        ))}
      </Row>
    </Container>
  );
};

export default AccessoriesItem;
