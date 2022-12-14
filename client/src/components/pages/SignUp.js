import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
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

function Signup(props) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    navigate('/myprofile');
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
              Sign Up
            </Heading>
            <Input
              placeholder="USERNAME"
              variant="filled"
              color="black"
              background="white"
              _placeholder={{ color: "#A465FF" }}
              border="1px"
              borderColor="#A465FF"
              mb={3}
              name="username"
              type="username"
              id="username"
              onChange={handleChange}
              value={formState.username}
            />
            <Input
              placeholder="EMAIL"
              variant="filled"
              color="black"
              background="white"
              _placeholder={{ color: "purple.500" }}
              border="1px"
              borderColor="purple.500"
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
              _placeholder={{ color: "purple.500" }}
              border="1px"
              borderColor="purple.500"
              mb={3}
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
              value={formState.password}
            />
            <Button bg="#A465FF" color="white" variant="solid" type="submit" marginBottom="7px">
              Sign Up
            </Button>
            <Button bg="#A465FF" color="white" variant="solid" type="submit">
            <Link to="/login">??? Go to Login</Link>
            </Button>
          </Flex>
        </Flex>
      </form>
    </div>
  );
}

export default Signup;
