import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BaseInput } from "./shared/BaseInput";
import Search from "../assets/search.png";
import Notification from "../assets/notification.png";

export const Header = () => {
  return (
    <>
      <Flex
        w="100%"
        justify={"space-between"}
        align="center"
        p={{ base: "10px 10px 10px 10px", lg: "24px 40px 0px 38px" }}
      >
        <BaseInput
          placeholder={"Search"}
          width={{ base: "200px", lg: "350px" }}
          leftIcon={
            <Image
              width={"14px"}
              height={"13.81px"}
              src={Search}
              alt="search"
            />
          }
        />
        <Flex align={"center"}>
          <Box pos={"relative"}>
            <Image src={Notification} alt="notify" />
            <Flex
              border={"2px solid #F6F8FB"}
              pos={"absolute"}
              bottom="60%"
              right={"-40%"}
              align={"center"}
              justify="center"
              h={"16px"}
              w="16px"
              bg={"#FF6760"}
              borderRadius="50%"
            >
              <Text fontWeight={"700"} fontSize={"10px"} color={"#fff"}>
                9
              </Text>
            </Flex>
          </Box>
          <Box ml="20px" bg="grey" borderRadius={"50%"} w="40px" h="40px" />
        </Flex>
      </Flex>
    </>
  );
};
