import React from 'react';

import { Box, HStack, Text } from '@chakra-ui/react';
import { IoInformationCircleOutline } from 'react-icons/io5';

interface DashboardOverviewItemProps {
    label: string;
    value: string
}

const DashboardOverviewItem: React.FC<DashboardOverviewItemProps> = ({ label, value }) => {
    return ( 
        <Box mb='2rem'>
            <HStack justifyContent='space-between' alignItems='center' mb='0.5rem'>
                <Text 
                    lineHeight='1rem' 
                    fontSize='0.875rem' 
                    fontWeight='500' 
                    color='gray.500' 
                    textTransform='capitalize'
                >
                    {label}
                </Text>
                <IoInformationCircleOutline size={15} color='gray' />
            </HStack>
            <Text fontSize='1.75rem' lineHeight='2.375rem' fontWeight='700' color='black.300'>{value}</Text>
        </Box>
     );
}
 
export default DashboardOverviewItem;