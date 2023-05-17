import {
  Box,
  Text,
  HStack,
  Button,
  Divider
} from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import ThreeCanvas from "./ThreeCanvas";

function HeroSection () {
	return (
		<Box mt="50" mr="250" ml="250" height="auto">
			<HStack alignContent="top">
				<Box width="50%">
					<Text fontSize={["70px"]} lineHeight={["80px"]} fontWeight="700" color="polisimGray.300">
						Immersive Police Training through <Text bgGradient='linear(to-r, polisimBlue.100, polisimBlue.200 20%, polisimBlue.300)' bgClip='text'>Simulation</Text>
					</Text>
					<Text pt="30" fontSize={["18px"]} maxWidth="80%" color="polisimGray.300">
							Simulationsbasiertes Polizeitraining durch KI-generierte Szenarien: Verbesserung von Einsatzsituationen und Unterstützung der polizeipsychologischen Arbeit.
					</Text>
					<HStack mt="30" gap="2">
						<Button size="lg" variant="solid" bg="polisimBlue.300" color="polisimBlue.200">
								coming soon...
						</Button>
						<Button rightIcon={<ArrowForwardIcon />} size="lg" variant="outline" color="polisimBlue.200" borderWidth="2px" borderColor="polisimBlue.300">
								contact
						</Button>
					</HStack>
				</Box>
				<ThreeCanvas/>
			</HStack>

			<Divider mt="125" bottom="0"/>
		</Box>
	)
}
    
export default HeroSection;
