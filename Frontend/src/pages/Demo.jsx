import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import { RiArrowRightLine, RiMailLine } from "react-icons/ri";

const Demo = () => {
  return (
    <div>
      <HStack>
        <Button colorPalette="teal" variant="solid">
          <RiMailLine /> Email
        </Button>
        <Button colorPalette="teal" variant="outline">
          Call us <RiArrowRightLine />
        </Button>
      </HStack>
    </div>
  );
};

export default Demo;
