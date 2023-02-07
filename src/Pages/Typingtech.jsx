import { Box } from '@chakra-ui/react';
import { Accordions } from '../Components/Accordion';

function TypingTech() {

    return (
        <Box w='70%' m='auto' fontSize={'1rem'}>
            <Accordions Heading="How to put your Fingers on Keyboard ?" text="Touch typing is all about the idea that each finger has its own area on the keyboard. Thanks to that fact you can type without looking at the keys. Practice regularly and your fingers will learn their location on the keyboard through muscle memory." src='https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/computer_keyboard.png.webp?itok=kaZNbwZI' />

            <Accordions Heading='Correct way of sitting for typing' text=' 1. Sit straight and remember to keep your back straight.'
                tex='2. Keep your elbows bent at the right angle.'
                te='3. Face the screen with your head slightly tilted forward.'
                t='4. Keep at least 45 - 70 cm of distance between your eyes and the screen.'
                kjh='5. Еxpose the shoulder, arm, and wrist muscles to the least possible strain. The wrists can touch the tabletop in front of the keyboard. Never shift your body weight to the wrists by resting on them.' src='https://www.ratatype.com/static/i/learn/seating/en.webp' />
            <Accordions Heading='Starting Fingers position' text='Curve your fingers a little and put them on the ASDF and JKL; keys which are located in the middle row of the letter keys. This row is called HOME ROW because you always start from these keys and always return to them.'

tex='F and J keys under your index fingers should have a raised line on them to aide in finding these keys without looking.' src="https://www.ratatype.com/static/i/learn/keyboard/en/main_keys.webp" />
            <Accordions Heading='Keyboard scheme' text='The color-coded keyboard under lesson input field will help you to understand which finger should press each key.'
                tex='1. Hit keys only with the fingers for which they have been reserved.'
                te= '2. When typing, imagine the location of the symbol on the keyboard.'
                t='3. Establish and maintain a rhythm while typing. Your keystrokes should come at equal intervals.'
                kjh='4. The SHIFT key is always pressed by the pinky finger opposite to the one hitting the other key.'
                kj='5.Use the thumb of whichever hand is more convenient for you to press the Space bar.'
                src='https://www.ratatype.com/static/i/learn/keyboard/en/keyboard.webp' />
            <Accordions Heading='Fingers motion' text='Don`t look at the keys when you type.Just slide your fingers around until they find the home row marking.'
                tex='Limit your hand and finger movement only to what is necessary to press a specific key. Keep your hands and fingers close to the base position. This improves typing speed and reduces stress on the hands.'
                te='Pay attention to ring fingers and little fingers, since they are considerably underdeveloped.'
                src='https://www.ratatype.com/static/i/learn/man.webp'
            />
            <Accordions Heading='Typingspeed' text='1. Do not rush when you just started learning. Speed up only when your fingers hit the right keys out of habit.'
                tex='2. Take your time when typing to avoid mistakes. The speed will pick up as you progress.'
                te='3. Always scan the text a word or two in advance.'
                t='4. Pass all typing lessons at Ratatype. It will help you to get above the average typing speed.'
                src='https://code-projects.org/wp-content/uploads/2020/10/Capture.png'
            />
            <Accordions Heading='Take careof yourself' text='Take a break if you feel that you get distracted easily and are making a lot of mistakes. It is more productive to come back when you feel refreshed.' src='https://cdn5.f-cdn.com/files/download/46063286/15dcdc.jpg' />

        </Box>
    )
}
export default TypingTech;