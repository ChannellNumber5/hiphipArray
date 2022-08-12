import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  flexbox,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import imageplaceholder from "../assets/imageplaceholder.png";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

const styles = {
  imageHolder: {
    flex: ".11",
  },
  nameContainer: {
    flex: ".9",
    borderWidth: "2px",
    borderColor: "#652CB3",
  },
  container: {
    marginTop: ".9em",
    marginBottom: ".9em",
  },
};

export default function RequestBoxes() {
  return (
    <div>
      <div style={styles.container}>
        <Flex color="white" justify="center" align="center">
          <Center w="50%" h="100%">
            <Box style={styles.imageHolder}>
              <img src={imageplaceholder} />
            </Box>
            <Box
              style={styles.nameContainer}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              {" "}
              <Heading as="h3" size="lg" mb="2" color="#652CB3">
                <Center h="100px">Accept Request</Center>
              </Heading>
            </Box>
          </Center>
        </Flex>
      </div>
    </div>
  );
}
