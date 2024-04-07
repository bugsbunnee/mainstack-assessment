import React from 'react';
import Conditional from './Conditional';

import { Box, Center, HStack, Text } from '@chakra-ui/react';
import { BsArrowDownLeft, BsArrowUpRight } from 'react-icons/bs';
import { formatDate } from '../utils/utils';

interface RecentTransactionItemProps {
    isWithdrawal: boolean;
    status: string;
    title: string;
    date: string;
    value: string;
}

const RecentTransactionItem:  React.FC<RecentTransactionItemProps> = ({ date, isWithdrawal, status, title, value }) => {
    const getStatusColor = () => {
        switch(status.toLowerCase()){
            case 'successful':
                return '#0EA163';

            case 'pending':
                return '#A77A07';

            default:
                return 'gray.400'
        }
    };

    return ( 
        <HStack mt='1.5rem'>
            <Conditional isVisible={!isWithdrawal}>
                <Center bg='#E3FCF2' w='3rem' h='3rem' rounded='3rem'>
                    <BsArrowDownLeft size={15} color='#075132' />
                </Center>
            </Conditional>
            
            <Conditional isVisible={isWithdrawal}>
                <Center bg='#F9E3E0' w='3rem' h='3rem' rounded='3rem'>
                    <BsArrowUpRight size={15} color='#961100' />
                </Center>
            </Conditional>

            <Box ml='0.9rem' flex={1}>
                <Text 
                    fontSize='1rem' 
                    lineHeight='1.5rem' 
                    fontWeight={500} 
                    color='black.300'
                >
                    {title}
                </Text>
                <Text
                    fontSize='0.875rem' 
                    lineHeight='1rem' 
                    fontWeight={500} 
                    color={getStatusColor()}
                    mt='0.56rem'
                >
                    {status}
                </Text>
            </Box>

            <Box>
                <Text 
                    fontSize='1rem' 
                    lineHeight='1.5rem' 
                    fontWeight={700} 
                    color='black.300'
                    textAlign='right'
                >
                        {value}
                </Text>
                <Text 
                    fontSize='0.875rem' 
                    lineHeight='1rem' 
                    fontWeight={500} 
                    color='gray.400'
                    mt='0.56rem'
                    textAlign='right'
                >
                    {formatDate(date)}
                </Text>
            </Box>
        </HStack>
     );
}
 
export default RecentTransactionItem;