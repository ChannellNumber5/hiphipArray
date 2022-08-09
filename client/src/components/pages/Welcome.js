import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Box,
  Heading,
  Input,
  Wrap,
  WrapItem,
  Stack,
  IconButton
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Welcome() {
  return (
    <div>
      <p>
      <Flex
            minWidth="max-content"
            alignItems="center"
            gap="2"
            background="black"
            border="1px"
            borderColor="#A465FF"
          >
            <Box p="2">
              <Heading color="#A465FF" size="md">
                ARRAY [ ]
              </Heading>
            </Box>
            <Spacer />
            <Stack direction="row" spacing={4}>
              <Link to="/">
                <Button bg="#A465FF" color="white" variant="solid">
                  Home
                </Button>
              </Link>
              <IconButton
                variant="outline"
                color="#A465FF"
                border="1px"
                borderColor="#A465FF"
                icon={<HamburgerIcon />}
              />
            </Stack>
          </Flex>
        <Flex
          direction="column"
          background="white"
          p={12}
          minWidth="max-content"
          alignItems="center"
        >
          <Heading color="#A465FF" mb={6}>
            A Space To Create
          </Heading>
          <Heading color="#A465FF">[ ]</Heading>
          <Wrap>
            <WrapItem>
              <Link to="/login">
                <Button bg="#A465FF" color="white" variant="solid">
                  Login
                </Button>
              </Link>
            </WrapItem>
            <WrapItem>
              <Link to="/signup">
                <Button
                  bg="#A465FF"
                  color="#A465FF"
                  variant="solid"
                  background="white"
                  border="1px"
                  borderColor="A465FF"
                >
                  SignUp
                </Button>
              </Link>
            </WrapItem>
          </Wrap>

          {/* <Link to="/signup">
            <button colorScheme="purple" variant="solid">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button>Log in</button>
          </Link> */}
        </Flex>
      </p>
    </div>
  );
}
