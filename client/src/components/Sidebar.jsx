import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../utils/sidebarData";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 280px;
  background-color: #1b133c;
  position: fixed;
  padding: 70px 20px 20px 20px;
  gap: 25px;
  min-width: 280px;
  top: 0;
  bottom: 0;
  z-index: 2;
  margin-top: 70px;
`;

const List = styled.li`
  text-decoration: none;
  list-style-type: none;
  margin-top: 20px;
`;

const Title = styled.p`
  color: white;
`;

const Line = styled.hr`
  margin-top: 20px;
  background-color: gray;
`;

const Sidebar = () => {
  return (
    <Container>
      {SidebarData.map((item, index) => {
        return (
          <List key={index}>
            <Link to={item.path} style={{ textDecoration: "none" }}>
              <Title>{item.title}</Title>
            </Link>
            <Line />
          </List>
        );
      })}
    </Container>
  );
};

export default Sidebar;
