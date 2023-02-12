import { Button, Input, Heading, Text } from '@chakra-ui/react';
import { Container, Box,Stack,Checkbox } from '@chakra-ui/react';
import {useState} from 'react';
import { Link } from "react-router-dom";

function Signup() {
const [state,setState]=useState({name:"",email:"",password:"",confirmpassword:""})
    return <>
            <Container w='100%' h={'100vh'}>
            <Heading textAlign='start' margin='1rem 0'>Create a free Account</Heading>
            <Text textAlign='start' margin='1rem 0'>Already have<Link to='/login'><strong color='blue'> Login now</strong></Link></Text>
               
                <Text textAlign='start' margin='1rem 0'>or you can Sign Up with your email:</Text>
                <Box w='100%' >
                <Input placeholder='Your Name' name='' value={} onChange={handleChange} type='text' margin='1rem 0' />

                    <Input placeholder='Email Address' name='' value={} onChange={handleChange} type='email' margin='1rem 0' />
                <Input placeholder='Enter Password' name='' value={} onChange={handleChange} type='password' margin='1rem 0' />
                <Input placeholder='Confirm Password' name='' value={} onChange={handleChange} type='password' margin='1rem 0' />

                <Stack spacing={5} direction='column'>
                    <Checkbox w='18rem' colorScheme='blue' defaultChecked>
                        I have read and agree to Typetest's terms of use and privacy policy
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