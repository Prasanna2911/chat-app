import { Box, Tabs, Container, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

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
        <Text
          color="black"
          fontSize="4xl"
          fontFamily="work sans"
          fontWeight="500"
        >
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
            <Tabs.Trigger
              value="tab-1"
              width="50%"
              _selected={{ background: "blue", color: "white" }}
            >
              Login
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab-2"
              _selected={{ background: "blue", color: "white" }}
            >
              Sign Up
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab-1">
            <Login></Login>
          </Tabs.Content>
          <Tabs.Content value="tab-2">
            <Signup></Signup>
          </Tabs.Content>
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
