import { Badge } from "@material-ui/core";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useUser } from "../auth/useUser";

const Container = styled.div`
  position: fixed;
  height: 60px;
  box-shadow: 0 -0.5px #6a6a6a inset;
  padding: 5px 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: #ffffff;
  z-index: 2;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
`;

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const user = useUser();
  const quantity = useSelector((state) => state.cart.quantity);
  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Left onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <CloseIcon />
          ) : (
            <RiBarChartHorizontalLine
              style={{ fontSize: "18px", color: "black", cursor: "pointer" }}
            />
          )}
        </Left>
        <Center>
          <Link to="/">
            <Logo>
              <img
                src="https://cdn.shopify.com/s/files/1/0070/1700/5113/files/AtsukoSiteLogo_9f065aae-ad08-42df-9b9d-da9836dde88a_120x.png?v=1613893342"
                alt="#"
              />
            </Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="login" style={{ textDecoration: "none" }}>
            {user ? (
              <MenuItem onClick={logOut}>LOG OUT</MenuItem>
            ) : (
              <MenuItem>LOG IN</MenuItem>
            )}
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <FaOpencart style={{ fontSize: "18px", color: "black" }} />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
