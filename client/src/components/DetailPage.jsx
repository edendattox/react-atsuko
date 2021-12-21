import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Add, Remove } from "@material-ui/icons";
import { devices } from "../device";

const Container = styled.div`
  display: flex;
  height: 100%;
  gap: 50px;
  background-color: #e9e9e9;
  padding: 70px;
  margin: 100px 20px;
  border-radius: 20px;
  @media ${devices.tabletL} {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const WrapperDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #f3f3f3;
  height: 100%;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  margin-right: 20px;
`;

const Header = styled.h3`
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const SubHeader = styled.p`
  font-size: 18px;
  letter-spacing: 2px;
  word-spacing: 1px;
  text-transform: uppercase;
`;

const Price = styled.p`
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  word-spacing: 1px;
`;

// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
//   margin-top: 50px;
//   width: 100%;
//   background-color: #1b133c;
//   color: white;
//   font-size: 20px;
//   text-transform: uppercase;
// `;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  flex-direction: column;
  gap: 50px;
  width: 100%;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 20px;
  color: #fff;
  background-color: #3e6ae1;
  border: none;
  padding: 12px 40px;
  transition: all 0.4s;
  padding: 12px 40px;

  &:hover {
    background-color: #3457b1;
  }
`;

const DetailPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  // const id = location.pathname.split("/")[2];
  // const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const id = location.pathname.split("/")[3];

  useEffect(() => {
    const getAccessories = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_DOMAIN}/api/${cat}/find/${id}`
        );
        setData(res.data);
        setLoading(false);
      } catch (e) {
        throw new Error("error fetching data");
      }
    };
    getAccessories();
  }, []);

  const handleClick = () => {
    dispatch(addProduct({ ...data, quantity, color, size }));
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  if (loading) {
    return <div>loading:</div>;
  }

  return (
    <Container>
      <Wrapper>
        <Img src={data.img} />
      </Wrapper>
      <WrapperDetail>
        <Header>CLOTHES</Header>
        <SubHeader>{data.title} </SubHeader>
        <Price>{data.price}</Price>
        <AddContainer>
          <AmountContainer>
            <Remove onClick={() => handleQuantity("dec")} />
            <Amount>{quantity}</Amount>
            <Add onClick={() => handleQuantity("inc")} />
          </AmountContainer>
          <Button onClick={handleClick}>ADD TO CART</Button>
        </AddContainer>
      </WrapperDetail>
    </Container>
  );
};

export default DetailPage;
