import { Button, HStack, Input, Heading, Text } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Container, Box} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { auth,provider } from "../Authentication/config";
import { signInWithPopup } from "firebase/auth";
import {useEffect, useState} from "react";
function Login() {
    const [value,setValue]=useState('')
    const [login,setLogin]=useState(false)
    const [state,setState]=useState({email: "",password: ""})
    const {email,password}=state
    const registration=JSON.parse(localStorage.getItem('register'))
    const handleClick=() =>
    {
    signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        console.log(data.user)
        setLogin(true)
        localStorage.setItem('login',true)
        localStorage.setItem('email',data.user.email)
        localStorage.setItem('emaildetail',JSON.stringify(data))
    })
    }
    useEffect(() =>
    {
        setValue(localStorage.getItem('email'))
    })
    console.log(value)
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
      {value? <Navigate to={'/'} />:<Button colorScheme="twitter" leftIcon={<FcGoogle />} onClick={handleClick}>
            Log in with Google 
          </Button>}

          <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
            Log in with Facebook
          </Button>
        </HStack>
        <Text textAlign="start" margin="auto">
          or you can login with your email:
        </Text>
              <Box w="100%">
                  <form onSubmit={handleSubmit}></form>
          <Input placeholder="Email Address" type="email" name="email" value={email} onChange={hanldeChange} margin="1rem 0" />
          <Input placeholder="Enter Password" type="password" name="password" value={password} onChange={hanldeChange} margin="1rem 0" />
          <Box marginBottom="1rem" marginTop="1rem">
            <Button colorScheme="blue" onClick={handleSubmit}>LOG IN</Button> <strong>or</strong>{" "}
            <Link to="/signup">Sign Up now</Link>
          </Box>
          <Link to="/resetpassword">Forget your password?</Link>
        </Box>
      </Container>
    </>
  );
}
export default Login;
