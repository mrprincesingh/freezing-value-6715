import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { handleUserRegister } from "../redux/Auth/action";
import { useToast } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setFirsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showToast,setShowToast] = useState(false)
  const toast = useToast()
const dispatch = useDispatch()
  const handleRegisterSubmit = async () => {
    let userObj = {
      name,
      last :lastName ,
      email,
      mobile,
      password,
    };
    dispatch(handleUserRegister(userObj))
    if(dispatch(handleUserRegister(userObj))){
      setShowToast(true)
    }else{
      setShowToast(false)
    }
    
    setFirsName('')
    setLastName('')
    setEmail('')
    setMobile('')
    setPassword('')
    
  };
  return (
    <>
    <Navbar/>
    {showToast  && toast({
      title: 'Account created.',
      description: "please try to login.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })}
      <Flex
      pt="150px"
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"} color="#aa5af1">
              Sign up with 24-KARAT
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box rounded={"lg"} p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      borderRadius={"none"}
                      border={"1px solid gray"}
                      focusBorderColor="gray.400"
                      value={name}
                      onChange={(e) => setFirsName(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      borderRadius={"none"}
                      border={"1px solid gray"}
                      focusBorderColor="gray.400"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="phone" isRequired>
                <FormLabel>phone number</FormLabel>
                <Input
                  value={mobile}
                  onChange={(e) => setMobile(Number(e.target.value))}
                  type="number"
                  maxLength={"10"}
                  borderRadius={"none"}
                  border={"1px solid gray"}
                  focusBorderColor="gray.400"
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  borderRadius={"none"}
                  border={"1px solid gray"}
                  focusBorderColor="gray.400"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    borderRadius={"none"}
                    border={"1px solid gray"}
                    focusBorderColor="gray.400"
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bgImage={"linear-gradient(to right, #d758e6, #3963f7 )"}
                  color={"white"}
                  _hover={{
                    color: "#262b2b",
                  }}
                  onClick={handleRegisterSubmit}
                >
                  Register to continue
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already have an Account?{" "}
                  <Link color={"blue.400"} href={"/login"} >
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer/>
    </>
  );
};

export default SignUp;
