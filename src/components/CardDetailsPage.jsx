import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Front from '../images/bg-card-front.png';
import Back from '../images/bg-card-back.png';

export const CardDetailsPage = () => {
    // base: "0em", // 0px
    // sm: "30em", // ~480px.
    // md: "48em", // ~768px
    // lg: "62em", // ~992px
    // xl: "80em", // ~1280px
    // "2xl": "96em", // ~1536px
    return (
        <>
            <Flex display={{ base: 'block', md: 'flex' }} flexDir={'column'} gap={{ md: 5, lg: 9 }} maxW={700} w={{ base: 250, sm: 300, md: 320, lg: 380 }}>
                {/* front/ */}
                <Box position="relative" top={{ base: '98', md: 'auto' }} boxShadow={'14px 6px 20px 0px hsl(279deg 6% 55% / 27%)'} height={{ base: '25vh', sm: "27vh",md:'31vh', lg: '33vh' }} right={{ base: '0', md: '6vw' }} borderRadius="10px" zIndex={20} overflow={'hidden'}>
                    {/* Background card image */}
                    <Image src={`${Front}`} w="100%" position="absolute" height={{ base: '25vh', sm: '27vh', md: "auto" }} zIndex="-1" />

                    {/* Card content */}
                    <Box position="relative" p={6} color="white" fontFamily={'Space Grotesk'}>
                        <Flex justifyContent='space-evenly' flexDirection={'column'} gap={{ base: '9vw', sm: '5vw', lg: '3.5vw' }}>
                            {/* Card Chip */}
                            <Flex alignItems={'center'} gap={2.5}>
                                <Box backgroundColor="white" p={{ base: 3, sm: 4, lg: 5 }} borderRadius="50%"></Box>
                                <Box outline='0.1vw solid' w={{ base: 11, sm: 13, lg: 15 }} h={{ base: 11, sm: 13, lg: 15 }} outlineColor={'white'} borderRadius={50}></Box>
                            </Flex>
                            <Flex justifyContent="space-between" flexDir={'column'} gap={'1vw'}>
                                {/* Card Number */}
                                <Text fontSize={{ base: '12px', sm: '16px', md: '18px', lg: '20px', '2xl': "20px" }} letterSpacing={3} fontWeight={500}>
                                    3434 4545 2323 5678
                                </Text>
                                {/* Cardholder Name and Expiry */}
                                <Flex justifyContent="space-between">
                                    <Text fontSize={{ base: 9, sm: 11, lg: 12 }} letterSpacing={1}>Vensi Name</Text>
                                    <Text fontSize={{ base: 9, sm: 11, lg: 12 }} letterSpacing={1}>00/22</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>

                {/* Back */}
                <Box boxShadow={'14px 6px 20px 0px hsl(279deg 6% 55% / 27%)'} position="relative" top={{ base: '-140px', md: 'auto' }} left={{ base: 50, md: 0 }} height={{ base: '25vh', sm: '27vh', md: "33vh" }} borderRadius="10px" zIndex={10} overflow={'hidden'}>
                    {/* Background card image */}
                    <Image src={`${Back}`} w="100%" h="100%" position="absolute" zIndex="-1" />

                    {/* Card content */}
                    <Flex position="relative" fontFamily={'Space Grotesk'}
                        justifyContent={'end'} alignItems={'center'} right={{ base: '9vw', sm: '7vw', md: '5vw', lg: '4vw' }} height='-webkit-fill-available'>

                        {/* <Flex justifyContent="space-between" flexDir={'column'} gap={'1.5vw'}> */}
                        {/* Card Number */}
                        <Text fontSize={10} fontWeight={500} letterSpacing={2}>
                            123
                        </Text>
                        {/* </Flex> */}
                    </Flex>
                </Box>
            </Flex >
        </>
    )
}
