import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
Select
} from '@chakra-ui/react';

import { FaRegKeyboard } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home() {

    return <Box bg='#f3f3f3' w={'100%'}>
    <Box bg = '#577b87' h = '60vh' >
        <Box  w='80%' m='auto'  display={{sm:'grid',md:'flex',lg:'flex'}}justifyContent='space-evenly' >
            <Box w={"40%"} m='auto'>
                <Image src='https://ichef.bbci.co.uk/images/ic/1280xn/p0252jmf.jpg' alt='Home_page' w='auto' mt='2rem'></Image>
            </Box>
            <Box display='flex' flexDirection='column'>
                <Heading color='white' textAlign='start' mb='1rem' mt='2rem'>Type Faster</Heading>
                <Text mb='1rem' textAlign='start' color='white'>Check your typing speed online. Grow your typing ablity with our free lessons</Text>
                    <Box display='flex'> <FaRegKeyboard fontSize='20px' color='white' /> <Select placeholder='Select option' w='100px' bg="transparent" border='none' mb="10px" color='white' textDecoration='underline'>
                        <option value='english'>Enlgish</option>
                        <option value='hindi'>Hindi</option>
                        <option value='french'>French</option>
                    </Select>
                    </Box>  
                    {/* <Menu>
                    <MenuButton alignContent='start'mt='1rem'ml='2.5rem' w='10rem' mb='5rem' as={Button}  leftIcon={<FaRegKeyboard/>}>
                        Language
                    </MenuButton>
                    <MenuList pl='6.5rem' >
                        <MenuItem>Enlgish</MenuItem>
                        <MenuItem>Dutch</MenuItem>
                        <MenuItem>French</MenuItem>
                        <MenuItem>Italian</MenuItem>
                        <MenuItem>Hindi</MenuItem>
                        </MenuList>
                        <Button width='80%' m='auto' mt='1px' colorScheme='blue'>Start your Typing Test</Button>
                </Menu> */}
                
            </Box>

        </Box>
    </Box>

        <Box display='flex' flexDirection='column' gap='6'>

            <Box bg='white' mt='-100px' w='70%' borderRadius='15px'  ml='15%' display={{md:'grid',lg:'flex'}} justifyContent='space-around'>
                <Image src='https://www.tckpublishing.com/wp-content/uploads/2015/02/keyboard-finger-placement.jpg' width={'auto'} p='1.5rem'></Image>
                <Box m={{sm:'1rem',lg:'3rem'}}>
                    <Heading textAlign='start' mb='1rem'>Learn Typing</Heading>
                    <Text textAlign='start' color={'black'} mb='1rem' >Speed up your learning progress with TypeMaster Free Exercises and develop valuable keyboarding skills!</Text>
                    <Link to="/typingteacher" className='pageLink'>Learn Typing Free </Link>
                </Box>
            </Box>
            <Box bg='white'  w='70%' borderRadius='15px' mb='100px' ml='15%'  display={{lg:'flex',md:'grid'}} justifyContent='space-around'>
                <Image src='https://www.pngtosvg.com/gallery/wp-content/uploads/2020/12/1949685070.png' width={'auto'} p='1.5rem'></Image>
                <Box m={{sm:'1rem',lg:'3rem'}}>
                    <Heading textAlign='start' mb='1rem'>Typing Test</Heading>
                    <Text textAlign='start' color={'black'} mb='1rem'>Take an online typing test to find out your typing speed and impress friends or employers with your personal typing skills.</Text>
                    <Link to="/testspeed" className='pageLink'>Take Typing Test Free </Link>
                </Box>
            </Box>
        </Box>
    </Box>
    
}
export default Home;