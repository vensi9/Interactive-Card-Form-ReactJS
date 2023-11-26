import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Text } from '@chakra-ui/react';
import Front from './images/bg-card-front.png';
import Back from './images/bg-card-back.png';
import BgMain from './images/bg-main-desktop.png';
import './App.css';
import { CardDetailsPage } from './components/CardDetailsPage';
import { FormDetails } from './components/FormDetails';

function App() {
  return (
    <>
      <Box position="relative" width="100vvw" height="100vh" borderRadius="10px" overflow="hidden">
        {/* Background card image */}
        <Image src={`${BgMain}`} objectFit="cover" w="30%" h="100vh" position="absolute" zIndex="-1" />
        <Box background={'hsl(0, 0%, 100%)'} width={'70%'} height={'100vh'} zIndex="-1" position={'absolute'} right={0}></Box>
        <Box >
          <Flex height={'100vh'} justifyContent={'center'} alignItems={'center'} gap='10vw'>
            <CardDetailsPage />
            <FormDetails />
          </Flex>
        </Box>
      </Box>

    </>
  );
}

export default App;
