import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,Image,Text
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "./logo.png"
export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
    const login=JSON.parse(localStorage.getItem('login'))
  const details=JSON.parse(localStorage.getItem('emaildetail'))
    
    const handleLogut=() =>
    {
        localStorage.clear()
        window.location.reload()
    }
  
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} borderRadius={15}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
                          <Link to={"/"}>
                              <Image w={40} src={logo} alt={logo} />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
                          display={{base: "none",md: "flex"}}
            fontWeight={700}fontSize={20}>
              <Link to={"/typingteacher"}><Text _hover={{bg:"",color:"white"}}>Typing Teacher</Text></Link>
              <Link to={"/testspeed"}><Text _hover={{bg:"",color:"white"}}>Test Speed</Text></Link>
              <Link to={"/techniques"}><Text _hover={{bg:"",color:"white"}}>Learning Tool</Text></Link>
            </HStack>
          </HStack>
          {login===true ? (
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={details.user.photoURL}
                  />
                </MenuButton>
                <MenuList>
                 <Link to='/profile'><MenuItem>Profile</MenuItem></Link> 
                  <MenuDivider />
                  <MenuItem onClick={handleLogut}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <Box display={"flex"} w={{base:"auto"}} gap={6} textAlign={"center"}>
              <Link to={'/login'}>Login</Link>
            </Box>
          )}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4} onClick={()=>onClose} fontWeight={800}>
              <Link to={"/typingteacher"}>Typing Teacher</Link>
              <Link to={"/testspeed"}>Test Speed</Link>
              <Link to={"/techniques"}>Learning Tool</Link>
              <Link to={"/login"}>Login</Link>
              <Link to={"/signup"}>SignUp</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
