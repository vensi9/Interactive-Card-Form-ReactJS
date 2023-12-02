import React from 'react'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';
import Complete from '../images/icon-complete.svg'
import Front from '../images/bg-card-front.png';
import Back from '../images/bg-card-back.png';

function ThankYou() {
    const location = useLocation();
    const cardDetails = location.state?.cardDetails;
    return (
        <Box >
            <Flex display={{ base: 'grid', md: 'flex' }} height={'100vh'} justifyContent={'center'} alignItems={'center'} gap={{ md: '6vw', lg: '10vw' }}>
                {cardDetails && (
                    <>
                        <Flex display={{ base: 'block', md: 'flex' }} flexDir={'column'} gap={{ md: 5, lg: 9 }} maxW={700} w={{ base: 250, sm: 300, md: 320, lg: 380, "2xl": 550 }}>
                            {/* Front */}
                            <Box position="relative" top={{ base: '98', md: 'auto' }} borderRadius={"10px"} boxShadow={{ base: '14px 6px 20px 0px hsl(279deg 6% 55% / 27%)', "2xl": "none" }} height={{ base: '25vh', sm: "27vh", md: '31vh', lg: '32vh', "2xl": '35vh' }} right={{ base: '0', md: '6vw' }} zIndex={20} overflow={'hidden'}>
                                <Image src={`${Front}`} w="100%" position="absolute" height={{ base: '25vh', sm: '27vh', md: "auto" }} zIndex="-1" />
                                <Box position="relative" p={6} color="white" fontFamily={'Space Grotesk'}>
                                    <Flex justifyContent='space-evenly' flexDirection={'column'} gap={{ base: '9vw', sm: '5vw', lg: '3.5vw', "2xl": "4vw" }}>
                                        <Flex alignItems={'center'} gap={2.5}>
                                            <Box backgroundColor="white" p={{ base: 3, sm: 4, lg: 5, "2xl": 7 }} borderRadius="50%"></Box>
                                            <Box outline='0.1vw solid' w={{ base: 11, sm: 13, lg: 15, "2xl": 18 }} h={{ base: 11, sm: 13, lg: 15, "2xl": 18 }} outlineColor={'white'} borderRadius={50}></Box>
                                        </Flex>
                                        <Flex justifyContent="space-between" flexDir={'column'} gap={'1vw'}>
                                            <Text fontSize={{ base: '12px', sm: '16px', md: '18px', lg: '20px', '2xl': "26px" }} letterSpacing={3} fontWeight={500}>
                                                {cardDetails.cardNumber}
                                            </Text>
                                            <Flex justifyContent="space-between">
                                                <Text fontSize={{ base: 9, sm: 11, lg: 12, "2xl": 16 }} letterSpacing={1}> {cardDetails.cardName}</Text>
                                                <Flex>
                                                    <Text fontSize={{ base: 9, sm: 11, lg: 12, "2xl": 16 }} letterSpacing={1}>{cardDetails.expiryMonth}/</Text>
                                                    <Text fontSize={{ base: 9, sm: 11, lg: 12, "2xl": 16 }} letterSpacing={1}>{cardDetails.expiryYear}</Text>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Box>
                            </Box>

                            {/* Back */}
                            <Box borderRadius={"10px"} boxShadow={{ base: '14px 6px 20px 0px hsl(279deg 6% 55% / 27%)', "2xl": 'none' }} position="relative" top={{ base: '-140px', md: 'auto' }} left={{ base: 50, md: 0 }} height={{ base: '25vh', sm: '27vh', md: "33vh" }} zIndex={10} overflow={'hidden'}>
                                <Image src={`${Back}`} w="100%" h="100%" position="absolute" zIndex="-1" />
                                <Flex position="relative" fontFamily={'Space Grotesk'}
                                    justifyContent={'end'} alignItems={'center'} right={{ base: '9vw', sm: '7vw', md: '5vw', lg: '4vw' }} height='-webkit-fill-available'>
                                    <Text fontSize={{ base: 10, "2xl": 16 }} fontWeight={500} letterSpacing={2}>
                                        {cardDetails.cvv}
                                    </Text>
                                </Flex>
                            </Box>
                        </Flex >

                        {/* Thank You content */}
                        <Flex w={{ base: 290, sm: 350, md: 300, lg: 350, "2xl": 450 }} fontFamily={'Space Grotesk'} flexDir={'column'} textAlign={'center'} justifyContent={'center'} alignItems={'center'} position={'relative'} bottom={5}>
                            <Image src={`${Complete}`} />
                            <Text color={'hsl(278, 68%, 11%)'} mt={26} fontSize={{ base: '22px', "2xl": '26px' }} letterSpacing={'3px'} fontWeight={550}>THANK YOU!
                            </Text>
                            <Text fontSize={{ base: 14, "2xl": 18 }} mt={'12px'} color={'hsl(279, 6%, 55%)'} letterSpacing={'0.7px'}>We've added your card details</Text>
                            <Button color={'hsl(270, 3%, 87%)'} py={{ md: 5, lg: 6, "2xl": 7 }} fontSize={{ md: 14, lg: 16, "2xl": 20 }} w={'-webkit-fill-available'} mt={{ base: 7, lg: 10 }} type="submit" _hover={{ bg: '#350a4f', transition: '0.3s' }} bg={'hsl(278, 68%, 11%)'} fontWeight={500}>
                                Continue
                            </Button>
                        </Flex>
                    </>
                )}
            </Flex>
        </Box>
    )
}

export default ThankYou