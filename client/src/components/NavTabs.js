import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { HamburgerIcon} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

import { Link } from "react-router-dom";

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
        <Menu>
  <MenuButton
    as={HamburgerIcon}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem>
    <Link to="/myprofile">My Profile</Link>
    </MenuItem>
    <MenuItem>
    <Link to="/Projects">Find Projects</Link>
    </MenuItem>
    <MenuItem>
    <Link to="/Arrayers">Find Arrayers</Link>
    </MenuItem>
    <MenuItem>
    <Link to="/Requests">My Requests</Link>
    </MenuItem>
  </MenuList>
</Menu>
        </div>
      </Flex>
    </div>
  );
}
