import { Box, Flex, Text, Button, Link, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";


function NavigationLink(props: any) {

  const buttonHoverStyle = {
    "&:hover": {
      bg: "polisimBlue.400"
    },
  }

  return (
    <Link href={props.linkTo} mr="4" style={{ textDecoration: 'none' }}>
      <Button variant="ghost" color="polisimBlue.100" fontSize="sm" sx={buttonHoverStyle}>{props.linkText}</Button>
    </Link>
  )
}


function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
	const [open, setOpen] = useState(false);

  return (
    <Flex 
      as="nav"
      zIndex={2} 
      align="center"
      justify="space-between" 
      wrap="wrap" 
      py="3" px="10" 
      pl={{ base: "50", lg: "150", xl: "200", '2xl': "250" }}
      pr={{ base: "50", lg: "150", xl: "200", '2xl': "250" }} 
      bg={colorMode === "light" ? "#ffffff99" : "gray.800"}
    >
      <Box as={Link} href="/" mr="auto" style={{ textDecoration: 'none' }} sx={{ "&:hover": { color: "polisimBlue.100" }}}>
        <Text fontSize="xl" fontWeight="bold" color="gray.750">POLISIM</Text>
      </Box>

      <Box display={{ base: "none", md: "block" }}>
        <NavigationLink linkTo="/features" linkText="features"/>
        <NavigationLink linkTo="/services" linkText="services"/>
        <NavigationLink linkTo="/contact" linkText="contact"/>
      </Box>

		  <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
}

export default Navbar;
