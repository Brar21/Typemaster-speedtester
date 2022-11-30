import React,{useState} from 'react';
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
import Texts from "../Components/Text";
import Speed from '../Components/Speed';
import getText from '../Components/getText';
const intialState = {
    text:getText(),
    useInput: '',
    symbols: 0,
    sec: 0,
    started: false,
    finish: false,
}
export const TestSpeed = () => {
   
   const [state,setState]=useState(intialState)
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const onRestart = () => {
        setState(intialState)
        onClose();
    }
    const onUserInputChange = (e) => {
        const val = e.target.value;
        setTime();
        onFinish(val);
        setState({
            useInput: val,
            symbols:countSymbols(val)
        })
    }
   const  countSymbols=(useInput)=>{
        const text = state.text.replace(" ", '');
       return useInput.replace(' ', '').split('').filter((paragraph, initial) => paragraph === text[initial]).length;
    }
    var interval;
    const setTime=()=>{
        if (!state.started) {
            setState({ started: true });
            interval = setInterval(() => {
                setState(prevProps => {
                    return { sec: prevProps.sec + 1 }
                })
            }, 1000)
        }
    }
 
    const onFinish = (useInput) => {
        if (useInput === state.text) {
            clearInterval(interval)
            setState({
                finish:true
            })
       }
   }
   
    return (
        <Box w='100%' bg='#577b87'>
            <Box w='70%' display="flex" flexdirection="row" m="auto" h='auto'  p='5rem 0' gap={12}>
                <Box bg="white" h='45vh' borderRadius={10} w='80%' m='auto'>
                    {/* <Text textAlign='start' p='1.5rem' fontSize={25} color='gray.500'> */}
                    {/* <Text fontSize={25} textAlign='start' p='1.5rem'> */}
                        <Texts text={state.text} useInput={state.useInput} readOnly={state.finish} />                    
                    {/* </Text> */}
                {/* </Text> */}
                    <Textarea placeholder={'Start Typing....'} value={state.useInput} onChange={onUserInputChange} border='none' mt={'5px'}>
                </Textarea>

                </Box>
                <Box  >
                    <Text fontSize={25} fontWeight='700' color='whatsapp.500' display="flex" gap={3}><Text pt='5px' fontSize={28} color='white'><SlSpeedometer /></Text>SPEED</Text>
                    {/* <span> */}
                        {/* <Text fontFamily='mono' fontWeight='800' fontSize={28} m='8px' color='facebook.200' > */}
                    {/* </Text> */}
                {/* </span> */}
                    <Speed sec={state.sec} symbols={state.symbols} />

                    <Text fontSize={25} fontWeight='700' color='whatsapp.500' display="flex" gap={3}><Text pt='5px' fontSize={28} color='white'><GiArcheryTarget /></Text>ACCURACY</Text>
                    <span><Text fontFamily='mono' fontWeight='800' fontSize={28} m='8px'  color='facebook.200'>100%</Text></span>
                    <Button mt='2rem' bg='none' color='#ffe318' fontSize={25} _hover={{ bg: 'none' }} onClick={onOpen}><Text pr='5px'><VscDebugRestart /></Text>Restart</Button>
                    <AlertDialog
                        isOpen={isOpen}
                        onClose={onClose}
                        isCentered
                        size="2xl"

                    >                                <AlertDialogOverlay  >
                            <AlertDialogContent  >
                                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                    <Text bg='beige' w='150px' h='150px' borderRadius='50%' m='auto' p="5% 5.8%"><VscDebugStart fontSize={90} fill='green' /></Text>
                                </AlertDialogHeader>

                                <AlertDialogBody m='auto' fontSize={23} fontWeight='600'>
                                    <Text display='flex'> Prepare yourself before start typing...</Text>
                                </AlertDialogBody>

                                <AlertDialogFooter m='1rem auto'>
                                    <Button onClick={onRestart} colorScheme='whatsapp' p='2rem 2.5rem' fontSize={30}>
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
