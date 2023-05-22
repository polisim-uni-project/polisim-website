import {
	Box,
	Flex,
	Image,
	VStack,
	HStack,
	Card,
	CardHeader,
	CardBody,
	Heading,
	Text,
    Button
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
			<CardHeader pb="0" pl="0" pr="0">
				<HStack>
					<Image src="/images/process_icon.svg" boxSize="30px" loading="lazy"/>
					<Heading fontSize="lg">{props.title}</Heading>
				</HStack>
			</CardHeader>
			<CardBody pl="0" pr="0">
				<Text>{props.text}</Text>
			</CardBody>
		</Card>
	)
}


function Process() {
	return (
		<Box left="0" mt="150" mb="200" ml={{ md: "150", lg: "250" }} mr={{ md: "150", lg: "250" }} height="auto" display="flex" alignItems="center">
			<Flex left="0" right="0" maxHeight="100%" gap="150" justify="space-between" flex="1" flexDirection={{ base: "column", lg: "column", xl: "row" }}>
                
                <Box flex="1" maxWidth="400px">
                    <VisionBlock title="Polisim Ablfauf" text="
                        Wir kümmern uns um die gesamte Infrastruktur:
                        Von Simulation bis Evaluation.
                    "/>
                    <Button rightIcon={<ArrowForwardIcon />} size="md" variant="solid" bg="polisimBlue.300" color="polisimBlue.200">
                        Demo buchen
                    </Button>
				</Box>
                <Image src="/images/polisim_process.svg" flex="1" maxWidth="400px"/>


                
			</Flex>
	    </Box>
	)
}
		
export default Process;