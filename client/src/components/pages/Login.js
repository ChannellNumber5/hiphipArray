import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Box,
  Heading,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of username or password
    if (inputType === "password") {
      setPassword(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
  };

  return (
    <div>
      {/* <h1>Login</h1> */}
      <p>
        {/* <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        /> */}
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="2"
          background="black"
          border="1px"
          borderColor="purple"
        >
          <Box p="2" color="purple.500">
            <Heading size="md">ARRAY [ ]</Heading>
          </Box>
          <Spacer />
          <HamburgerIcon color="purple.500" />
        </Flex>
        {/* <Link to="/myprofile">
          <button>Login</button>
        </Link> */}
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex
            direction="column"
            background="purple.100"
            border="1px"
            borderColor="purple.500"
            p={12}
            rounded={16}
          >
            <Heading color="purple.500" mb={6}>Login</Heading>
            <Input
              placeholder="EMAIL"
              variant="filled"
              color="white"
              background="white"
              _placeholder={{ color: "purple.500" }}
              border="1px"
              borderColor="purple.500"
              mb={3}
              type="email"
            />
            <Input
              placeholder="PASSWORD"
              variant="filled"
              color="white"
              background="white"
              _placeholder={{ color: "purple.500" }}
              border="1px"
              borderColor="purple.500"
              mb={3}
              type="text"
            />
            <Button colorScheme="purple" variant="solid">
              Login
            </Button>
          </Flex>
        </Flex>
      </p>
    </div>
  );
}
