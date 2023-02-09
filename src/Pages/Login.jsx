import { Button, HStack, Input, Heading, Text } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Container, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { auth,provider } from "../../Authentication/config";
import { signInWithPopup } from "firebase/auth";
import {useState} from "react";
function Login() {
    const [value,setValue]=useState('')
    const handleClick=() =>
    {
    signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem('email',data.user.email)
    })
}
  return (
    <>
      <Container w="100%" h={"100vh"} mt="5rem">
        <Heading textAlign="start" margin="1rem 0">
          Log in
        </Heading>
        <HStack
          spacing="1.5rem"
          display={"flex"}
          gap="1rem"
          m={"auto"}
          wrap={"wrap"}
        >
          <Button colorScheme="twitter" leftIcon={<FaFacebook />} onClick={handleClick}>
            Log in with Facebook
          </Button>

          <Button colorScheme="facebook" leftIcon={<FcGoogle />}>
            Log in with Google
          </Button>
        </HStack>
        <Text textAlign="start" margin="auto">
          or you can login with your email:
        </Text>
        <Box w="100%">
          <Input placeholder="Email Address" type="email" margin="1rem 0" />
          <Input placeholder="Enter Password" type="password" margin="1rem 0" />
          <Box marginBottom="1rem" marginTop="1rem">
            <Button colorScheme="blue">LOG IN</Button> <strong>or</strong>{" "}
            <Link to="/signup">Sign Up now</Link>
          </Box>
          <Link to="/resetpassword">Forget your password?</Link>
        </Box>
      </Container>
    </>
  );
}
export default Login;
