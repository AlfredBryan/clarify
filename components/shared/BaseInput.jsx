import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

export const BaseInput = ({
  placeholder,
  type,
  leftIcon,
  width,
  left,
  ...rest
}) => {
  return (
    <Box>
      <InputGroup>
        <Input
          fontSize="1.3rem"
          type={type}
          border="none"
          borderRadius="100px"
          h="4.2rem"
          w={width}
          pl="4rem"
          placeholder={placeholder}
          {...rest}
          className="inputType"
          backgroundColor={"#fff"}
        />
        <InputLeftElement
          top="40%"
          transform="translateY(-30%)"
          left={left || "1rem"}
        >
          {leftIcon}
        </InputLeftElement>
      </InputGroup>
    </Box>
  );
};
