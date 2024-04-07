import React from 'react';
import { Box, Button, Center, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { BiCheck, BiChevronDown, BiChevronUp } from 'react-icons/bi';

import { Option } from '../models/Option';
import { getOptionIsSelected, summarize } from '../utils/utils';


interface SelectorProps {
	options: Option[];
	placeholder: string;
	selectedOptions: Option[];
	onSelectOption: (option: Option) => void;
}

const Selector: React.FC<SelectorProps> = ({
	options,
	placeholder,
	selectedOptions,
	onSelectOption,
}) => {
	return (
		<Menu closeOnSelect={false} matchWidth>
			{({isOpen}) => (
				<>
					<MenuButton
						as={Button}
						_active={{ borderWidth: 3, borderColor: 'black.300', bg: 'white'}}
						bg="gray.50"
						borderRadius='0.75rem'
						variant='ghost'
						textTransform="capitalize"
						textAlign='left'
						rightIcon={isOpen ? <BiChevronUp /> : <BiChevronDown />}
						px='1rem'
						py='0.875rem'
						width="100%"
						h='3rem'
					>
						{selectedOptions.length > 0 ? summarize(selectedOptions.map((option) => option.label).join(', ')) : placeholder}
					</MenuButton>
					<MenuList  boxShadow='0px 4px 8px 0px #5C738314' border='none'>
						{options.map((option) => (
							<MenuItem
								w='100%'
								p='1rem'
								onClick={() => onSelectOption(option)}
								key={option.value}
								textTransform="capitalize"
							>
								{getOptionIsSelected(selectedOptions, option) ? (
									<Center boxSize='1.25rem' borderRadius='0.25rem' mr='0.75rem' bg='#1C1B1F'>
										<BiCheck color='white' />
									</Center>
								) : (
									<Box borderWidth={1} borderColor='#D9D9D9' boxSize='1.25rem' borderRadius='0.25rem' mr='0.75rem' />
								)}

								<Text fontSize='1rem' fontWeight={600} lineHeight='1.24rem' color='black.300'>{option.label}</Text>
							</MenuItem>
						))}
					</MenuList>
				</>
			)}
		</Menu>
	);
};

export default Selector;
