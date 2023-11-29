import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Complete from '../images/icon-complete.svg'
function ThankYou() {
    return (
        <Flex w={{ base: 290, sm: 350, md: 300, lg: 350 }} fontFamily={'Space Grotesk'} flexDir={'column'} textAlign={'center'} justifyContent={'center'} alignItems={'center'} position={'relative'} bottom={5}>
            <Image src={`${Complete}`} />
            <Text color={'hsl(278, 68%, 11%)'} mt={26} fontSize={'22px'} letterSpacing={'3px'} fontWeight={550}>THANK YOU!
            </Text>
            <Text fontSize={14} mt={'12px'} color={'hsl(279, 6%, 55%)'} letterSpacing={'0.7px'}>We've added your card details</Text>
            <Button color={'hsl(270, 3%, 87%)'} py={{ md: 5, lg: 6 }} fontSize={{ md: 14, lg: 16 }} w={'-webkit-fill-available'} mt={{ base: 7, lg: 10 }} type="submit" _hover={{ bg: 'hsl(278, 68%, 11%)' }} bg={'hsl(278, 68%, 11%)'} fontWeight={500}>
                Continue
            </Button>
        </Flex>
    )
}

export default ThankYou