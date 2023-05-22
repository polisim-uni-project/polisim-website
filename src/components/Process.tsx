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
	useMediaQuery
} from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'


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
					<Image src="/images/process_icon.svg" boxSize="30px" loading="lazy"/>
					<Heading fontSize="lg">{props.title}</Heading>
				</HStack>
			</CardHeader>
			<CardBody pl="0" pr="0">
				<Text>{props.text}</Text>
			</CardBody>
		</Card>
	);
}


function Process() {

	const [isMobile] = useMediaQuery("(max-width: 450px)");

	return (
		<Box
			mt="75" mb={{base: "75", md: "150"}}
			width="100%" display="flex" alignItems="center"
			height="auto"
		>
			<Flex
				maxHeight="100%"
				gap={{base: "45", lg: "75", xl: "150"}}
				justify="space-between"
				flex="1"
				alignItems={{ base: "center", lg: "center", xl: "flex-start" }}
				ml={{ base: "0", lg: "50", xl: "250" }} mr={{ base: "0", lg: "50", xl: "250" }}
				flexDirection={{ base: "column", lg: "column", xl: "row" }}
			>
                <Box
					flex="1"
					width={{base: "75%", lg: "75%", xl: "50%"}}
				>
                    <VisionBlock title="Polisim Ablauf" text="
                        Wir kümmern uns um die gesamte Infrastruktur:
                        Von Simulation bis Evaluation.
                    "/>
                    <Button rightIcon={<ArrowForwardIcon />} size="md" variant="solid" bg="polisimBlue.300" color="polisimBlue.200">
                        Demo buchen
                    </Button>
				</Box>
				<Image
					src="/images/polisim_process.svg"
					flex="1" 
					width={{base: "75%", lg: "75%", xl: "50%"}}
				/>
				{/* isMobile ? "/images/process_process_mobile.svg" : "/images/polisim_process.svg" */}
			</Flex>
	    </Box>
	);
}
		
export default Process;