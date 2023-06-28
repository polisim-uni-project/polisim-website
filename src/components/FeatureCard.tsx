import { Text, Heading, Image, Divider, HStack } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from '@chakra-ui/react';


function FeatureCard(props: any) {
  return (
    <Card 
      flex="1" 
      maxWidth={{ md: "none", lg: "300" }} 
      bg="rgba(0, 0, 0, 0.0)" 
      borderColor="#fafafa" 
      borderWidth="1px"
      boxShadow="0 15px 30px -5px rgba(0, 0, 0, 0.1)"
      sx={{
        "&:hover": {
          boxShadow: "0 17px 35px -5px rgba(0, 0, 255, 0.2)",
          transition: "all .1s ease-out"
        },
      }}
    >
      <CardHeader pb="0">
        <HStack>
          <Image src={props.icon} boxSize="30px" loading="lazy"/>
          <Text fontSize="lg" fontWeight="700">{props.title}</Text>
        </HStack>
      </CardHeader>
      <CardBody>
          {
            props.text.map(function(subText: String, idx: Number){
              return (
                <>
                  <Text fontSize="15px" pb="2">{subText}</Text>
                  {idx != props.text.length - 1 ? <Divider mb="2" /> : null}
                </>
              );
            })
          }
      </CardBody>
    </Card>
  );
}

export default FeatureCard;