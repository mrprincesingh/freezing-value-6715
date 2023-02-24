import {
  Box,
  FormControl,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleUserPayment } from "../redux/Auth/action";

const Payment = () => {
  const [firstName, setFirsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("India");
  const dispatch = useDispatch();
  const handlePayment = () => {
    let userData = {
      firstName,
      lastName,
      city,
      state,
      phone,
      street,
      pincode,
      country,
    };
    dispatch(handleUserPayment(userData));
    //  console.log(userData)
    console.log("working");
  };
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
                    type="text"
                    borderRadius={"none"}
                    border={"1px solid gray"}
                    focusBorderColor="gray.400"
                    placeholder="Street & House no"
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </FormControl>
                <FormControl id="city" isRequired>
                  {/* <FormLabel>City</FormLabel> */}
                  <Input
                    value={pincode}
                    onChange={(e) => setPincode(+e.target.value)}
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
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    type="text"
                    borderRadius={"none"}
                    border={"1px solid gray"}
                    focusBorderColor="gray.400"
                    placeholder="Country"
                  />
                </FormControl>
                
                <Stack spacing={10} pt={2}></Stack>
              </Stack>
            </Box>
          </Stack>
        </Stack>
        <Stack gap={"15px"}>
          <Select placeholder="Select payment method">
            <option value="option1">Cash on Delivery</option>
            <option value="option2">UPI</option>
            <option value="option3">CARD</option>
          </Select>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormLabel>CARD DETAILS</FormLabel>
                <FormControl id="fullname" isRequired>
                  {/* <FormLabel>First Name</FormLabel> */}
                  <Input
                    type="text"
                    borderRadius={"none"}
                    border={"1px solid gray"}
                    focusBorderColor="gray.400"
                    placeholder="Full Name"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormLabel>CVV</FormLabel>
                <FormControl id="cvv">
                  {/* <FormLabel>Last Name</FormLabel> */}
                  <Input
                    type="number"
                    maxLength={"3"}
                    borderRadius={"none"}
                    border={"1px solid gray"}
                    focusBorderColor="gray.400"
                    placeholder="CVV"
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="cardnumber" isRequired>
              {/* <FormLabel>Phone number</FormLabel> */}
              <Input
                type="number"
                maxLength={"10"}
                borderRadius={"none"}
                border={"1px solid gray"}
                focusBorderColor="gray.400"
                placeholder="Card number"
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
                  onClick={() => handlePayment()}
                >
                  Continue
                </Button>
            <Stack spacing={10} pt={2}></Stack>
          </Stack>
        </Stack>
      </HStack>
    </>
  );
};

export default Payment;
