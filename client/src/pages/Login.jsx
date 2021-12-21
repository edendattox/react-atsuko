import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-weight: 500px;
  font-size: 40px;
  text-align: center;
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 30px;
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4;
  outline: none;
  border-radius: 50px;
  padding: 12px 20px;
  color: #393c43;
  font-weight: 600;
  :focus {
    border: 1px solid #d6d6d6;
    transition: all 0.2s;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: 3px solid #171a20;
  width: 100%;
  padding: 10px 40px;
  border-radius: 50px;
  text-transform: uppercase;
  color: #171a20;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  margin-bottom: 20px;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [token, setToken] = useToken("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${process.env.REACT_APP_DOMAIN}/api/auth/login`,
      {
        username,
        password,
      }
    );
    const { accessToken } = response.data;
    console.log(accessToken);
    setToken(accessToken);
    history.push("/");
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} type="submit">
            Log In
          </Button>
        </Form>
        {/* {error && <Error>Something went wrong...</Error>} */}
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button>CREATE A NEW ACCOUNT</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
