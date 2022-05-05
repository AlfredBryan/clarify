/* eslint-disable react-hooks/exhaustive-deps */
import { Box, List, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { dashboardLinks } from "../../data/SidebarData";
import Logo from "../../assets/Logo.png";
import Help from "../../assets/help.png";

export const Sidebar = (props) => {
  const [minHeight, setMinHeight] = useState(null);

  useEffect(() => {
    setMinHeight(window.innerHeight);
  });

  useEffect(() => {
    function handleResize() {
      setMinHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return function cleanup() {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  });

  return (
    <Box
      ref={props.node}
      d={{ base: props.open ? "flex" : "none", lg: "flex" }}
      w={{ base: "60%", sm: "70%", md: "35%", lg: "20%", xl: "30%" }}
      h={minHeight}
      flexDirection="column"
      backgroundColor="#fff"
      zIndex="10"
      pl="3%"
      overflowY="auto"
      position={{ base: "fixed", lg: "static" }}
      transition="translate ease-in 1s"
      boxShadow={"4px 0px 16px rgba(16, 30, 115, 0.08)"}
    >
      <Box pt="24px" mb="80px">
        <Image
          overflow="hidden"
          src={Logo}
          outline="none"
          cursor="pointer"
          border="none"
          alt="logo"
          width={"128px"}
          height="32px"
        />
      </Box>
      <List
        styleType="none"
        display="flex"
        w="100%"
        fontFamily="Poppins"
        flexDir="column"
        align="center"
        py={8}
      >
        {dashboardLinks?.map((item, index) => {
          return (
            <Flex
              h={"48px"}
              gap={"12px"}
              align={"center"}
              width={"256px"}
              key={index}
              cursor="pointer"
            >
              <Box w={"14px"} h="13.3px" className="" alt="icon">
                {item?.icon}
              </Box>
              <Box
                as={Link}
                href={item.to}
                onClick={props.close}
                _focus={{ outline: "none" }}
                _hover={{ textDecor: "none " }}
              >
                <Text
                  fontFamily="Lato"
                  fontWeight={"700"}
                  lineHeight="20px"
                  fontSize={{ base: "16px", md: "14px" }}
                  color={item?.to === "/dashboard" ? "#0A459F" : ""}
                >
                  {item?.name}
                </Text>
              </Box>
            </Flex>
          );
        })}
        <Box borderBottom={"1px solid #E8E8E8"} />
        <Flex
          h={"48px"}
          gap={"12px"}
          align={"center"}
          width={"256px"}
          cursor="pointer"
        >
          <Image src={Help} alt="help" w={"14px"} h="13.3px" />
          <Box _focus={{ outline: "none" }} _hover={{ textDecor: "none " }}>
            <Text
              fontFamily="Lato"
              fontWeight={"700"}
              lineHeight="20px"
              fontSize={{ base: "16px", md: "14px" }}
            >
              Help
            </Text>
          </Box>
        </Flex>
      </List>
    </Box>
  );
};
