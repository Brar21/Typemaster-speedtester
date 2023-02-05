import {  Box, Image, Text, Button, Heading, useDisclosure } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from "react-router-dom";
import { GrCertificate } from "react-icons/gr";
import { SlSpeedometer } from "react-icons/sl";
import { GiOnTarget } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { VscDebugStart } from "react-icons/vsc";
function Test() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box  w={{base:'auto',lg:'100%'}} h='auto' >
            <Box bg='#577b87' h={{base:'90vh',lg:'80vh',xl:'80vh'}} >
                <Box w='70%' m='auto' display={{base:'grid',lg:'flex'}} flexDirection='row' gap={10} p='1rem' >
                    <Box>
                        <Image w='auto' borderRadius={20} src='https://i.pinimg.com/originals/3f/82/40/3f8240fa1d16d0de6d4e7510b43b37ba.gif' />
                    </Box>
                    <Box m='auto' _disabled='flex' flexDirection='column' >
                        <Heading textAlign='start' color='white'>Speed Test</Heading>
                        <Text textAlign='start' p='1.65rem 0' color='white' fontSize={18}>You can test your typing speed in wpm on English, Spanish, or French and impress your friends or employers with your own typing certificate. Test your typing speed, and find out how fast you type, and then improve your typing speed if necessary.</Text>
                        <Button bg='#e7b75f' p='2rem' _hover={{ bg: "yellow.300", color: 'brown' }} fontSize='20px' onClick={onOpen}>
                            Take Free Typing Test
                        </Button>

                        <AlertDialog
                            isOpen={isOpen}
                            onClose={onClose}
                            isCentered
                            size={{base:'xs',lg:"2xl"}}

                        >                                <AlertDialogOverlay  >
                                <AlertDialogContent  >
                                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                        <Text bg='beige' w='150px' h='150px' borderRadius='50%' m='auto' p={{base:'10% 10.8%',lg:"5% 5.8%"}}><VscDebugStart fontSize={90} fill='green' /></Text>
                                    </AlertDialogHeader>

                                    <AlertDialogBody m='auto' fontSize={{base:15,lg:23}} fontWeight='600'>
                                        <Text display='flex'> You can <span > <Link to='/donate'><Text pl={2} _hover={{ color: "blue", textDecoration: 'underline' }}>thanks us and Donate</Text></Link></span></Text>
                                    </AlertDialogBody>

                                    <AlertDialogFooter m='1rem auto'>
                                        <Button onClick={onClose} colorScheme='whatsapp' p='2rem 2.5rem' fontSize={{base:18,lg:30}}>
                                            <Link to="/testspeed/test">Start Typing Test</Link>
                                        </Button>

                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialogOverlay>
                        </AlertDialog>
                    </Box>
                </Box>
            </Box>
            <Box w={{base:'auto',lg:'70%'}} bg='white' m='-10rem auto 0' border='2px solid red' borderRadius={15} >
                <Image w='50%' m='auto' h={{base:'auto',lg:400}} src='https://img.freepik.com/premium-vector/gold-silver-bronze-medals-flat-style-icon-set_201904-154.jpg?w=2000' />
                <Box display={{base:'grid',md:"grid",lg:'flex'}} w={{base:'auto',lg:'100%'}} m='auto' flexDirection='row' gap={10} >
                    <Box w={{base:'auto',lg:'70%'}} m='auto' color='black'>
                        <TableContainer>
                            <Table variant='simple'>

                                <Thead w={{base:'auto',lg:'100%'}} >
                                    <Tr display='flex' flexDirection='row' w={{base:'auto',lg:'100%'}} justifyContent='space-between'>
                                        <Th display='flex' gap='5px' pl="1rem"><GrCertificate fontSize={{base:'auto',lg:20}} />CERTIFICATE</Th>
                                        <Th display='flex' gap='5px' ml='2rem'><SlSpeedometer fontSize={20} />SPEED</Th>
                                        <Th display='flex' gap='5px'><GiOnTarget fonrSize={20} />ACCURACY</Th>
                                    </Tr>
                                </Thead>
                                <hr />
                                <Tbody w={{base:'auto',lg:'100%'}} fontWeight='500' color={'black'}>
                                    <Tr display='flex' flexDirection='row' w={{base:'auto',lg:'100%'}} justifyContent='space-between' alignItems='center'>
                                        <Td display='flex' textAlign='center'><Image w={30} src='https://cdn.vectorstock.com/i/preview-1x/65/82/silver-rosette-vector-996582.jpg' /><Text pt={2}>PLATINUM</Text></Td>
                                        <Td pl='5px'>70 WPM</Td>
                                        <Td>99.5%</Td>
                                    </Tr>
                                    <hr />
                                    <Tr display='flex' flexDirection='row'w={{base:'auto',lg:'100%'}}justifyContent='space-between' color='black'>
                                        <Td display='flex' textAlign='center' ><Image w={35} src='https://static.vecteezy.com/system/resources/previews/005/724/486/original/gold-circle-medal-with-red-ribbon-golden-round-trophy-for-first-place-of-competition-metal-award-for-leader-on-white-background-honor-victory-prize-isolated-illustration-vector.jpg' /><Text pt={3}>GOLD</Text></Td>
                                        <Td pr='5px'>50 WPM</Td>
                                        <Td>98.7%</Td>
                                    </Tr>
                                    <hr />
                                    <Tr display='flex' flexDirection='row' w={{base:'auto',lg:'100%'}}justifyContent='space-between' color='black'>
                                        <Td display='flex' textAlign='center'><Image w={30} src='https://t3.ftcdn.net/jpg/04/87/34/18/360_F_487341885_43bjb9IUYv8c7Fhxm5kp9KgvWgZUeNMo.jpg' /><Text pt={2}>SILVER</Text></Td>
                                        <Td>40 WPM</Td>
                                        <Td>96%</Td>
                                    </Tr>
                                    <hr />
                                </Tbody>
                            </Table>
                        </TableContainer>
                    <Box width={{base:'auto',lg:'auto'}} m={{base:'auto',lg:'1rem'}} p='1rem'>
                        <Text textAlign='start' fontSize={18} color='black'>
                            You can take the test as many times as you want! Only the best score will count towards your certification, there’s no need to worry about making a mistake.</Text>
                        <Box display='flex' h='5rem' mt={5} color='blue' fontSize={20} fontWeight='500' textAlign='center' _hover={{ textDecoration: "underline", gap: "1.5rem" }} gap='0.5rem' >
                            <Text textAlign='start' pb='5rem' ><Link to='/testspeed/test'>Take Typing Test</Link> </Text><Text pt={1} fontSize={22}><AiOutlineArrowRight /></Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
            </Box>
            </Box>
            
    )
}
export default Test;