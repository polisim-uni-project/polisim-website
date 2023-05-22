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
	Text
} from "@chakra-ui/react"



function VisionBlock(props: any) {
	return (
		<Card 
			flex="1" 
			bg="rgba(0, 0, 0, 0.0)" 
			border="none"
			boxShadow="none"
			pl="0" pr="0"
		>
			<CardHeader pb="0" pl="0" pr="0">
				<HStack>
					<Image src="/images/eye_icon.svg" boxSize="30px" loading="lazy"/>
					<Heading fontSize="lg">{props.title}</Heading>
				</HStack>
			</CardHeader>
			<CardBody pl="0" pr="0">
				<Text>{props.text}</Text>
			</CardBody>
		</Card>
	)
}


function Vision() {

	const responsiveMargin: { [key: string]: string } = {
		base: "50",
		lg: "150",
		xl: "200",
		'2xl': "250"
	};

	return (
		<Box left="0" mt={{base: "50", lg: "100", xl: "150"}} bg="polisimBlue.500" height="auto" width="100%" display="flex" alignItems="center">
			<Flex
				left="0" right="0" 
				ml={{ base: "0", lg: "50", xl: "250" }} mr={{ base: "0", lg: "50", xl: "250" }}
				justify="space-between"
				flex="1"
				flexDirection={{ base: "column", lg: "column", xl: "row" }}
				alignItems="center"
				pt="50"
				pb="50"
				gap="25"
			>
				<Box flex="1" width="50%" display="flex" alignItems="center">
					<Image src="/images/police_scenario.png" flex="1" maxWidth="85%" objectFit="cover" loading="lazy"/>
				</Box>
				<Box flex="1" width={{base: "75%", lg: "75%", xl: "50%"}} display="flex">
					<VStack flex="1" width="100%" gap="0px">
						<VisionBlock title="Usere Vision" text="
							Unsere Vision ist es, Polizeibeamten ein sicheres, realistisches und dynamisches Training zu bieten, 
							das ihr Selbstvertrauen und ihre Fähigkeiten stärkt die öffentliche Sicherheit zu wahren und sich selbst zu schützen.
						"/>
						<VisionBlock title="Unser Fokus" text="
							Insbesondere soll hier die verbale und nonverbale Kommunikation mit dem Gegenüber trainiert werden.
							Körpersprache ist das wichtigste Werkzeug eines Polizisten - und das kann trainiert werden.
						"/>
					</VStack>
				</Box>
			</Flex>
	    </Box>
	)
}
		
export default Vision;