import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
	Box,
	Flex,
	Image,
	HStack,
	Card,
	CardHeader,
	CardBody,
	Heading,
	Text,
    Button,
	useMediaQuery,
	PopoverTrigger,
	Popover,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverCloseButton,
	PopoverArrow,
	VStack
} from "@chakra-ui/react"

function VisionBlock(props: any) {
	return (
			<Card 
			flex="1" 
			maxWidth={{ md: "none", lg: "600" }} 
			bg="rgba(0, 0, 0, 0.0)" 
			border="none"
			boxShadow="none"
			pl="0" pr="0"
		>
			<CardHeader p="0">
				<HStack>
					<Image src="/images/demo_icon.png" boxSize="27px" loading="lazy"/>
					<Text fontSize="lg" fontWeight="700">{props.title}</Text>
				</HStack>
			</CardHeader>
			<CardBody pl="0" pr="0">
				<Text>{props.text}</Text>
			</CardBody>
		</Card>
	);
}


function Demo() {

	return (
		<Box
			mt="75" mb={{base: "75", md: "150"}}
			width="100%" display="flex" alignItems="center"
			height="auto"
			id="demo"
		>
			<Flex
				maxHeight="100%"
				gap="5"
				justify="space-between"
				flex="1"
				alignItems={{ base: "center", lg: "center", xl: "flex-start" }}
				ml={{ base: "0", lg: "50", xl: "250" }} mr={{ base: "0", lg: "50", xl: "250" }}
				flexDirection="column"
			>
                <Box
					flex="1"
					width={{base: "75%", lg: "75%", xl: "50%"}}
				>
                    <VisionBlock title="Demo" text="
                        The Polisim software is currently under development. But we still want to share our progress with you - here are our prototypes!
                    "/>                    
				</Box>
				<Flex
					width={{base: "75%", lg: "75%", xl: "100%"}}
					flexDirection="column"
					gap={{ base: "75px", xl: "100px" }}
				>
					<Flex
						width="100%"
						justify="space-between"
						alignItems="top"
						gap={{ base: "5", lg: "5", xl: "75" }}
						flexDirection={{ base: "column", lg: "column", xl: "row" }}
					>
						<Image
							className="prompting-image"
							src="/images/prompting.svg"
							width={{ base: "100%", lg: "100%", xl: "65%" }}
							borderRadius="5px"
							style={{ border: 'solid 2px var(--chakra-colors-polisimBlue-200)' }}
							boxShadow="0 12px 30px -15px rgba(0, 0, 255, 0.6)"
							aspectRatio="577 / 308"
							objectFit="cover"
						/>
						<VStack
							width={{ base: "100%", lg: "100%", xl: "35%" }}
							alignItems="left"
							gap="2"
						>
							<Text width="100%">Take a sneek-peek into our main Polisim software!</Text>
							<Button rightIcon={<ArrowForwardIcon />} size={{ base: "sm", xl: "sm", '2xl': "md" }} variant="solid" bg="polisimBlue.300" color="polisimBlue.200" _hover={{ bg: "polisimBlue.400" }} width={{ base: "200px", xl: "100%" }}>
								to the prototype
							</Button>
						</VStack>
					</Flex>
					<Flex
						width="100%"
						justify="space-between"
						alignItems="top"
						gap={{ base: "5", lg: "5", xl: "75" }}
						flexDirection={{ base: "column-reverse", lg: "column-reverse", xl: "row" }}
					>	
						<VStack
							width={{ base: "100%", lg: "100%", xl: "35%" }}
							alignItems="left"
							gap="2"
						>
							<Text width="100%">One of the most important parts: The Polisim Dashboard.</Text>
							<Button rightIcon={<ArrowForwardIcon />} size={{ base: "sm", xl: "sm", '2xl': "md" }} variant="solid" bg="polisimBlue.300" color="polisimBlue.200" _hover={{ bg: "polisimBlue.400" }} width={{ base: "200px", xl: "100%" }}>
								to the prototype
							</Button>
						</VStack>
						<Image
							className="dashboard-image"
							src="/images/dashboard.svg"
							width={{ base: "100%", lg: "100%", xl: "65%" }}
							borderRadius="5px"
							style={{ border: 'solid 2px var(--chakra-colors-polisimBlue-200)' }}
							boxShadow="0 12px 30px -15px rgba(0, 0, 255, 0.6)"
							aspectRatio="577 / 308"
							objectFit="cover"
						/>
					</Flex>
					
				</Flex>
				
			</Flex>
	    </Box>

	);
}

/*
<Image
	className="demo-image"
	src="/images/dashboard.svg"
	width="65%"
	borderRadius="5px"
	style={{ border: 'solid 2px var(--chakra-colors-polisimBlue-200)' }}
	boxShadow="0 12px 30px -15px rgba(0, 0, 255, 0.6)"
	aspectRatio="577 / 308"
	objectFit="cover"
/>
*/
		
export default Demo;