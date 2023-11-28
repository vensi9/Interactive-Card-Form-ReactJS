import React from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';

export const FormDetails = () => {
    return (
        <Box maxWidth={{base:"300px",md:"350px",lg:"350px",xl:"400px","2xl":"400px"}} fontFamily={'Space Grotesk'} >
            <form>
                <FormControl mt={9} color={'hsl(278, 68%, 11%)'}>
                    <FormLabel htmlFor="cardName" textTransform={'uppercase'} fontSize={12} letterSpacing={2} fontWeight={500}>Cardholder Name</FormLabel>
                    <Input type="text" id="cardName" placeholder="John Doe" boxShadow={'none'} variant='outline' borderColor="hsl(270, 3%, 87%)" _hover={{ borderColor: "#63b3ed" }} _placeholder={{ opacity: 1, color: 'gray.500' }} />
                </FormControl>
                <FormControl mt={9} color={'hsl(278, 68%, 11%)'}>
                    <FormLabel htmlFor="cardNumber" textTransform={'uppercase'} fontSize={12} letterSpacing={2} fontWeight={500}>Card Number</FormLabel>
                    <Input type="number" id="cardNumber" placeholder="1234 5678 9012 3456" boxShadow={'none'} variant='outline' _placeholder={{ opacity: 1, color: 'gray.500' }} borderColor="hsl(270, 3%, 87%)" _hover={{ borderColor: "#63b3ed"}} />
                </FormControl>
                <Flex justifyContent="space-between" mt={9}>
                    <FormControl flex="1" mr={2} color={'hsl(278, 68%, 11%)'}>
                        <FormLabel htmlFor="expiryDate" textTransform={'uppercase'} fontSize={12} letterSpacing={2} fontWeight={500}>Exp. Date (MM/YY)</FormLabel>
                        <Input type="text" id="expiryDate" placeholder="MM/YY" variant='outline' _placeholder={{ opacity: 1, color: 'gray.500' }} borderColor="hsl(270, 3%, 87%)" _hover={{ borderColor: "#63b3ed" }} />
                    </FormControl>
                    <FormControl flex="1" ml={2} color={'hsl(278, 68%, 11%)'}>
                        <FormLabel htmlFor="cvv" textTransform={'uppercase'} fontSize={12} letterSpacing={2} fontWeight={500}>CVc</FormLabel>
                        <Input type="text" id="cvv" placeholder="e.g. 123" variant='outline' _placeholder={{ opacity: 1, color: 'gray.500' }} borderColor="hsl(270, 3%, 87%)" _hover={{ borderColor: "#63b3ed" }} />
                    </FormControl>
                </Flex>
                <Button color={'hsl(270, 3%, 87%)'} py={6}  w={'-webkit-fill-available'} mt={10} type="submit" _hover={{ bg:'hsl(278, 68%, 11%)' }} bg={'hsl(278, 68%, 11%)'} fontWeight={500}>
                    Confirm
                </Button>
            </form>
        </Box >
    )
}
