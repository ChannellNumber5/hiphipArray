import React from "react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  flexbox,
  WrapItem,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const styles = {
  container: {
    display: "flex",
    maxWidth: "750px",
  },
  imageHolder: {
    flex: ".25",
  },
  nameContainer: {
    flex: ".75",
    borderWidth: "2px",
    borderColor: "#652CB3",
  },
};

export default function Project() {
  return (
    <div>
      <Container maxW="1000px">
        <Heading color="#652CB3">My Projects</Heading>
        <div style={styles.container}>
          <Box
            // style={styles.nameContainer}
            // borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Box
                  color="purple"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="m"
                  ml="2"
                  mb="4"
                >
                  <Heading color="#652CB3">You have no projects!</Heading>
                </Box>
              </Box>
              <Flex justifyContent="center">
                <WrapItem>
                  <Button
                    // bg="#A465FF"
                    color="white"
                    variant="solid"
                    background="#A465FF"
                    type="submit"
                  >
                    <Link to="/createproject">Create New Project</Link>
                  </Button>
                </WrapItem>
              </Flex>
            </Box>
          </Box>
        </div>
      </Container>
    </div>
  );
}
