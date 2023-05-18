import { Box, Flex, Text, Button, Link, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

function CallToAction() {
  const { colorMode, toggleColorMode } = useColorMode();
	const [open, setOpen] = useState(false);

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" py="6" px="10" bg={colorMode === "light" ? "gray.100" : "gray.800"}>
      test
    </Flex>
  );
}

export default CallToAction;