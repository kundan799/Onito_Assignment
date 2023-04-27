import {
    Box,
    Button,
    Flex,
    Text,
    useColorMode,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  import { Link } from "react-router-dom";
  import { MoonIcon, SunIcon } from "@chakra-ui/icons";
  
  const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Box
        w="100%"
        bg={useColorModeValue("gray.100", "gray.900")}
        h="80px"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        p="10px"
      >
        <Box>
          <Text as="b" fontFamily={"cursive"} fontSize={"3xl"}>
            Onito Technologies
          </Text>
        </Box>
        <Box w="20%" style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/">
            <Button size="lg">Home</Button>
          </Link>
          <Link to="/user">
            <Button size="lg">UserData</Button>
          </Link>
        </Box>
        <Box>
          <Button colorScheme="brand" variant="ghost" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
      </Box>
    );
  };
  
  export default Navbar;
  