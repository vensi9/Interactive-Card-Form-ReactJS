import React, { useState } from 'react'
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Front from '../images/bg-card-front.png';
import Back from '../images/bg-card-back.png';
import { useForm } from 'react-hook-form';

export const FormDetails = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch,
    } = useForm();
    const watchExpiryMonth = watch('expiryMonth', '');
    const watchExpiryYear = watch('expiryYear', '');

    const validateExpiryDate = () => {
        const isMonthEmpty = !watchExpiryMonth.trim();
        const isYearEmpty = !watchExpiryYear.trim();

        if (isMonthEmpty && isYearEmpty) {
            return "Can't be blank";
        } else if (isMonthEmpty) {
            return 'Month is required';
        } else if (isYearEmpty) {
            return 'Year is required';
        }

        return true;
    };

    const handleCardNumberChange = (e) => {
        const input = e.target.value.replace(/\D/g, '').substring(0, 16); // Remove non-numeric characters and limit to 16 digits
        const cardNumberWithSpaces = input.replace(/(\d{4})/g, '$1 ').trim().substring(0, 19); // Add spaces after every 4 digits
        setCardNumber(cardNumberWithSpaces);
    };

    const handleCardNameChange = (e) => {
        setCardName(e.target.value);
    };

    const handleExpiryMonthChange = (e) => {
        let input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters

        if (input.length === 1 && parseInt(input) > 1) {
            input = `0${input}`;
        } else if (input.length === 2 && parseInt(input) > 12) {
            input = '12';
        }
        setExpiryMonth(input);
    };

    const handleExpiryYearChange = (e) => {
        const input = e.target.value.replace(/\D/g, '').substring(0, 2); // Only allow numeric characters and limit to 2 digits
        setExpiryYear(input);
    };

    const handleCvvChange = (e) => {
        const input = e.target.value.replace(/\D/g, '').substring(0, 3); // Remove non-numeric characters and limit to 3 digits
        setCvv(input);
    };

    const onSubmit = (data) => {
        const cardDetails = {
            cardNumber,
            cardName,
            expiryMonth,
            expiryYear,
            cvv,
        };
        // Redirect to a new route while passing card details as state
        navigate('/thank-you', { state: { cardDetails } });
    };

    return (
        <Box>
            <Flex
                display={{ base: 'grid', md: 'flex' }}
                height={'100vh'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={{ md: '6vw', lg: '10vw' }}
            >
                <Flex display={{ base: 'block', md: 'flex' }} flexDir={'column'} gap={{ md: 5, lg: 9 }} maxW={700} w={{ base: 250, sm: 300, md: 320, lg: 380, "2xl": 550 }}>

                    {/* front */}
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
                                        {cardNumber || '0000 0000 0000 0000'}
                                    </Text>
                                    <Flex justifyContent="space-between">
                                        <Text fontSize={{ base: 9, sm: 11, lg: 12, "2xl": 16 }} letterSpacing={1}>{cardName || 'Jane Appleseed'}</Text>
                                        <Flex>
                                            <Text fontSize={{ base: 9, sm: 11, lg: 12, "2xl": 16 }} letterSpacing={1}>{expiryMonth || '00'}/</Text>
                                            <Text fontSize={{ base: 9, sm: 11, lg: 12, "2xl": 16 }} letterSpacing={1}>{expiryYear || '00'}</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>

                    {/* Back */}
                    <Box boxShadow={{ base: '14px 6px 20px 0px hsl(279deg 6% 55% / 27%)', "2xl": "none" }} borderRadius={"10px"} position="relative" top={{ base: '-125px', sm: '-140px', md: 'auto' }} left={{ base: 50, md: 0 }} height={{ base: '25vh', sm: '27vh', md: "33vh", lg: '32vh', "2xl": '35vh' }} zIndex={10} overflow={'hidden'}>
                        <Image src={`${Back}`} w="100%" h="100%" position="absolute" zIndex="-1" />
                        <Flex position="relative" fontFamily={'Space Grotesk'}
                            justifyContent={'end'} alignItems={'center'} right={{ base: '9vw', sm: '7vw', md: '5vw', lg: '4vw' }} height='-webkit-fill-available'>
                            <Text color={'hsl(0, 0%, 100%)'} fontSize={{ base: 10, "2xl": 15 }} fontWeight={500} letterSpacing={2}>
                                {cvv || '000'}
                            </Text>
                        </Flex>
                    </Box>
                </Flex >

                {/* Form */}
                <Box
                    maxWidth={{ base: "300px", sm: '350px', md: "300px", lg: "350px", xl: "400px", "2xl": "1200px" }}
                    position={{ base: 'relative' }}
                    w={{ "2xl": "600px" }}
                    bottom={{ base: 30, md: 0 }}
                    fontFamily={'Space Grotesk'}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl mt={{ base: 5, lg: 9 }} color={'hsl(278, 68%, 11%)'}
                            isInvalid={errors.cardName}
                        >
                            <FormLabel htmlFor="cardName" textTransform={'uppercase'} fontSize={{ base: 10, sm: 12, md: 10, lg: 12, "2xl": 16 }} letterSpacing={2} fontWeight={500}>Cardholder Name</FormLabel>
                            <Input
                                value={cardName}
                                type="text"
                                id="cardName"
                                {...register('cardName', {
                                    required: 'Cardholder Name is required',
                                    minLength: { value: 4, message: 'Minimum length should be 4' },
                                })}
                                onChange={handleCardNameChange}
                                placeholder="e.g. Jane Appleseed"
                                boxShadow={'none'}
                                height={{ base: '2.5rem', "2xl": "7vh" }}
                                variant='outline'
                                borderColor="hsl(270, 3%, 87%)"
                                _hover={{ borderColor: "hsl(270, 3%, 87%)" }}
                                _placeholder={{ opacity: 1, color: 'gray.500', fontSize: { base: 14, lg: 16, "2xl": 20 } }}
                            />
                            <FormErrorMessage>
                                {errors.cardName && errors.cardName.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.cardNumber} mt={{ base: 5, lg: 9 }} color={'hsl(278, 68%, 11%)'}>
                            <FormLabel htmlFor="cardNumber" textTransform={'uppercase'} fontSize={{ base: 10, sm: 12, md: 10, lg: 12, "2xl": 16 }} letterSpacing={2} fontWeight={500}>Card Number</FormLabel>
                            <Input type="text"
                                {...register('cardNumber', {
                                    required: 'Card Number is required',
                                })}
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                id="cardNumber"
                                placeholder="e.g. 1234 5678 9123 0000"
                                boxShadow={'none'}
                                variant='outline'
                                height={{ base: '2.5rem', "2xl": "7vh" }}
                                _placeholder={{ opacity: 1, color: 'gray.500', fontSize: { base: 14, lg: 16, "2xl": 20 } }}
                                borderColor="hsl(270, 3%, 87%)"
                                _hover={{ borderColor: "hsl(270, 3%, 87%)" }}
                                maxLength={19}
                            />
                            <FormErrorMessage>
                                {errors.cardNumber && errors.cardNumber.message}
                            </FormErrorMessage>
                        </FormControl>

                        <Flex justifyContent="space-between" mt={{ base: 5, lg: 9 }}>
                            <FormControl isInvalid={errors.expiryMonth || errors.expiryYear} flex="1" mr={2} color={'hsl(278, 68%, 11%)'}>
                                <FormLabel htmlFor="expiryDate" textTransform={'uppercase'} fontSize={{ base: 10, sm: 12, md: 10, lg: 12, "2xl": 16 }} letterSpacing={2} fontWeight={500}>Exp. Date (MM/YY)</FormLabel>
                                <Input
                                    {...register('expiryMonth', {
                                        required: "Can't be blank",
                                    })}
                                    value={expiryMonth}
                                    onChange={handleExpiryMonthChange}
                                    maxLength={2}
                                    type="text"
                                    id="expiryMonth"
                                    placeholder="MM"
                                    variant='outline'
                                    height={{ base: '2.5rem', "2xl": "7vh" }}
                                    _placeholder={{ opacity: 1, color: 'gray.500', fontSize: { base: 14, lg: 16, "2xl": 20 } }}
                                    borderColor="hsl(270, 3%, 87%)"
                                    _hover={{ borderColor: "hsl(270, 3%, 87%)" }}
                                    w={{ base: '60px', xl: '70px' }}
                                    mr={'10px'}
                                />
                                <Input
                                    {...register('expiryYear', {
                                        required: "Can't be blank",
                                    })}
                                    value={expiryYear}
                                    onChange={handleExpiryYearChange}
                                    maxLength={2}
                                    type="text"
                                    id="expiryYear"
                                    placeholder="YY"
                                    variant='outline'
                                    height={{ base: '2.5rem', "2xl": "7vh" }}
                                    _placeholder={{ opacity: 1, color: 'gray.500', fontSize: { base: 14, lg: 16, "2xl": 20 } }}
                                    borderColor="hsl(270, 3%, 87%)"
                                    _hover={{ borderColor: "hsl(270, 3%, 87%)" }}
                                    w={{ base: '60px', xl: '70px' }}
                                />
                                <FormErrorMessage>
                                    {validateExpiryDate()}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.cvv} flex="1" ml={2} color={'hsl(278, 68%, 11%)'}>
                                <FormLabel htmlFor="cvv" textTransform={'uppercase'} fontSize={{ base: 10, sm: 12, md: 10, lg: 12, "2xl": 16 }} letterSpacing={2} fontWeight={500}>CVc</FormLabel>
                                <Input type="text"
                                    {...register('cvv', {
                                        required: "Can't be blank",
                                    })}
                                    value={cvv}
                                    onChange={handleCvvChange}
                                    maxLength={3}
                                    id="cvv"
                                    placeholder="e.g. 123"
                                    variant='outline'
                                    height={{ base: '2.5rem', "2xl": "7vh" }}
                                    _placeholder={{ opacity: 1, color: 'gray.500', fontSize: { base: 14, lg: 16, "2xl": 20 } }}
                                    borderColor="hsl(270, 3%, 87%)"
                                    _hover={{ borderColor: "hsl(270, 3%, 87%)" }}
                                />
                                <FormErrorMessage>
                                    {errors.cvv && errors.cvv.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Flex>
                        <Button
                            isLoading={isSubmitting}
                            color={'hsl(0, 0%, 100%)'} py={{ md: 5, lg: 6, "2xl": 8 }} fontSize={{ md: 14, lg: 16, "2xl": 20 }} w={'-webkit-fill-available'} mt={{ base: 7, lg: 10 }} type="submit" _hover={{ bg: '#350a4f', transition: '0.3s' }} bg={'hsl(278, 68%, 11%)'} fontWeight={500}>
                            Confirm
                        </Button>
                    </form>
                </Box >
            </Flex>
        </Box>
    )
}
