import {Box,Heading,Image} from "@chakra-ui/react";
import png from "./web-maintenance.svg"
function TypingTeacher() {

    return (
        <Box w={'90%'} m={'auto'}>
            <Heading mt={10} mb={{lg:-20}}>Coming Soon...</Heading>
            <Image src={png} alt={png} w='100%' />
        </Box>
    )
}
export default TypingTeacher;