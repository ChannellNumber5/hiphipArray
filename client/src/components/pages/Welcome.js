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
  IconButton,
} from "@chakra-ui/react";
import pic from "../../assets/Collaboray.jpg";

export default function Welcome() {
  return (
    <div>
      <p>
        <Flex
          direction="column"
          background="white"
          p={12}
          minWidth="max-content"
          alignItems="center"
        >
          {/* <Heading color="#A465FF" mb={6}>
            A Space To Create
          </Heading> */}
          <img src={pic} alt="mypic" />
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
        </Flex>
      </p>
    </div>
  );
}
