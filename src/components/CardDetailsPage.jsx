import React from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Text } from '@chakra-ui/react';
import Front from '../images/bg-card-front.png';
import Back from '../images/bg-card-back.png';

export const CardDetailsPage = () => {
    return (
        <>
            <Flex flexDir={'column'} gap={9} maxW={700} w={380}>
                {/* front/ */}
                <Box position="relative" height="33vh" right={'6vw'} borderRadius="10px" overflow="hidden">
                    {/* Background card image */}
                    <Image src={`${Front}`} w="100%" position="absolute" zIndex="-1" />

                    {/* Card content */}
                    <Box position="relative" p={6} color="white" fontFamily={'Space Grotesk'}>
                        <Flex justifyContent='space-evenly' flexDirection={'column'} gap={'3.5vw'}>
                            {/* Card Chip */}
                            <Flex alignItems={'center'} gap={2.5}>
                                <Box backgroundColor="white" p={5} borderRadius="50%"></Box>
                                <Box outline='0.1vw solid' w={15} h={15} outlineColor={'white'} borderRadius={50}></Box>
                            </Flex>
                            <Flex justifyContent="space-between" flexDir={'column'} gap={'1vw'}>
                                {/* Card Number */}
                                <Text fontSize={20} letterSpacing={3} fontWeight={500}>
                                    3434 4545 2323 5678
                                </Text>
                                {/* Cardholder Name and Expiry */}
                                <Flex justifyContent="space-between">
                                    <Text fontSize="12px" letterSpacing={1}>Vensi Name</Text>
                                    <Text fontSize="12px" letterSpacing={1}>00/22</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>

                {/* Back */}
                <Box position="relative" height="33vh" borderRadius="10px" overflow="hidden">
                    {/* Background card image */}
                    <Image src={`${Back}`} w="100%" h="100%" position="absolute" zIndex="-1" />

                    {/* Card content */}
                    <Flex position="relative" fontFamily={'Space Grotesk'}
                        justifyContent={'end'} alignItems={'center'} right={'3vw'} height='-webkit-fill-available'>

                        {/* <Flex justifyContent="space-between" flexDir={'column'} gap={'1.5vw'}> */}
                        {/* Card Number */}
                        <Text fontSize={10} fontWeight={500} letterSpacing={2}>
                            123
                        </Text>
                        {/* </Flex> */}
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}
