import React, { useEffect, useState } from "react";
import {
    Input,
  Avatar,
  Icon,
  Text,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  InputGroup,
  InputLeftElement,
  NavItem,
  useDisclosure,
  Heading,
  GridItem,
  Card,
  CardBody,
  Stack,
  Button,
  
  Grid,
  Image,
  useToast,

  
} from "@chakra-ui/react";
import {FiMenu , FiSearch} from "react-icons/fi"
import {FaBell,FaRss,FaClipboardCheck} from "react-icons/fa"
import {BsGearFill, BsStarHalf} from "react-icons/bs"
import {AiFillGift,AiFillEdit} from "react-icons/ai"
import {HiCollection , HiCode} from "react-icons/hi"
import {MdHome, MdDeleteSweep,MdOutlineProductionQuantityLimits,MdUpdate} from "react-icons/md"
import axios from "axios"
import {Link} from "react-router-dom"



const Admin = () => {
    const sidebar = useDisclosure ();
    const [data , setData] = useState([])
    const toast = useToast()
    useEffect(()=>{
  getUser()
    },[])
    const getUser = async()=>{
      const res = await axios.get("https://real-puce-slug-boot.cyclic.app/products")
      setData(res.data)
    }
    console.log(data)
    const handleDelete= async(id) =>{
     if(window.confirm("Are you sure that you wanted to delete that Product")){
      const res = await axios.delete(`https://real-puce-slug-boot.cyclic.app/products/delete/${id}`)
      
        toast({
          position: "bottom-left",
          title: "Product deleted SuccessFully ",
          description: "SuccessFul.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
       getUser()

      
     }
    }
  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
      border="1px solid black"
        align="center"
        gap="5px"
        px="4"
        mx="2"
        rounded="md"
        py="3"
        cursor="pointer"
        color="black"
        _hover={{
          bg: "#2D3748",
          color: "whiteAlpha.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={{
              color: "gray.300",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };
  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="#9F7AEA"
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        {/* <Logo /> */}
        <Link to="/">
        <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
          UserPage
        </Text>
        </Link>
      </Flex>
      
      <Link to="/admin"><NavItem icon={MdHome}>Home</NavItem></Link>
        <br/>
        <Link to="/addproduct"><NavItem icon={MdOutlineProductionQuantityLimits}>Add Product</NavItem></Link>
        <br/>
       <Link to="/admin/users"> <NavItem icon={HiCode}>User Info</NavItem></Link>
        <br/>
        <Link to="/orders"><NavItem icon={AiFillGift}>Orders</NavItem></Link>
        <br/>
    </Box>
  );

  return (
    <Box >
      <Box
      
        as="section"
        bg="#E9D8FD"
        _dark={{
          bg: "gray.700",
        }}
        minH="100vh"
      >
        <SidebarContent
          display={{
            base: "none",
            md: "unset",
          }}
        />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box
          ml={{
            base: 0,
            md: 60,
          }}
          transition=".3s ease"
        >
          <Flex
          
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg="white"
            _dark={{
              bg: "gray.800",
            }}
            borderBottomWidth="1px"
            borderColor="blackAlpha.300"
            h="14"
          >
            <IconButton
              aria-label="Menu"
              display={{
                base: "inline-flex",
                md: "none",
              }}
              onClick={sidebar.onOpen}
              icon={<FiMenu />}
              size="sm"
            />
          <Heading   > Welcome Admin</Heading> 
          </Flex>

          <Box w="full" h="auto" bg="#E9D8FD">
          <Grid
              p="5"
              mt="10"
              gap={5}
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
            >
              {data.length > 0 &&
                data.reverse().map((item) => (
                  <GridItem key={item._id}>
                     
                    <Card maxW="sm">
                      <CardBody>
                        <Image
                          src={item.Img[0]}
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                        />
                        <Stack mt="6" spacing="3">
                          <Heading size="md"  cursor="pointer">{item.Title}</Heading>
                          <Text color="black" cursor="pointer">Price :-Rs.{item.Price}</Text>
                        </Stack>
                        <Flex mt="10px" justifyContent="space-between">
        <Link to={`/adminedit/${item._id}`}>
      <Button color="#9F7AEA" fontSize="28px"><AiFillEdit /></Button>
        </Link>
      <Button color="red.600" fontSize="28px"  onClick={()=> handleDelete(item._id)} ><MdDeleteSweep /></Button>
      </Flex>
                      </CardBody>
                    </Card>
                 
               
                                        


                    
                  </GridItem>
                ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
