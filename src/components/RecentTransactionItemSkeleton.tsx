import React from 'react';
import { Box, HStack, SkeletonCircle, SkeletonText } from '@chakra-ui/react';


const RecentTransactionItemSkeleton:  React.FC = () => {
    return ( 
        <HStack mt='1.5rem'>
            <SkeletonCircle w='3rem' h='3rem' />

            <Box ml='0.9rem' flex={1}>
                <SkeletonText width='100px' />
            </Box>

            <SkeletonText width='100px' />
        </HStack>
     );
}
 
export default RecentTransactionItemSkeleton;