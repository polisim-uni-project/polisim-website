import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Button, Link, Hide, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { Github, Network, Phone, Clapperboard, User } from 'lucide-react';


function NavigationLink(props: any) {
  const buttonHoverStyle = {
    "&:hover": {
      bg: "polisimBlue.400"
    },
  }

  return (
    <Link href={props.linkTo} mr="4" style={{ textDecoration: 'none' }}>
      <Button rightIcon={props.icon} variant="ghost" color="polisimBlue.100" fontSize="sm" sx={buttonHoverStyle}>{props.linkText}</Button>
    </Link>
  )
}

function NavigationPopup(props: any) {
  const buttonHoverStyle = {
    "&:hover": {
      bg: "polisimBlue.400"
    },
  }

  return (
    <Popover>
      <PopoverTrigger>
      <Button rightIcon={props.icon} variant="ghost" color="polisimBlue.100" fontSize="sm" mr="16px" sx={buttonHoverStyle}>{props.text}</Button>
      </PopoverTrigger>
      <PopoverContent width="auto">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader color="polisimBlue.200" bg="polisimBlue.500"><b>Email:</b></PopoverHeader>
        <PopoverBody>peifer@hm.edu<br/>schnugg@hm.edu<br/>nils.tesch@hm.edu<br/>linus.vock0@hm.edu</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}


function LogInButton(props: any) {
  const buttonHoverStyle = {
    "&:hover": {
      bg: "polisimBlue.100"
    },
  }

  return (
    <Popover>
      <PopoverTrigger>
      <Button rightIcon={<User style={{ width: "17px" }}/>} variant="solid" bg="polisimBlue.200" color="white" fontSize="sm" size="sm" ml="10px" sx={buttonHoverStyle}>log in</Button>
      </PopoverTrigger>
      <PopoverContent width="auto">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader color="polisimBlue.200" bg="polisimBlue.500" width="160px"><b>coming soon...</b></PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}


function Navbar() {
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
      bg="#ffffff99"
    >
      <Box as={Link} href="/" mr="auto" style={{ textDecoration: 'none' }} sx={{ "&:hover": { color: "polisimBlue.100" }}}>
        <HStack>
          <img className="logo" width="29px" src="/images/polisim_logo.svg" />
          <Heading fontSize="xl" fontWeight="bold" color="polisimGray.300">POLISIM</Heading>
        </HStack>
        
      </Box>

      <Hide breakpoint="(max-width: 820px)">
        <Box display={{ base: "none", md: "block" }}>
          <NavigationLink linkTo="#hero-end" linkText="features" icon={<Network style={{ width: "17px" }}/>}/>
          <NavigationLink linkTo="#demo" linkText="demo" icon={<Clapperboard style={{ width: "17px" }}/>}/>
          <NavigationPopup text="contact" icon={<Phone style={{ width: "17px" }}/>}/>
          <NavigationLink linkTo="https://github.com/polisim-uni-project" linkText="GitHub" icon={<Github style={{ width: "17px" }}/>}/>
          <LogInButton />
        </Box>
      </Hide>

    </Flex>
  );
}

export default Navbar;
