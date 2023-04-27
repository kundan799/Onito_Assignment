import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  
  const Home = () => {
    return (
      <Box bg="#838bcc" w="100%" h="900px">
        <br />
        <Box
          //bg="#fffffd"
          bg={useColorModeValue("white", "gray.900")}
          w="95%"
          h="700px"
          m="auto"
          borderRadius={"10px"}
          p="10px"
        >
          <Text fontSize={"3xl"}>Registration</Text>
          <Text fontSize={"2xl"} as="u">
            Personal Details
          </Text>
          <SimpleGrid columns={3} spacing={3}>
            <FormControl isRequired>
              <Flex gap="5px">
                <FormLabel>Name</FormLabel>
                <Input placeholder="Enter Name" />
              </Flex>
            </FormControl>
  
            <FormControl isRequired>
              <Flex gap="5px">
                <FormLabel>Date of birth or Age</FormLabel>
                <Input placeholder="DD/MM/YYYY or Age in Year" />
              </Flex>
            </FormControl>
            <FormControl isRequired>
              <Flex gap="5px">
                <FormLabel>Sex</FormLabel>
                <Select placeholder="Enter Sex">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Select>
              </Flex>
            </FormControl>
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={3}>
            <FormControl>
              <Flex gap="5px">
                <FormLabel>Mobile</FormLabel>
                <Input placeholder="Enter Mobile" />
              </Flex>
            </FormControl>
            <FormControl>
              <Flex gap="5px">
                <FormLabel>Govt ID</FormLabel>
                <Select placeholder="ID Type">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Select>
                <Input placeholder="Enter Govt ID" />
              </Flex>
            </FormControl>
          </SimpleGrid>
          {/* ---------------contect details----------------------- */}
          <Text fontSize={"2xl"} as="u">
            Contect Details
          </Text>
          <SimpleGrid columns={3} spacing={3}>
            <FormControl>
              <Flex gap="5px">
                <FormLabel>Guardian Details</FormLabel>
                <Select placeholder="Enter Label">
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="other">Other</option>
                </Select>
                <Input placeholder="Enter Gardian Name" />
              </Flex>
            </FormControl>
  
            <FormControl>
              <Flex gap="5px">
                <FormLabel>Email</FormLabel>
                <Input placeholder="Enter Email" />
              </Flex>
            </FormControl>
            <FormControl isRequired>
              <Flex>
                <FormLabel>Emergency Number</FormLabel>
                <Input placeholder="Enter Emergrncy No" />
              </Flex>
            </FormControl>
          </SimpleGrid>
  
          {/* ------------------Address details--------------------------- */}
          <Text fontSize={"2xl"} as="u">
            Address Details
          </Text>
          <SimpleGrid columns={3} spacing={3}>
            <FormControl mb="10px">
              <Flex gap="5px">
                <FormLabel>Address</FormLabel>
                <Input placeholder="Enter Address" />
              </Flex>
            </FormControl>
  
            <FormControl mb="10px">
              <Flex gap="5px">
                <FormLabel>State</FormLabel>
                <Select placeholder="Enter State">
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Bihar">Bihar</option>
                  <option value="UP">UP</option>
                </Select>
              </Flex>
            </FormControl>
            <FormControl>
              <Flex>
                <FormLabel>City</FormLabel>
                <Select placeholder="Enter City/town/village">
                  <option value="Jharkhand">Ranchi</option>
                  <option value="Bihar">Patna</option>
                  <option value="UP">UP</option>
                </Select>
              </Flex>
            </FormControl>
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={3}>
            <FormControl>
              <Flex gap="5px">
                <FormLabel>Country</FormLabel>
                <Input placeholder="Enter Country Name" w="40%" />
              </Flex>
            </FormControl>
            <FormControl>
              <Flex gap="5px">
                <FormLabel>Pincode</FormLabel>
                <Input placeholder="Enter Pincode" w="40%" />
              </Flex>
            </FormControl>
          </SimpleGrid>
          {/* ----------------------Other Details---------------- */}
          <Text fontSize={"2xl"} as="u">
            Other Details
          </Text>
          <SimpleGrid columns={4} spacing={3}>
            <FormControl mb="10px">
              <Flex gap="5px">
                <FormLabel>Occupation</FormLabel>
                <Input placeholder="Enter Occupation" />
              </Flex>
            </FormControl>
  
            <FormControl mb="10px">
              <Flex gap="5px">
                <FormLabel>Religion</FormLabel>
                <Select placeholder="Enter Religion">
                  <option value="Jharkhand">Hindu</option>
                  <option value="Bihar">Muslim</option>
                  <option value="UP">other</option>
                </Select>
              </Flex>
            </FormControl>
            <FormControl>
              <Flex>
                <FormLabel>Marital Status</FormLabel>
                <Select placeholder="Enter Marital status">
                  <option value="Jharkhand">Ranchi</option>
                  <option value="Bihar">Patna</option>
                  <option value="UP">UP</option>
                </Select>
              </Flex>
            </FormControl>
            <FormControl>
              <Flex>
                <FormLabel>Blood Group</FormLabel>
                <Select placeholder="Group">
                  <option value="Jharkhand">Ranchi</option>
                  <option value="Bihar">Patna</option>
                  <option value="UP">UP</option>
                </Select>
              </Flex>
            </FormControl>
          </SimpleGrid>
          <SimpleGrid columns={1} spacing={3}>
            <FormControl>
              <Flex gap="5px">
                <FormLabel>Nationality</FormLabel>
                <Input placeholder="Enter Nationality " w="40%" />
              </Flex>
            </FormControl>
          </SimpleGrid>
          <Box style={{width:"20%",margin:"auto",marginRight:"10px",marginTop:"30px",display:"flex",justifyContent:"space-between"}}>
          <Button colorScheme="red" variant="outline">
              CANCEL
            </Button>
            <Button colorScheme="green">SUBMIT</Button>
          
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Home;
  