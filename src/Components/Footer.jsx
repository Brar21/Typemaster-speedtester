import {Box,Text} from "@chakra-ui/react";
import "../App.css"

function Footer() {
     
    return (
        <Box display={{lg:'flex',md:"grid"}} flexWrap='wrap'>
    <hr color="green" />
        <Box display={{lg:'flex',md:"grid"}} flexWrap='wrap'>
            <h3>For Devlopers</h3>
            <Text>About</Text>
            <Text>High Scores</Text>
            <Text>FAQ</Text>
            <Text>Contact Us</Text>
            <strong>Donate</strong>
            <Text>Privacy & Terms</Text>
            </Box>

        </Box>
    )
}
export default Footer;