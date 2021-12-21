import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { newData } from "../utils/newData";
import NewLIst from "./NewLIst";

const Container = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
`;

const Header = styled.div``;

const Title = styled.h2`
  margin-left: 100px;
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

const New = () => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const getAccessories = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_DOMAIN}/api/products`
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
        <Title>NEW ARRIVALS</Title>
        <Line />
      </Header>
      <Row>
        {accessories.map((item) => (
          <NewLIst item={item} key={item._id} />
        ))}
      </Row>
    </Container>
  );
};

export default New;
