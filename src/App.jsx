import { Box, Flex, Image } from '@chakra-ui/react';
// import Front from './images/bg-card-front.png';
// import Back from './images/bg-card-back.png';
import BgMain from './images/bg-main-desktop.png';
import MobileMain from './images/bg-main-mobile.png';
import './App.css';
import { CardDetailsPage } from './components/CardDetailsPage';
// import { FormDetails } from './components/FormDetails';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <>
      <Box position="relative" width="100vvw" height="100vh" borderRadius="10px">
        {/* Background card image */}
        <Image src={`${BgMain}`} display={{ base: 'none', md: 'block' }} w={{ md: "30%" }} h={{ md: "100vh" }} position="absolute" zIndex="-1" />
        <Image src={`${MobileMain}`} display={{ base: 'block', md: 'none' }} w={{ base: "100%" }} h={{ md: "100vh" }} position="absolute" zIndex="-1" />
        <Box background={'hsl(0, 0%, 100%)'} w={{ base: "100%", md: "70%" }} h={{ base: "70vh", md: "100vh" }} zIndex="-1" position={'absolute'} right={{ base: 'auto', md: 0 }} bottom={{ base: '-60px', md: 'auto' }}></Box>
        <Box >
          <Flex display={{ base: 'grid', md: 'flex' }} height={'100vh'} justifyContent={'center'} alignItems={'center'} gap={{ md: '6vw', lg: '10vw' }}>
            <CardDetailsPage />
            {/* <FormDetails /> */}
        <ThankYou />
          </Flex>
        </Box>
      </Box>

    </>
  );
}

export default App;
