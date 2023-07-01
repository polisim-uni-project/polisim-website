import {
  ChakraProvider,
  Box,
  extendTheme,
  ColorModeScript,
  Hide,
  Text,
  Flex
} from "@chakra-ui/react"
import Navbar from "./components/Navigation"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Vision from "./components/Vision"
import Process from "./components/Process"
import Footer from "./components/Footer"
import Demo from "./components/Demo"

const theme = extendTheme({
  colors: {
    polisimBlue: {
      100: "#1E44A3",
      200: "#3D6BDE",
      300: "#CEDAFC",
      400: "#E1E9FB",
      500: "#F5F8FF",
    },
    polisimGray: {
      100: "#FDFDFD",
      200: "#FAFAFA",
      300: "#282828"
    }
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
})


const responsiveMargin: { [key: string]: string } = {
  base: "15%",
  md: "15%",
  lg: "10%",
  xl: "15%",
  '2xl': "20%"
};


export const App = () => (

  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />

    <style>
      @import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&display=swap');
    </style>

    <Navbar/>

    <Box position="absolute" top="0" zIndex={-1} w='100%' h='500px' bgGradient='linear(to-tr, #ffffff26 45%, #FF00A821)' />
    <Box position="absolute" top="0" zIndex={-1} w='100%' h='500px' bgGradient='linear(to-tl, #ffffff26 45%, #486CC759)' />

    <Hero/>
    
    <Features/>
    
    <Box
      position="absolute"
      top="20%"
      zIndex={-1}
      w="150vw"
      overflow="hidden"
      left="-100vw"
      h="1500px"
      bgGradient="radial(#FF00A819, #ffffff26 65%)"
    />
    <Box
      position="absolute"
      top="40%"
      zIndex={-1}
      w="150vw"
      overflow="hidden"
      right="-100vw"
      h="1000px"
      bgGradient="radial(#486CC745, #ffffff26 65%)"
    />

    <Vision/>

    <Process/>

    <Demo/>

    <Footer/>

    <Box
      position="absolute"
      bottom="12%"
      zIndex={-1}
      w="150vw"
      overflow="hidden"
      right="-100vw"
      h="1000px"
      bgGradient="radial(#FF00A819, #ffffff26 65%)"
    />
    <Box
      position="absolute"
      bottom="0%"
      zIndex={-1}
      w="150vw"
      overflow="hidden"
      left="-100vw"
      h="1000px"
      bgGradient="radial(#486CC745, #ffffff26 65%)"
    />

  </ChakraProvider>
)
