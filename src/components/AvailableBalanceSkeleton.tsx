import React from 'react';
import { Box, HStack, Skeleton, Stack } from '@chakra-ui/react';

const AvailableBalanceSkeleton: React.FC = () => {
    return ( 
        <HStack>
            <Stack spacing={3} marginRight='4rem'>
                <Box mb='0.5rem'>
                    <Skeleton w='6.25rem' h='0.675rem' />
                </Box>
                <Skeleton w='7.5rem' h='1.25rem' />
            </Stack>

            <Skeleton w='10.4rem' h='3.25rem'  borderRadius={100}/>
        </HStack>
     );
}
 
export default AvailableBalanceSkeleton;