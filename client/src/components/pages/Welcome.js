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
          borderColor="purple"
        >
          <Box p="2" color="purple.500">
            <Heading size="md">COLLABARRAY [ ]</Heading>
          </Box>
          <Spacer />
        </Flex>
        <Flex
          direction="column"
          background="white"
          p={12}
          minWidth="max-content"
          alignItems="center"
        >
          <Heading color="purple.500" mb={6}>
            A Space To Create
          </Heading>
          <Heading color="purple.500">[     ]</Heading>
          <Button colorScheme="purple" variant="solid">
            Login
          </Button>

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
