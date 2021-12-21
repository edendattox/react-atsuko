import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { featured } from "../data";
import FeaturedList from "./FeaturedList";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const Featured = () => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const getAccessories = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_DOMAIN}/api/products`
        );

        setAccessories(res.data.slice(0, 8));
      } catch (e) {
        throw new Error("error fetching data");
      }
    };
    getAccessories();
  }, []);

  return (
    <Container>
      {accessories.map((item) => (
        <FeaturedList item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Featured;
