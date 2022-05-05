import { Box, Flex } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";
import React from "react";
import Logo from "../assets/Logo.png";

export const MobileHeader = ({ toggleSideNav, openSideNav }) => {
  return (
    <>
      <Flex
        justify={"space-between"}
        align="center"
        padding={"2rem"}
        bg="#fff"
        display={{ base: "flex", lg: "none" }}
      >
        <Image
          overflow="hidden"
          src={Logo}
          alt="logo"
          width={"80px"}
          height="20px"
        />
        <Box>
          {openSideNav ? (
            <CloseIcon onClick={toggleSideNav} />
          ) : (
            <HamburgerIcon onClick={toggleSideNav} />
          )}
        </Box>
      </Flex>
    </>
  );
};
