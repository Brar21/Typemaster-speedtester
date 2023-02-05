import {Box,Text} from "@chakra-ui/react";

function Footer() {
     
    return (
        <Box w={"full"}  h={10}  margin={'1rem auto'}>
    <hr color="green" />
        <Box display={'flex'} width='80%' gap={15} textAlign='center' flexWrap='wrap' m={'auto'} p='1rem'>
            <h3>For Devlopers</h3>
            <Text>About</Text>
            <Text>High Scores</Text>
            <Text>FAQ</Text>
            <Text >Contact Us</Text>
                <Text as={'button'} border={2} borderColor='yellow' color='teal.500'>
                <strong>Donate</strong>
                </Text>
            <Text>Privacy & Terms</Text>
            </Box>

        </Box>
    )
}
export default Footer;