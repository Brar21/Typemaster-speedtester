import {Box,Text} from "@chakra-ui/react";
import "../App.css"

function Footer() {
     
    return (
        <Box display={'flex'} flexWrap='wrap'>
    <hr color="green" />
        <Box className="footer" >
            <h3>For Devlopers</h3>
            <Text>About</Text>
            <Text>High Scores</Text>
            <Text>FAQ</Text>
            <Text>Contact Us</Text>
            <strong>Donate</strong>
            <Text>Privacy & Terms</Text>
            {/* For select diffrent languages we  make select tag here */}

            <select name="Language" id="language">
                <option value="EN">
                    English
                </option>
                <option value="HN">
                    Hindi
                </option>  <option value="EN">
                    English
                </option>  <option value="PN">
                    Punjabi
                </option>  <option value="IT">
                    Italian
                </option>
            </select>
{/* Now time to style this Footer */}
            </Box>

        </Box>
    )
}
export default Footer;