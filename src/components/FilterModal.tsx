import React from 'react';

import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Text } from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getFirstDayInMonth, getLastSevenDaysDate, getLastThreeMonthsDate, getOptionIsSelected } from '../utils/utils';
import { TransactionDataFilters, schema, today } from '../utils/schema';

import DateField from './DateField';
import FilterButton from './FilterButton';
import Selector from './Selector';

import useFilterStore from '../store/filters';

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const refinedSchema = schema.partial().refine((data) => (data.startDate && data.endDate) || data.transactionType?.length || data.transactionStatus?.length, 'Please select at least one filter');

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
    const filterStore = useFilterStore();
	const form = useForm<TransactionDataFilters>({ 
        resolver: zodResolver(refinedSchema), 
        defaultValues: filterStore.filterQuery.data as TransactionDataFilters, 
        mode: 'onChange' 
    });

    const onSubmit = (data: TransactionDataFilters) => {
        filterStore.setFilterData(data);
        onClose();
	};

    const onSetDateRange = (startDate: Date) => {
        form.setValue('startDate', startDate, { shouldValidate: true });
        form.setValue('endDate', today, { shouldValidate: true });
    };

    const onClearFilters = () => {
        form.reset();
        filterStore.clearFilters();
    };

    return ( 
        <Drawer
            isOpen={isOpen}
            placement='right'
            size='md'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent margin='0.75rem' borderRadius='1.25rem' boxShadow='0px 16px 32px 0px #DBDEE51A'>
            <DrawerHeader display='flex' justifyContent='space-between' alignItems='center'>
                <Text lineHeight='1.75rem' fontWeight={700} fontSize='1.25rem' color='black.300'>Filter</Text>
                <DrawerCloseButton rounded={100} />
            </DrawerHeader>

            <DrawerBody>
                <HStack spacing={3}>
                    <FilterButton label='Today' onClick={() => onSetDateRange(today)} />
                    <FilterButton label='Last 7 days' onClick={() => onSetDateRange(getLastSevenDaysDate().toDate())} />
                    <FilterButton label='This month' onClick={() => onSetDateRange(getFirstDayInMonth().toDate())} />
                    <FilterButton label='last 3 months' onClick={() => onSetDateRange(getLastThreeMonthsDate().toDate())} />
                </HStack>

				<form id="transaction-filters" onSubmit={form.handleSubmit(onSubmit)}>
                   <Box mt='1.25rem'>
                        <Text
                            color="black.300"
                            fontSize="1rem"
                            fontWeight={600}
                            lineHeight='1.5rem'
                            textTransform="capitalize"
                            mb='0.75rem'
                        >
                            Date Range
                        </Text>

                        <HStack spacing={6} >
                            <Controller
                                control={form.control}
                                name='startDate'
                                render={({ field: { onChange, value }, formState }) => (
                                    <DateField
                                        maxDate={today}
                                        placeholder="Start Date"
                                        value={value}
                                        error={formState.errors.startDate?.message}
                                        onChange={onChange}
                                    />
                                )}
                            />

                            <Controller
                                control={form.control}
                                name='endDate'
                                render={({ field: { onChange, value }, formState }) => (
                                    <DateField
                                        error={formState.errors.endDate?.message}
                                        placeholder="End Date"
                                        value={value}
                                        onChange={onChange}
                                        minDate={form.getValues('startDate') ?? undefined}
                                        maxDate={today}
                                    />
                                )}
                            />
                        </HStack>
                   </Box>

                   <Box mt='1.25rem'>
                        <Text
                            color="black.300"
                            fontSize="1rem"
                            fontWeight={600}
                            lineHeight='1.5rem'
                            textTransform="capitalize"
                            mb='0.75rem'
                        >
                            Transaction Type
                        </Text>

                        <Controller
                            control={form.control}
                            name='transactionType'
                            render={({ field: { onChange, value } }) => (
                                <Selector 
                                    options={TRANSACTION_TYPES} 
                                    placeholder='Select transaction types' 
                                    selectedOptions={value} 
                                    onSelectOption={(option) => {
                                        if (getOptionIsSelected(value, option)) {
                                            const newSelectedOptions = value.filter((type) => type.value !== option.value);
                                            onChange(newSelectedOptions);
                                        } else {
                                            onChange([...value, option])
                                        }
                                    }} 
                                />
                            )}
                        />
                      
                   </Box>

                   <Box mt='1.25rem'>
                        <Text
                            color="black.300"
                            fontSize="1rem"
                            fontWeight={600}
                            lineHeight='1.5rem'
                            textTransform="capitalize"
                            mb='0.75rem'
                        >
                            Transaction Status
                        </Text>

                        <Controller
                            control={form.control}
                            name='transactionStatus'
                            render={({ field: { onChange, value } }) => (
                                <Selector 
                                    options={TRANSACTION_STATUSES} 
                                    placeholder='Select transaction status' 
                                    selectedOptions={value} 
                                    onSelectOption={(option) => {
                                        if (getOptionIsSelected(value, option)) {
                                            const newSelectedOptions = value.filter((type) => type.value !== option.value);
                                            onChange(newSelectedOptions);
                                        } else {
                                            onChange([...value, option])
                                        }
                                    }} 
                                />
                            )}
                        />
                   </Box>
                </form>
            </DrawerBody>

            <DrawerFooter>
                <Button
                    px='1.125rem' 
                    py='0.75rem' 
                    borderColor='gray.50' 
                    borderWidth={1} 
                    rounded={100} 
                    fontSize='0.875rem'
                    lineHeight='1rem'
                    fontWeight={600}
                    bg='white'
                    color='black.300'
                    textTransform='capitalize'
                    variant='outline'
                    onClick={onClearFilters}
                    flex={1}
                >
                    Clear
                </Button>

                <Button
                    ml='0.75rem'
                    px='1.125rem' 
                    py='0.75rem' 
                    borderColor='gray.50' 
                    borderWidth={1} 
                    color='white'
                    bg='black.300'
                    rounded={100}
                    fontSize='0.875rem'
                    lineHeight='1rem'
                    fontWeight={600}
                    textTransform='capitalize'
                    variant='outline'
                    flex={1}
					type="submit"
                    form='transaction-filters'
                    isDisabled={!form.formState.isValid || form.formState.isSubmitting}
                    _disabled={{ opacity: 0.3 }}
                >
                    Apply
                </Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
     );
}

const TRANSACTION_TYPES = [
    {
        label: 'Store Transactions',
        value: 'store transactions',
    },
    {
        label: 'Get tipped',
        value: 'get tipped',
    },
    {
        label: 'Withdrawals',
        value: 'withdrawal'
    },
    {
        label: 'Deposits',
        value: 'deposit'
    },
    {
        label: 'Chargebacks',
        value: 'chargeback',
    },
    {
        label: 'Refer & Earn',
        value: 'refer and earn',
    },
];

const TRANSACTION_STATUSES = [
    {
        label: 'successful',
        value: 'successful'
    },
    {
        label: 'pending',
        value: 'pending'
    },
    {
        label: 'failed',
        value: 'failed'
    }
];
 
export default FilterModal;