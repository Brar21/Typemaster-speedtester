import { Button, Input, Heading, Text } from "@chakra-ui/react";
import { Container, Box, Stack, Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function Signup() {
    const toast=useToast();
    const registration=JSON.parse(localStorage.getItem('register'))
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { name, email, password, confirmpassword } = state;
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      return toast({
        title: "Nope",
        position: "top-right",
        description: "password is not matching",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      //alert('password wrong')
    }   if (email === registration.email) {
        return toast({
          title: "Already Resgisterd",
          position: "top-right",
          description: "Email is already registerd",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        //alert('password wrong')
      }  else {
        toast({
            title: "Registration",
            position: "top-right",
            description: "Registration Successfully Done",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
      localStorage.setItem("register", JSON.stringify(state));
    }
    // console.log(state);
    setState({ email: "", password: "", name: "", confirmpassword: "" });
  };

  return (
    <>
      <Container w="100%" h={"100vh"}>
        <Heading textAlign="start" margin="1rem 0">
          Create a free Account
        </Heading>
        <Text textAlign="start" margin="1rem 0">
          Already have
          <Link to="/login">
            <strong color="blue"> Login now</strong>
          </Link>
        </Text>

        <Text textAlign="start" margin="1rem 0">
          or you can Sign Up with your email:
        </Text>
        <Box w="100%">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChange}
              type="text"
              margin="1rem 0"
            />

            <Input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleChange}
              margin="1rem 0"
            />
            <Input
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={handleChange}
              type="password"
              margin="1rem 0"
            />
            <Input
              placeholder="Confirm Password"
              name="confirmpassword"
              value={confirmpassword}
              onChange={handleChange}
              type="password"
              margin="1rem 0"
            />

            <Stack spacing={5} direction="column">
              <Checkbox w="18rem" colorScheme="blue" defaultChecked>
                I have read and agree to Typetest's terms of use and privacy
                policy
              </Checkbox>
              <Checkbox colorScheme="blue" defaultChecked>
                Receive our news
              </Checkbox>
            </Stack>
            <Box marginRight="80%" marginBottom="1rem" marginTop="1rem">
              <Button colorScheme="blue" onClick={handleSubmit}>
                SIGN UP
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
}
export default Signup;
