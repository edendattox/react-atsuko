import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useToken } from "../auth/useToken";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-weight: 500px;
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
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
`;

const Register = () => {
  const [token, setToken] = useToken();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      `${process.env.REACT_APP_DOMAIN}/api/auth/register`,
      {
        username,
        email,
        password,
      }
    );
    console.log(response.data);
    const { accessToken } = response.data;
    setToken(accessToken);
    history.push("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP</Title>
        <Form>
          <Input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            disabled={!email || !password || password !== confirmPassword}
            type="submit"
            onClick={onSignUp}
          >
            Sign Up
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
