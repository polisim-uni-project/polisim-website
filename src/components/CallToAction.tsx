import { Box, Flex, Text, Button, Link, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

function CallToAction() {
	const [open, setOpen] = useState(false);

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" py="6" px="10" bg="gray.100">
      test
    </Flex>
  );
}

export default CallToAction;