import { Link } from "react-router-dom";

//function Navbar() {

//    return <div className="nav">

//        <Link to='/'><h1>Type Master</h1></Link>
//        <Link to="/typingteacher"><strong>TYPING TEACHER</strong></Link>
//        <Link to="/testspeed"><strong>TEST SPEED</strong></Link>
//        <Link to="/techniques" ><strong >LERANING TOOL</strong></Link>
//        <div className="secondpart">
//            <Link to="/login"><strong>Login</strong></Link>
//            <b>or</b>
//            <Link to="/signup" className="signupButton"><strong>SIGNUP</strong></Link>
//        </div>

//    </div>
//}
//export default Navbar;
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
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

//const Links = ['Typing Teacher', 'Test Speed', 'Learning Tool'];
//const links=['/','/test']
//const NavLink = ({ children }) => (
//  <Link
//    px={2}
//    py={1}
//    rounded={'md'}
//    _hover={{
//      textDecoration: 'none',
//      bg: useColorModeValue('gray.200', 'gray.700'),
//    }}
//    to={links}>
//    {children}
//  </Link>
//);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [login] = useState(true);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
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
              <Link to={"/"}>TypeTest</Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link to={"/typingteacher"}>Typing Teacher</Link>
              <Link to={"/testspeed"}>Test Speed</Link>
              <Link to={"/techniques"}>Learning Tool</Link>
            </HStack>
          </HStack>
          {!login ? (
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
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Setting</MenuItem>
                  <MenuDivider />
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <Box display={"flex"} gap={6} textAlign={"center"}>
              <Link to={'/login'}>Login</Link>
              <Link to={'/signup'} display={{ base: "none", md: "flex" }}>Sign-up</Link>
            </Box>
          )}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
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
//No we can't do like simple or Vanila javascript so what we do?
