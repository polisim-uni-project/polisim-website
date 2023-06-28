import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" bg="polisimBlue.300" mt="200px" py={4}>
      <Flex justifyContent="center">
        <Text fontSize="sm" color="polisimBlue.200">
          &copy; 2023 Polisim. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
