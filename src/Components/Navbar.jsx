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
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

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
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Setting</MenuItem>
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
            <Stack as={"nav"} spacing={4} onClick={()=>onClose}>
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
