import React, { useState, useEffect } from 'react'
import { Button, Container, Flex, HStack, Text, Box } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { FaRegPlusSquare } from "react-icons/fa";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  // Apply theme change
  useEffect(() => {
    if (isDark) {
      // Dark theme
      document.body.style.backgroundColor = "#1a202c";
      document.body.style.color = "#e2e8f0";
    } else {
      // Light theme - explicitly set white background
      document.body.style.backgroundColor = "#dcd5f9";
      document.body.style.color = "#3a0d40";
    }
  }, [isDark]);

  return (
    <Box
      backgroundColor={isDark ? "#2D3748" : "#3a0d40"}
      boxShadow="0 2px 5px rgba(0,0,0,0.1)"
      transition="background-color 0.3s ease"
    >
      <Container maxW={"1140px"} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={'space-between'}
          flexDir={{
            base: "column",
            sm: "row"
          }}
        >
          <Text
            color="pink.400"
            fontSize={{ base: "28", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            borderColor="blue.300"
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              textShadow: "0px 0px 8px rgba(142, 32, 78, 0.79)",
            }}
          >
            <Link to={"/"}>Product Store🛒</Link>
          </Text>
          <HStack wordSpacing={2} alignItems={"center"}>
            <Link to={"/create"}>
              <Button>
                <FaRegPlusSquare fontSize={15} />
              </Button>
            </Link>
            <Button onClick={() => setIsDark(!isDark)}>
              {isDark ? '🌞' : '🌙'} 
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar