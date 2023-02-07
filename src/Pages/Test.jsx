import React, {useRef, useState} from 'react';
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

const texts =() =>
    `As I sit in my room late at night, staring at the computer screen,
     I decide it would be a good idea to create this text. There isnt much meaning to it,
    other than to get some simple practice. A lot of the texts that have been created are rather short, 
    and don't give a good representation of actual typing speed and accuracy. 
   They lack the length to gauge where your strengths and weaknesses are when typing`.split(' ')
        //.sort(() => Math.random()>0.5? 1:-1)

const Word=(props) =>
{
    const {text,active}=props

    return <span style={{
        fontWeight:active?'bold':'normal'
    }}>{props.text} </span>
}        

export const TestSpeed = () => {
   
    
    const { isOpen, onOpen, onClose } = useDisclosure();
  const [input,Setinput]=useState("")
    const randomText=useRef(texts())
    const [activeWord,SetactiveWord]=useState(0)

    function startType(value)
    {
        if(value.endsWith(' '))
        {
            SetactiveWord(index => index+1)
            Setinput(value+" ")
        } else
        {
            Setinput(value)
        }
    }
    return (
        <Box w='100%' h={'100vh'} bg='#577b87'>
            <Box w='70%' display={{base: "none",lg: "flex"}} flexdirection="row" m="auto" h='auto' p='5rem 0' gap={12}>
                <Box bg="white" h='45vh' borderRadius={10} w='80%' m='auto'>
                    <Text border={'1px solid'} color='black'>{randomText.current.map((word,index) =>{
                    //{
                    //    if(index===activeWord){
                    //        return (<strong>{word}</strong>)
                    //    }
                    //        return <span> {word} </span> 
                        return <Word text={word}
active={index===activeWord}
                        />
                        
                })}</Text>
                    <Textarea placeholder={'Start Typing....'} color='black' value={input} onChange={(e)=>startType(e.target.value)}  border='none' mt={'5px'}>
                </Textarea>

                </Box>
                <Box  >
                    <Text fontSize={25} fontWeight='700' color='whatsapp.500' display="flex" gap={3}><Text pt='5px' fontSize={28} color='white'><SlSpeedometer /></Text>SPEED</Text>
                    <span><Text fontFamily='mono' fontWeight='800' fontSize={28} m='8px'  color='facebook.200'>0 WPM</Text></span>
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
