import {
	Box,
	Flex
} from "@chakra-ui/react"
import FeatureCard from "./FeatureCard";

function Features () {

	const responsiveMargin: { [key: string]: string } = {
		base: "15%",
		md: "15%",
		lg: "10%",
		xl: "15%",
		'2xl': "20%"
	};

	const responsiveMarginTop: { [key: string]: string } = {
		base: "50px",
		md: "50px",
		lg: "75px",
		'2xl': "125px"
	};

	return (
		<Box ml={responsiveMargin} mr={responsiveMargin} mt={responsiveMarginTop}>
			<Flex flexDirection={{ base: "column", md: "column", lg: "row" }} gap={{ base: "5", md: "5", lg: "5" }} justifyContent="space-between">
				<FeatureCard icon="/images/ai_icon.svg" title="AI generated police operations" text={[
					"infinitely generatable 3D environments", 
					"AI assisted characters with realistic speech and behaviors",
					"police-responsive and dynamic environment"
				]}/>
				<FeatureCard icon="/images/vr_icon.svg" title="Personalized training" text={[
					"voluntary, personalized self-training", 
					"re-experiencing deployments that have already happened",
					"preparation for upcoming missions"
				]}/>
				<FeatureCard icon="/images/psych_icon.svg" title="Support psych. work" text={[
					"Evaluation based on simulation data", 
					"Psychosocial support e.g. in case of signs of post-traumatic stress disorder"
				]}/>
		</Flex>
	</Box>
		
	)
}
		
export default Features;
  