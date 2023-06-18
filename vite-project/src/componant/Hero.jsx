import React, { forwardRef } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Hero = forwardRef((props, ref) => {

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <chakra.header bg={"purple.100"}>
      <Box
        w="full"
        h="55vh"
        bgPos="center"
        bgSize="cover">
        <Flex
          align="center"
          pos="relative"
          justify="left"
          w="full"
          ml={"auto"}
          pl={"6rem"}
          boxSize="full">
             <Heading
              fontSize={["3xl", , "3xl"]}
              fontWeight="semibold"
              color="white"
              lineHeight={1.8}
              justify="center"
              textTransform="uppercase">
              <chakra.span color="white">
       عيد أضحى سعييييييييييييييييييييييييييييييد عليكم ياحلوين !! كل عام وانتم بخير 🥳🥳💖💖💖
              
               
              </chakra.span>
            </Heading>
        </Flex>
      </Box>
    </chakra.header>
  );
});

export default Hero;
