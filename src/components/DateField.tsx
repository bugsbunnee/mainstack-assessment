import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { Button, Stack, Text } from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';

import 'react-datepicker/dist/react-datepicker.css';



interface DateFieldProps {
	minDate?: Date;
	maxDate?: Date;
	placeholder: string;
	value: Date | null;
	timeIntervals?: number;
	error?: string;
	showTimeSelect?: boolean;
	onDateFilter?: (date: Date) => boolean;
	onTimeFilter?: (date: Date) => boolean;
	onChange: (date: Date) => void;
}

interface CustomDateFieldProps {
	error?: string;
	disabled?: boolean;
	placeholder?: string;
	value?: string;
	onClick?: () => void;
}

const CustomDateField = forwardRef<HTMLButtonElement, CustomDateFieldProps>(
	(props, ref) => (
		<Button
			bg="gray.50"
			disabled={props.disabled}
			borderRadius='0.75rem'
			variant='ghost'
			textTransform="capitalize"
			rightIcon={<BiChevronDown />}
			ref={ref}
			onClick={props.onClick}
            px='1rem'
            py='0.875rem'
			width="100%"
            h='3rem'
		>
			<Text fontSize="0.875rem" fontWeight="600" width="100%" textAlign="left" lineHeight='1rem'>
				{props.value ? props.value : props.placeholder}
			</Text>
		</Button>
	)
);

const DateField: React.FC<DateFieldProps> = ({
	error,
	placeholder,
	maxDate,
	minDate,
	onChange,
	onDateFilter,
	onTimeFilter,
	timeIntervals,
	showTimeSelect = false,
	value,
}) => {
	return (
		<Stack spacing={2} flex={1}>
			<DatePicker
				minDate={minDate}
				maxDate={maxDate}
				onChange={onChange}
				selected={value}
				filterDate={onDateFilter}
				filterTime={onTimeFilter}
				showTimeSelect={showTimeSelect}
				timeIntervals={timeIntervals}
				dateFormat={'dd MMM yyyy'}
				showYearDropdown
				placeholderText={placeholder}
				customInput={<CustomDateField error={error} />}
			/>

			{error ? (
				<Text
					color="tomato"
					fontSize="sm"
					fontWeight="600"
					textTransform="capitalize"
				>
					{error}:
				</Text>
			) : null}
		</Stack>
	);
};

export default DateField;
