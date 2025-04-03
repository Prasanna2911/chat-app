import { Box, Tabs, Container, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Homepage = () => {
  const [value, setValue] = useState("first");
  return (
    <Container centerContent maxW="xl">
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        w="100%"
        bg={"white"}
        borderRadius="lg"
        m="40px 0 15px 0"
      >
        <Text color="black" fontSize="4xl" fontFamily="work sans">
          Talk-A-Tive
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" color="black">
        <Tabs.Root variant="enclosed" maxW="md" fitted defaultValue={"tab-1"}>
          <Tabs.List
            mb="1em"
            display="flex"
            background="white"
            padding={2}
            borderRadius="8px"
          >
            <Tabs.Trigger value="tab-1" width="50%">
              Login
            </Tabs.Trigger>
            <Tabs.Trigger value="tab-2">Sign Up</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab-1">First panel</Tabs.Content>
          <Tabs.Content value="tab-2">Second panel</Tabs.Content>
        </Tabs.Root>
      </Box>
    </Container>
  );
};

export default Homepage;

{
  /* <Tabs.Content value="first">First panel</Tabs.Content> */
}
{
  /*  */
}
