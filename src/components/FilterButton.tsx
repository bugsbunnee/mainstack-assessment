import React from 'react';
import { Button } from '@chakra-ui/react';

interface FilterButtonProps {
    label: string;
    onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, onClick }) => {
    return ( 
        <Button
            px='1.125rem' 
            py='0.75rem' 
            borderColor='gray.50' 
            borderWidth={1} 
            rounded={100} bg='white'
            fontSize='0.875rem'
            lineHeight='1rem'
            fontWeight={600}
            color='black.300'
            textTransform='capitalize'
            onClick={onClick}
        >
            {label}
        </Button>
     );
}
 
export default FilterButton;