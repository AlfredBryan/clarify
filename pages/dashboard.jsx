import { Box, Flex, Text } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import { Card } from "../components/Card";
import { Income } from "../components/charts/income";
import { AppointmentGraph } from "../components/charts/appointments";
import { Analytics } from "../components/analytics";
import { CustomTable, TableWrapper } from "../components/shared/CustomTable";
import { tableCols, appointment_activity } from "../data/table";

export const Dashboard = () => {
  const tableData = appointment_activity?.map((app) => ({
    col1: (
      <Flex align={"center"}>
        <Box bg={"grey"} h="32px" w="32px" borderRadius={"50%"} />
        <Text ml="3px">{app?.name || "N/A"}</Text>
      </Flex>
    ),
    col2: app?.email || "N/A",
    col3: app?.date || "N/A",
    col4: app?.visit || "N/A",
    col5: app?.ch || "N/A",
    col6: app?.plan || "N/A",
    col7: (
      <Flex gap="16px" align={"center"}>
        <EditIcon />
        <DeleteIcon color={"#FF6760"} />
      </Flex>
    ),
  }));

  return (
    <>
      <Analytics />
      <Flex
        direction={{ base: "column", lg: "row" }}
        w="100%"
        justify={"space-between"}
        mt="3rem"
      >
        <Card
          mb={{ base: "15px", lg: "0px" }}
          borderRadius="8px"
          padding="24px"
          w={{ base: "100%", lg: "48.5%" }}
        >
          <Flex mb="20px" align={"center"} justify={"space-between"}>
            <Text fontWeight={"700"} fontSize="20px">
              $ 112,174
            </Text>
            <Text color={"#A0A4A8"} fontSize="12px">
              Income in current month
            </Text>
          </Flex>
          <Income />
        </Card>
        <Card
          mb={{ base: "15px", lg: "0px" }}
          borderRadius="8px"
          padding="24px"
          w={{ base: "100%", lg: "48.5%" }}
        >
          <Flex mb="20px" align={"center"} justify={"space-between"}>
            <Text fontWeight={"700"} fontSize="20px">
              5,210
            </Text>
            <Text color={"#A0A4A8"} fontSize="12px">
              Total Number of Appointment
            </Text>
          </Flex>
          <AppointmentGraph />
        </Card>
      </Flex>
      <Card mb="2rem" borderRadius="8px" mt="30px" w="100%">
        <Text
          pt="24px"
          fontWeight={"700"}
          fontSize={"20px"}
          pl="24px"
          mb="18px"
        >
          Appointment Activity
        </Text>
        <TableWrapper>
          <CustomTable data={tableData} columns={tableCols} />
        </TableWrapper>
      </Card>
    </>
  );
};
