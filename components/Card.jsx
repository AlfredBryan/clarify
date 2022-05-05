import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Card = ({ children, p, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"0px 12px 26px rgba(16, 30, 115, 0.06)"}
      rounded={"md"}
      p={p ? p : 10}
      overflow="scroll"
      {...rest}
    >
      {children}
    </Box>
  );
};

export { Card };
