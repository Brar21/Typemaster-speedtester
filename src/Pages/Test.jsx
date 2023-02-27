import React, { useEffect, useRef, useState } from "react";
import { Text, Button, Box, useDisclosure } from "@chakra-ui/react";
import { SlSpeedometer } from "react-icons/sl";
import { GiArcheryTarget } from "react-icons/gi";
import { VscDebugRestart } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,Image,Heading
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import pc from "./pc.svg"
const texts = () =>
  `As I sit in my room late at night, staring at the computer screen, I decide it would be a good idea to create this text. There isn't much meaning to it, other than to get some simple practice. A lot of the texts that have been created are rather short, and don't give a good representation of actual typing speed and accuracy. They lack the length to gauge where your strengths and weaknesses are when typing.`
    .split(" ")
    .sort(() => (Math.random() > 0.5 ? 1 : -1));

function Word(props) {
  const { text, active, correct } = props;

  if (correct === true) {
    return (
      <span
        style={{
          color: "green",
          fontWeight: 900,
        }}
      >
        {text}{" "}
      </span>
    );
  }
  if (correct === false) {
    return (
      <span
        style={{
          color: "red",
          fontWeight: 900,
        }}
      >
        {text}{" "}
      </span>
    );
  }
  if (active) {
    return (
      <span
        style={{
          fontWeight: "bold",
        }}
      >
        {text}{" "}
      </span>
    );
  }
  return <span>{text} </span>;
}
// eslint-disable-next-line no-func-assign
Word = React.memo(Word);

function Timer(props) {
  const { correctWords, startCounting } = props;
  const [timeElpased, SettimeElpased] = useState(0);
  useEffect(() => {
    let id;
    if (startCounting) {
      id = setInterval(() => {
        SettimeElpased((oldtime) => oldtime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(id);
    };
  }, [startCounting]);
  const minutes = timeElpased / 60;
  return (
    <>
      <Text pt="5px" fontSize={28} color="white" display={"flex"}>
        <SlSpeedometer />
        SPEED
      </Text>
      <span>
        <Text
          fontFamily="mono"
          fontWeight="800"
          fontSize={28}
          m="8px"
          color="facebook.200"
        >
          {Math.floor(correctWords / minutes || 0)} WPM
        </Text>
      </span>
      <Text pt="5px" fontSize={28} color="white" display={"flex"}>
        <GiArcheryTarget />
        Time
      </Text>

      <span>
        <Text
          fontFamily="mono"
          fontWeight="800"
          fontSize={28}
          m="8px"
          color="facebook.200"
        >
          {timeElpased}
        </Text>
      </span>
    </>
  );
}
export const TestSpeed = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, Setinput] = useState("");
  const randomText = useRef(texts());
  const [activeWord, SetactiveWord] = useState(0);
  const [correctWords, setcorrectWords] = useState([]);
  const [startCount, SetstartCounting] = useState(false);
  function startType(value) {
    if (activeWord === randomText.current.length) {
      return;
    }
    if (!startCount) {
      SetstartCounting(true);
    }
    if (value.endsWith(" ")) {
      if (activeWord === randomText.current.length - 1) {
        SetstartCounting(false);
        Setinput("Completed");
      } else {
        Setinput("");
      }
      SetactiveWord((index) => index + 1);
      setcorrectWords((el) => {
        const word = value.trim();
        const newResult = [...el];
        newResult[activeWord] = true;
        newResult[activeWord] = word === randomText.current[activeWord];
        return newResult;
      });
    } else {
      Setinput(value);
    }
  }
  return (
      <Box w="100%" h={"80vh"} bg="#577b87">
          <Box   w="70%"
        display={{ base: "grid", lg: "none" }}
        flexdirection="column"
        m="auto"
                 >
              <Heading color={'white'}>For giving you need Laptop or Personal desktop. So, make sure you login on one these things.</Heading>
              <Image src={pc} alt={pc} />
          </Box>
      <Box
        w="70%"
        display={{ base: "none", lg: "flex" }}
        flexdirection="row"
        m="auto"
        h="auto"
        p="5rem 0"
        gap={12}
      >
        <Box bg="white" h="48vh" borderRadius={10} w="80%" m="auto">
          <Text p={5} fontSize='25px' color="black">
            {randomText.current.map((word, index) => {
              return (
                <Word
                  text={word}
                  active={index === activeWord}
                  correct={correctWords[index]}
                />
              );
            })}
          </Text>
          <Textarea
            placeholder={"Start Typing....sds "}
            color="black"
            value={input}
            onChange={(e) => startType(e.target.value)}
                      border="none"
                      autoFocus={true}
            alignSelf='end'
          ></Textarea>
        </Box>
        <Box>
          <Timer
            startCounting={startCount}
            correctWords={correctWords.filter(Boolean).length}
          />

          <Button
            mt="2rem"
            bg="none"
            color="#ffe318"
            fontSize={25}
            _hover={{ bg: "none" }}
            onClick={onOpen}
          >
            <Text pr="5px">
              <VscDebugRestart />
            </Text>
            Restart
          </Button>
          <AlertDialog
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            size={{ base: "xs", lg: "2xl" }}
          >
            {" "}
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  <Text
                    bg="beige"
                    w="150px"
                    h="150px"
                    borderRadius="50%"
                    m="auto"
                    p={{ base: "10% 10.8%", lg: "5% 5.8%" }}
                  >
                    <VscDebugStart fontSize={90} fill="green" />
                  </Text>
                </AlertDialogHeader>

                <AlertDialogBody
                  m="auto"
                  fontSize={{ base: 15, lg: 23 }}
                  fontWeight="600"
                >
                  <Text display="flex">
                    {" "}
                    Prepare yourself before start typing...
                  </Text>
                </AlertDialogBody>

                <AlertDialogFooter m="1rem auto">
                  <Button
                    colorScheme="whatsapp"
                    p="2rem 2.5rem"
                                      fontSize={{base: 18,lg: 30}}
                                      onClick={()=>window.location.reload()}
                  >
                    Start Typing Again
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Box>
      </Box>
    </Box>
  );
};
