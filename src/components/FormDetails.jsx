import React from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';

export const FormDetails = () => {
    // base: "0em", // 0px
    // sm: "30em", // ~480px.
    // md: "48em", // ~768px
    // lg: "62em", // ~992px
    // xl: "80em", // ~1280px
    // "2xl": "96em", // ~1536px
    return (
        <Box maxWidth={{ base: "300px", sm: '350px', md: "300px", lg: "350px", xl: "400px" }} position={{ base: 'relative' }} bottom={{ base: 70, md: 0 }} fontFamily={'Space Grotesk'} >
            <form>
                <FormControl mt={{ base: 5, lg: 9 }} color={'hsl(278, 68%, 11%)'}>
                    <FormLabel htmlFor="cardName" textTransform={'uppercase'} fontSize={{ base: 10, sm: 12, md: 10, lg: 12 }} letterSpacing={2} fontWeight={500}>Cardholder Name</FormLabel>
                    <Input type="text" id="cardName" placeholder="John Doe" boxShadow={'none'} variant='outline' borderColor="hsl(270, 3%, 87%)" _hover={{ borderColor: "#63b3ed" }} _placeholder={{ opacity: 1, color: 'gray.500', fontSize: { base: 14, lg: 16 } }} />
                </FormControl>
                <FormControl mt={{ base: 5, lg: 9 }} color={'hsl(278, 68%, 11%)'}>
                    <FormLabel htmlFor="cardNumber" textTransform={'uppercase'} fontSize={{ base: 10, sm: 12, md: 10, lg: 12 }} letterSpacing={2} fontWeight={500}>Card Number</FormLabel>
                    <Input type="number" id="cardNumber" placeholder="1234 5678 9012 3456" boxShadow={'none'} variant='outline' _placeholder={{ opacity: 1, color: 'gray.500', fontSize: { base: 14, lg: 16 } }} borderColor="hsl(270, 3%, 87%)" _hover={{ borderColor: "#63b3ed" }} />
                </FormControl>
                <Flex justifyContent="space-between" mt={{ base: 5, lg: 9 }}>
                    <FormControl flex="1" mr={2} color={'hsl(278, 68%, 11%)'}>
                        <FormLabel htmlFor="expiryDate" textTransform={'uppercase'} fontSize={{ base: 10, sm: 12, md: 10, lg: 12 }} letterSpacing={2} fontWeight={500}>Exp. Date (MM/YY)</FormLabel>
                        <Input type="text" id="expiryDate" placeholder="MM/YY" variant='outline' _placeholder={{ opacity: 1, color: 'gray.500', fontSize: { base: 14, lg: 16 } }} borderColor="hsl(270, 3%, 87%)" _hover={{ borderColor: "#63b3ed" }} />
                    </FormControl>
                    <FormControl flex="1" ml={2} color={'hsl(278, 68%, 11%)'}>
                        <FormLabel htmlFor="cvv" textTransform={'uppercase'} fontSize={{ base: 10, sm: 12, md: 10, lg: 12 }} letterSpacing={2} fontWeight={500}>CVc</FormLabel>
                        <Input type="text" id="cvv" placeholder="e.g. 123" variant='outline' _placeholder={{ opacity: 1, color: 'gray.500', fontSize: { base: 14, lg: 16 } }} borderColor="hsl(270, 3%, 87%)" _hover={{ borderColor: "#63b3ed" }} />
                    </FormControl>
                </Flex>
                <Button color={'hsl(0, 0%, 100%)'} py={{ md: 5, lg: 6 }} fontSize={{ md: 14, lg: 16 }} w={'-webkit-fill-available'} mt={{ base: 7, lg: 10 }} type="submit" _hover={{ bg: 'hsl(278, 68%, 11%)' }} bg={'hsl(278, 68%, 11%)'} fontWeight={500}>
                    Confirm
                </Button>
            </form>
        </Box >
    )
}
