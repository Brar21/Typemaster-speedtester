import React from 'react';
import { Link } from '@chakra-ui/react';
import { Text, Button, Box, useDisclosure } from '@chakra-ui/react';
import { SlSpeedometer } from "react-icons/sl";
import { GiArcheryTarget } from "react-icons/gi";
import { VscDebugRestart } from 'react-icons/vsc';
import { VscDebugStart, } from 'react-icons/vsc';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';

export const TestSpeed = () => {
   
    
    const { isOpen, onOpen, onClose } = useDisclosure();
   
  
   
    return (
        <Box w='100%' bg='#577b87'>
            <Box w='70%' display="flex" flexdirection="row" m="auto" h='auto'  p='5rem 0' gap={12}>
                <Box bg="white" h='45vh' borderRadius={10} w='80%' m='auto'>
                 
                    <Textarea placeholder={'Start Typing....'}  border='none' mt={'5px'}>
                </Textarea>

                </Box>
                <Box  >
                    <Text fontSize={25} fontWeight='700' color='whatsapp.500' display="flex" gap={3}><Text pt='5px' fontSize={28} color='white'><SlSpeedometer /></Text>SPEED</Text>
        
                    <Text fontSize={25} fontWeight='700' color='whatsapp.500' display="flex" gap={3}><Text pt='5px' fontSize={28} color='white'><GiArcheryTarget /></Text>ACCURACY</Text>
                    <span><Text fontFamily='mono' fontWeight='800' fontSize={28} m='8px'  color='facebook.200'>100%</Text></span>
                    <Button mt='2rem' bg='none' color='#ffe318' fontSize={25} _hover={{ bg: 'none' }} onClick={onOpen}><Text pr='5px'><VscDebugRestart /></Text>Restart</Button>
                    <AlertDialog
                        isOpen={isOpen}
                        onClose={onClose}
                        isCentered
                        size={{base:'xs',lg:"2xl"}}

                    >                                <AlertDialogOverlay  >
                            <AlertDialogContent  >
                                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                    <Text bg='beige' w='150px' h='150px' borderRadius='50%' m='auto'  p={{base:'10% 10.8%',lg:"5% 5.8%"}}><VscDebugStart fontSize={90} fill='green' /></Text>
                                </AlertDialogHeader>

                                <AlertDialogBody m='auto' fontSize={{base:15,lg:23}} fontWeight='600'>
                                    <Text display='flex'> Prepare yourself before start typing...</Text>
                                </AlertDialogBody>

                                <AlertDialogFooter m='1rem auto'>
                                    <Button  colorScheme='whatsapp' p='2rem 2.5rem'fontSize={{base:18,lg:30}}>
                                        <Link herf="/testspeed/test">Start Typing Again</Link>
                                    </Button>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>
                </Box>
            </Box>

        </Box >
    )
}
