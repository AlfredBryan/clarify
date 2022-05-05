import { Box, Flex } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

import { useOnClickOutside } from "../hooks/hooks";
import { Sidebar } from "../components/shared/Sidebar";
import { Dashboard } from "./dashboard";
import { Header } from "../components/header";
import { MobileHeader } from "../components/mobile-header";

const UserDashboard = () => {
  const [openSideNav, setSideNav] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setSideNav(false));

  const toggleSideNav = () => setSideNav(!openSideNav);
  const closeSideNav = () => setSideNav(false);

  return (
    <Flex w="100%" backgroundColor="#E5E5E5" h="100vh" position="relative">
      <Sidebar
        open={openSideNav}
        toggle={toggleSideNav}
        close={closeSideNav}
        node={node}
      />

      <Box h="100vh" overflowY={"scroll"} w={"100%"}>
        <MobileHeader toggleSideNav={toggleSideNav} openSideNav={openSideNav} />
        <Header />
        <Box
          w="100%"
          h="100%"
          p={{ base: "10px 10px 10px 10px", lg: "30px 40px 30px 38px" }}
        >
          <Dashboard />
        </Box>
      </Box>
    </Flex>
  );
};

export { UserDashboard };
