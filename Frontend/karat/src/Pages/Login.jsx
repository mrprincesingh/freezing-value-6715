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
  Center,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { handleUserLogin } from "../redux/Auth/action";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((store) => store.authReducer.token);
  const handleLogin = () => {
    let userObj = {
      email,
      password,
    };
    dispatch(handleUserLogin(userObj));
  };
  // console.log(token)
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"} color="#eac926">
              Login
            </Heading>
          </Stack>
          <Box rounded={"lg"} p={8}>
            <Stack spacing={4}>
              <HStack gridColumn={{ sm: 1 }}>
                {/* Facebook */}
                <Button
                  w={"full"}
                  colorScheme={"facebook"}
                  leftIcon={<FaFacebook />}
                >
                  <Center>
                    <Text>Login with Facebook</Text>
                  </Center>
                </Button>

                {/* Google */}
                <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
                  <Center>
                    <Text>Login with Google</Text>
                  </Center>
                </Button>
              </HStack>
              <Text>OR</Text>
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
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  New to 24-KARAT ?{" "}
                  <Link color={"blue.400"} to="/register">
                    Register
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
