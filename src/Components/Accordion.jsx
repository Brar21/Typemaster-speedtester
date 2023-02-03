import React from 'react';
import { Box, Image,Text } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
export const Accordions = (props) => {
    const { text, tex, te, t, kjh, Heading, src,kj } = props;
    return (
        <Box>
            <Accordion allowMultiple>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontSize={30} m='1rem'>
                                        {Heading}
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign='start'>
                                <Box display={{base:'grid',lg:'flex'}} flexDirection='row' gap={10}>
                                    <Box w='60%' h='auto' m='auto' fontSize={15} display='flex' flexDirection='column'><Text></Text>{text}
                                      
                                        <Text>{tex} </Text>
                                        <Text>{te} </Text>
                                        <Text>{t}</Text>
                                        <Text>{kjh}</Text>
                                        <Text>{kj}</Text></Box>
                                    <Image w='200px' h='auto' border='none' src={src} />
                                </Box>
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>
        </Box>
    )
}
