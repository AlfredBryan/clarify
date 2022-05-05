import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { dashData } from "../data/DashboardData";
import { Card } from "./Card";

export const Analytics = () => {
  return (
    <>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        justify={"space-between"}
        w={"100%"}
      >
        {dashData?.map((data, idx) => (
          <Card
            mb={{ base: "15px", lg: "0px" }}
            borderRadius="8px"
            p={"26px"}
            key={idx}
          >
            <Flex align={"center"} gap={"34px"}>
              <Image
                width={"35px"}
                height={"32.45px"}
                src={data?.image}
                alt=""
              />
              <Box>
                <Text
                  fontWeight={"700"}
                  fontSize={"13px"}
                  lineHeight={"20px"}
                  fontFamily="Lato"
                >
                  {data?.name}
                </Text>
                <Text
                  fontWeight={"400"}
                  fontSize={"18px"}
                  color={"#0A459F"}
                  lineHeight="24px"
                  mt="4px"
                >
                  {data?.number}
                </Text>
              </Box>
            </Flex>
          </Card>
        ))}
      </Flex>
    </>
  );
};
