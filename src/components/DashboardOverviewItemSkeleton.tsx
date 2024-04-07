import React from 'react';
import { Box, HStack, Skeleton, SkeletonCircle } from '@chakra-ui/react';

const DashboardOverviewItemSkeleton: React.FC = () => {
    return ( 
        <Box mb='2rem' w='100%'>
            <HStack justifyContent='space-between' alignItems='center' mb='0.5rem'>
                <Skeleton width='6.25rem' height='0.65rem' />
                <SkeletonCircle width='0.75rem' height='0.75rem' />
            </HStack>
            <Skeleton width='7.5rem' height='1.25rem' />
        </Box>
     );
}
 
export default DashboardOverviewItemSkeleton;