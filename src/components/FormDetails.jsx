import React from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

export const FormDetails = () => {
    return (
        <Box maxWidth="400px" fontFamily={'Space Grotesk'} >
            <form>
                <FormControl mt={9} color={'hsl(278, 68%, 11%)'}>
                    <FormLabel htmlFor="cardName" textTransform={'uppercase'} fontSize={10} letterSpacing={3}>Cardholder Name</FormLabel>
                    <Input borderColor={'hsl(278, 68%, 11%)'} type="text" id="cardName" placeholder="John Doe"   boxShadow={'none'} />
                </FormControl>
                <FormControl mt={9} color={'hsl(278, 68%, 11%)'}>
                    <FormLabel htmlFor="cardNumber" textTransform={'uppercase'} fontSize={10} letterSpacing={3}>Card Number</FormLabel>
                    <Input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" boxShadow={'none'} />
                </FormControl>
                <Flex justifyContent="space-between" mt={9}>
                    <FormControl flex="1" mr={2} color={'hsl(278, 68%, 11%)'}>
                        <FormLabel htmlFor="expiryDate" textTransform={'uppercase'} fontSize={10} letterSpacing={3}>Exp. Date (MM/YY)</FormLabel>
                        <Input type="text" id="expiryDate" placeholder="MM/YY" />
                    </FormControl>
                    <FormControl flex="1" ml={2} color={'hsl(278, 68%, 11%)'}>
                        <FormLabel htmlFor="cvv" textTransform={'uppercase'} fontSize={10} letterSpacing={3}>CVc</FormLabel>
                        <Input type="text" id="cvv" placeholder="e.g. 123" />
                    </FormControl>
                </Flex>
                <Button color={'hsl(270, 3%, 87%)'} colorScheme="hsl(278, 68%, 11%)" w={'-webkit-fill-available'} mt={10} type="submit">
                    Confirm
                </Button>
            </form>
        </Box >
    )
}
