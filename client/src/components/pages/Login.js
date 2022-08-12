import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Box,
  Heading,
  Input,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Login(props) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token)
      navigate('/myprofile');
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <form onSubmit={handleFormSubmit}>
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex
            direction="column"
            background="purple.100"
            border="1px"
            borderColor="#A465FF"
            p={12}
            rounded={16}
          >
            <Heading color="#A465FF" mb={6}>
              Login
            </Heading>
            <Input
              placeholder="EMAIL"
              variant="filled"
              color="black"
              background="white"
              _placeholder={{ color: "#A465FF" }}
              border="1px"
              borderColor="#A465FF"
              mb={3}
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
              value={formState.email}
            />

            <Input
              placeholder="PASSWORD"
              variant="filled"
              color="black"
              background="white"
              _placeholder={{ color: "#A465FF" }}
              border="1px"
              borderColor="#A465FF"
              mb={3}
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
              value={formState.password}
            />
            {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
            <Button bg="#A465FF" color="white" border="1px" variant="solid" type="submit" marginBottom="5px">
              Login
            </Button>
            <Button bg="#A465FF" color="white" border="1px" variant="solid" type="submit">
            <Link to="/signup">← Go to Signup</Link>
            </Button>
          </Flex>
        </Flex>
      </form>
    </div>
  );
}

export default Login;
