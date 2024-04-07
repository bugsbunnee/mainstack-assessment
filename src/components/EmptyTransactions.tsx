import React from 'react';
import useFilterStore from '../store/filters';

import { Box, Button, Center, Heading, Text } from '@chakra-ui/react';
import { PiScrollThin } from 'react-icons/pi';

const EmptyTransactions: React.FC = () => {
    const { clearFilters } = useFilterStore();

    return ( 
        <Center>
           <Box p='4rem'>
            <Center w='3rem' h='3rem' bgGradient='linear(to-r, #DBDEE5, #F6F7F9)' borderRadius='1rem'>
                    <PiScrollThin size={15} color='#5C6670' />
                </Center>

                <Box w='23rem'>
                    <Heading fontSize='1.75rem' lineHeight='2.5rem' color='black.300' fontWeight={700} mt='1.25rem'>
                        No matching transaction found for the selected filter
                    </Heading>
                    <Text fontSize='1rem' lineHeight='1.25rem' color='gray.400' fontWeight={500} mt='0.657rem'>
                        Change your filters to see more results, or add a new product.
                    </Text>
                </Box>

                <Button 
                    bg='gray.50'
                    color='black.300' 
                    lineHeight='1.5rem'
                    fontWeight={600}
                    fontSize='1rem'
                    px='1.5rem' 
                    py='0.75rem' 
                    rounded={100} 
                    mt='2rem'
                    h='3rem'
                    onClick={clearFilters}
                >
                    Clear Filter(s)
                </Button>
           </Box>
        </Center>
     );
}
 
export default EmptyTransactions;