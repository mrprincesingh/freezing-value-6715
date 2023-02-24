import {
  Box,
  FormControl,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";

const Payment = () => {
  const [firstName, setFirsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [street,setStreet] = useState('')
 
  return (
    <>
      <HStack>
        <Stack>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"2xl"} textAlign={"center"} color="blk">
                Shipping Address
              </Heading>
            </Stack>
            <Box rounded={"lg"} p={8} display="grid">
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      {/* <FormLabel>First Name</FormLabel> */}
                      <Input
                        type="text"
                        borderRadius={"none"}
                        border={"1px solid gray"}
                        focusBorderColor="gray.400"
                        value={firstName}
                        onChange={(e) => setFirsName(e.target.value)}
                        placeholder="First name"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      {/* <FormLabel>Last Name</FormLabel> */}
                      <Input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        borderRadius={"none"}
                        border={"1px solid gray"}
                        focusBorderColor="gray.400"
                        placeholder="Last name"
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="phone" isRequired>
                  {/* <FormLabel>Phone number</FormLabel> */}
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(Number(e.target.value))}
                    type="number"
                    maxLength={"10"}
                    borderRadius={"none"}
                    border={"1px solid gray"}
                    focusBorderColor="gray.400"
                    placeholder="Phone number"
                  />
                </FormControl>
                <FormControl id="city" isRequired>
                  {/* <FormLabel>City</FormLabel> */}
                  <Input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    borderRadius={"none"}
                    border={"1px solid gray"}
                    focusBorderColor="gray.400"
                    placeholder="Enter city"
                  />
                </FormControl>
                <FormControl id="state" isRequired>
                  {/* <FormLabel>State</FormLabel> */}
                  <Input
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    type="text"
                    borderRadius={"none"}
                    border={"1px solid gray"}
                    focusBorderColor="gray.400"
                    placeholder="Enter State"
                  />
                </FormControl>
                <FormControl id="phone" isRequired>
            {/* <FormLabel>Phone number</FormLabel> */}
            <Input
            value={street}
              type="number"
              maxLength={"10"}
              borderRadius={"none"}
              border={"1px solid gray"}
              focusBorderColor="gray.400"
              placeholder="Street & House no"
              onChange={(e)=>setStreet(e.target.value)}
            />
          </FormControl>
          <FormControl id="city" isRequired>
            {/* <FormLabel>City</FormLabel> */}
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              borderRadius={"none"}
              border={"1px solid gray"}
              focusBorderColor="gray.400"
              placeholder="Pincode"
            />
          </FormControl>
          <FormControl id="state" isRequired>
            {/* <FormLabel>State</FormLabel> */}
            <Input
              value={state}
              onChange={(e) => setState(e.target.value)}
              type="text"
              borderRadius={"none"}
              border={"1px solid gray"}
              focusBorderColor="gray.400"
              placeholder="Country"
            />
          </FormControl>
          <Button
                  loadingText="Submitting"
                  size="lg"
                  bgImage={"linear-gradient(to right, #d758e6, #3963f7 )"}
                  color={"white"}
                  _hover={{
                    color: "#262b2b",
                  }}
                 
                >
                  Continue
                </Button>
                <Stack spacing={10} pt={2}></Stack>
              </Stack>
            </Box>
          </Stack>
        </Stack>
        <Stack gap={"15px"}>
         
        </Stack>
        {/* <Stack>
          <Heading fontSize={"xl"} textAlign={"center"} color="blk">
            Order summery
          </Heading>
          <Stack>
            <HStack gap={"150px"} >
              <Text>SUB-TOTAL</Text>
              <Text>32,394 Rs</Text>
            </HStack>
            <HStack gap={"150px"}>
            <Text>CART-DISCOUNT</Text>
              <Text>-1,972 Rs</Text>
            </HStack>
            <HStack gap={"150px"}>
            <Text>SHIPPING CHARGES</Text>
              <Text>FREE</Text>
            </HStack>
          </Stack>
        </Stack> */}
      </HStack>
    </>
  );
};

export default Payment;
