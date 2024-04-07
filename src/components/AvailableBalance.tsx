import React from 'react';
import { Button, HStack, Heading, Stack, Text } from '@chakra-ui/react';

interface AvailableBalanceProps {
    balance: string;
}

const AvailableBalance: React.FC<AvailableBalanceProps> = ({ balance }) => {
    return ( 
        <HStack>
            <Stack spacing={3} marginRight='4rem'>
                <Heading data-testid='available-balance-container' as='h3' fontSize='0.875rem' lineHeight='1rem' fontWeight='500' mb='0.5rem'>Available balance</Heading>
                <Text color='black.300' fontSize='2rem' lineHeight='3rem' fontWeight='700'>{balance}</Text>
            </Stack>

            <Button bg='black.300' color='white' borderRadius={100} p='0.875rem' lineHeight='1.5rem' fontSize='1rem' fontWeight='600' size='lg' minW='10.4rem'>
                Withdraw
            </Button>
        </HStack>
     );
}
 
export default AvailableBalance;