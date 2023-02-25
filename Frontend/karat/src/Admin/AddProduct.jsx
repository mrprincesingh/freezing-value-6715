import React from 'react'
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
  Flex,
  Icon,
  Text,
  Drawer,
  DrawerOverlay,
  IconButton,
  DrawerContent,
  useDisclosure

} from "@chakra-ui/react";
import { useState } from 'react';

import {FiMenu , FiSearch} from "react-icons/fi"
import {AiFillGift,AiFillEdit} from "react-icons/ai"
import {HiCollection , HiCode} from "react-icons/hi"
import {MdHome, MdDeleteSweep,MdOutlineProductionQuantityLimits,MdUpdate} from "react-icons/md"
import { useNavigate,Link } from 'react-router-dom';

const AddProduct = () => {
  const sidebar = useDisclosure ();
  const [Img, setImg] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Type, setType] = useState("");
  const [Weight, setWeight] = useState("");
  const [Price, setPrice] = useState("");
  const [DiscountPrice, setDiscountPrice] = useState("");
  const [Brand, setBrand] = useState("");
  const toast = useToast()
  const navigate=useNavigate()

  const handleadd  = async(e)=>{
    e.preventDefault()
    const prodata = {
      Img,
      Title,
      Description,
      Type,
      Weight,
      Price,
      DiscountPrice,
      Brand,
    };

    
    fetch('https://real-puce-slug-boot.cyclic.app/products/addproduct', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(prodata),
    })
      .then((res) => {
        toast({
          position: "bottom-left",
          title: "Product Added SuccessFully ",
          description: "SuccessFul.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        navigate('/admin')
      })
      .catch((err) => {
        console.log(err.message)
      })
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
        <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
          Dashboard
        </Text>
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
  )
  return (

    <Box>
      <Box
        as="section"
       
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

          <Box w="full" height="100vh">
      <Container pb="20px" pt="20px">
        <Box>
          <Heading>Add New Product</Heading>
        </Box>
        <FormControl mt="20px" isRequired>
          <FormLabel>Product Image</FormLabel>
          <Input
            type="text"
            value={Img}
            name="name"
            placeholder="Product Image Link"
            onChange={(e) => setImg(e.target.value)}
          />
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="Product Title"
            type="text"
            name="Title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormLabel>Description</FormLabel>
          <Input
            placeholder="Product Description "
            type="text"
            name="Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <FormLabel>Type</FormLabel>
          <Input
            placeholder="Product Type "
            type="text"
            name="Type"
            value={Type}
            onChange={(e) => setType(e.target.value)}
          />
          <FormLabel>Weight</FormLabel>
          <Input
            placeholder="Product Weight "
            type="text"
            name="Weight"
            value={Weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <FormLabel>Price</FormLabel>
          <Input
            placeholder="Product Price "
            type="number"
            name="Price"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <FormLabel>DiscountPrice</FormLabel>
          <Input
            placeholder="Product DiscountPrice "
            name="DiscountPrice"
            type="number"
            value={DiscountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
          />
          <FormLabel>Brand</FormLabel>
          <Input
            placeholder="Product Brand "
            name="Brand"
            type="text"
            value={Brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <Button mt="20px" colorScheme="purple" onClick={handleadd}>
            Submit
          </Button>
        </FormControl>
      </Container>
    </Box>
        </Box>
      </Box>
    </Box>


  )
}

export default AddProduct