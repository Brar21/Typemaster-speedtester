import { Button, HStack, Input, Heading, Text } from '@chakra-ui/react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Container, Box,Stack,Checkbox } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function Signup() {

    return <>
            <Container w='100%'>
            <Heading textAlign='start' margin='1rem 0'>Create a free Account</Heading>
            <Text textAlign='start' margin='1rem 0'>Already have<Link to='/login'> Login now</Link></Text>
                <HStack spacing='1.5rem'>
                    <Button colorScheme='twitter' spa leftIcon={<FaFacebook />}>
                        Signup in with Facebook
                    </Button>
                    <Button colorScheme='facebook' leftIcon={<FcGoogle />}>
                        Signup in with Google
                    </Button>
                </HStack>
                <Text textAlign='start' margin='1rem 0'>or you can Sign Up with your email:</Text>
                <Box w='100%' >
                <Input placeholder='Your Name' type='text' margin='1rem 0' />

                    <Input placeholder='Email Address' type='email' margin='1rem 0' />
                <Input placeholder='Enter Password' type='password' margin='1rem 0' />
                <Stack spacing={5} direction='column'>
                    <Checkbox w='18rem' colorScheme='blue' defaultChecked>
                        I have read and agree to Ratatype's terms of use and privacy policy
                    </Checkbox>
                    <Checkbox colorScheme='blue' defaultChecked>
                        Receive our news
                    </Checkbox>
                </Stack>
                    <Box marginRight='80%' marginBottom='1rem' marginTop='1rem'>
                        <Button colorScheme='blue'>SIGN UP</Button> 

                    </Box>
                 

                </Box>

            </Container>
      
    </>
}
export default Signup;