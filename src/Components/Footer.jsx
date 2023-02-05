import {Box,Text} from "@chakra-ui/react";
import "../App.css"

function Footer() {
     
    return (
        <Box w={"full"}  h={10}  margin={'auto'}>
    <hr color="green" />
        <Box display={{base:'flex'}} width='70%' gap={7} textAlign='center' flexWrap='wrap' m={'auto'}>
            <h3>For Devlopers</h3>
            <Text>About</Text>
            <Text>High Scores</Text>
            <Text>FAQ</Text>
            <Text>Contact Us</Text>
                <Text as={'button'} border={2} borderColor='yellow' color='teal.500'>
                <strong>Donate</strong>
                </Text>
                
                
            <Text>Privacy & Terms</Text>
            </Box>

        </Box>
    )
}
export default Footer;