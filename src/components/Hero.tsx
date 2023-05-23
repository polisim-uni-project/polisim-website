import {
	Box,
	Text,
	HStack,
	Button,
	Divider,
	Hide,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverArrow,
	PopoverCloseButton,
	PopoverHeader,
	PopoverBody
} from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import ThreeCanvas from "./ThreeCanvas";

function Hero () {
	return (
		<Box mt="50" ml={{ base: "50", lg: "150", xl: "200", '2xl': "250" }} mr={{ base: "25", lg: "100", xl: "150", '2xl': "200" }} height="auto">
			<HStack alignContent="top">
				<Box width={{ base: "100%", lg: "50%" }}>
					<Text
						fontSize={{ base: "35px", xl: "50px", '2xl': "70px" }}
						lineHeight={{ base: "37px", xl: "54px", '2xl': "80px" }}
						fontWeight="700"
						color="polisimGray.300"
					>
						Immersive Police Training through <Text bgGradient='linear(to-r, polisimBlue.100, polisimBlue.200 20%, polisimBlue.300)' bgClip='text'>Simulation</Text>
					</Text>
					<Text
						pt="30"
						fontSize={{ base: "15px", xl: "16px", '2xl': "18px" }}
						maxWidth="80%"
						color="polisimGray.300"
					>
						Simulationsbasiertes Polizeitraining durch KI-generierte Szenarien: Verbesserung von Einsatzsituationen und Unterstützung der polizeipsychologischen Arbeit.
					</Text>
					<HStack mt="30" gap="2">
						<Button size={{ base: "sm", xl: "sm", '2xl': "md" }} variant="solid" bg="polisimBlue.300" color="polisimBlue.200">
							coming soon...
						</Button>

						<Popover>
							<PopoverTrigger>
							<Button rightIcon={<ArrowForwardIcon />} size={{ base: "sm", xl: "sm", '2xl': "md" }} variant="outline" color="polisimBlue.200" borderWidth="2px" borderColor="polisimBlue.300">
								Kontakt
							</Button>
							</PopoverTrigger>
							<PopoverContent width="auto">
								<PopoverArrow />
								<PopoverCloseButton />
								<PopoverHeader color="polisimBlue.200" bg="polisimBlue.500"><b>Email:</b></PopoverHeader>
								<PopoverBody>peifer@hm.edu</PopoverBody>
							</PopoverContent>
						</Popover>

					</HStack>
				</Box>
				<Hide breakpoint='(max-width: 600px)'>
					<ThreeCanvas/>
				</Hide>
			</HStack>

			<Divider mt={{ base: "50px", lg: "75px", xl: "100px", '2xl': "125px" }} bottom="0"/>
		</Box>
	)
}
    
export default Hero;
