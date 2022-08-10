import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function NavTabs() {
  return (
    <div>
      <Flex
        bg="black"
        w="100%"
        p={4}
        color="#A465FF"
        fontSize="40px"
        fontWeight="bold"
        justifyContent="space-between"
      >
        <Box>
          <div>Collabarray [ ]</div>
        </Box>
        <Spacer />
        <div>
          <HamburgerIcon />
        </div>
      </Flex>
    </div>
  );
}
