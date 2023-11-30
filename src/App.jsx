import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormDetails } from './components/FormDetails';
import ThankYou from './components/ThankYou';
import BgMain from './images/bg-main-desktop.png';
import BgMobile from './images/bg-main-mobile.png';

function App() {
  return (
    <>
      <Box position="relative" width="100vvw" height="100vh" borderRadius="10px">
        {/* Background content*/}
        <Image src={`${BgMain}`} display={{ base: 'none', md: 'block' }} w={{ md: "30%" }} h={{ md: "100vh" }} position="absolute" zIndex="-1" />
        <Image src={`${BgMobile}`} display={{ base: 'block', md: 'none' }} w={{ base: "100%" }} h={{ md: "100vh" }} position="absolute" zIndex="-1" />
        <Box background={'hsl(0, 0%, 100%)'} w={{ base: "100%", md: "70%" }} h={{ base: "70vh", md: "100vh" }} zIndex="-1" position={'absolute'} right={{ base: 'auto', md: 0 }} bottom={{ base: '-40px', sm: '-60px', md: 'auto' }}></Box>

        {/* Navigated Pages */}
        <Flex display={{ base: 'grid', md: 'flex' }} height={'100vh'} justifyContent={'center'} alignItems={'center'} gap={{ md: '6vw', lg: '10vw' }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<FormDetails />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </BrowserRouter>
        </Flex>

      </Box>

    </>
  );
}

export default App;
