import React from 'react';

import { Box, Button, Center, Flex, HStack, Heading, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';

import AvailableBalance from '../components/AvailableBalance';
import AvailableBalanceSkeleton from '../components/AvailableBalanceSkeleton';
import Conditional from '../components/Conditional';
import DashboardOverviewItem from '../components/DashboardOverviewItem';
import DashboardOverviewItemSkeleton from '../components/DashboardOverviewItemSkeleton';
import EmptyTransactions from '../components/EmptyTransactions';
import ExportList from '../components/ExportList';
import FilterModal from '../components/FilterModal';
import RecentTransactionItem from '../components/RecentTransactionItem';
import RecentTransactionItemSkeleton from '../components/RecentTransactionItemSkeleton';
import TransactionChart from '../components/TransactionChart';

import useWallet from '../hooks/useWallet';
import useFilteredTransactions from '../hooks/useFilteredTransactions';

import { SKELETON_LENGTH } from '../utils/constants';
import { formatAmount } from '../utils/utils';

const HomePage: React.FC = () => {
    const wallet = useWallet();
    const filtered = useFilteredTransactions();
    const disclosure = useDisclosure();

	return (
       <Box>
            <Flex>
                <Stack flex={1} mr='7.75rem'>
                    <Conditional isVisible={!wallet.isFetching}>
                        <AvailableBalance balance={formatAmount(wallet.data.balance)} />
                    </Conditional>
                    
                    <Conditional isVisible={wallet.isFetching}>
                        <AvailableBalanceSkeleton />
                    </Conditional>
                    
                    <Box w='47rem' h='20rem'>
                        <TransactionChart transactions={filtered.filteredTransactions} />
                    </Box>
                </Stack>

                <Box minWidth='16.9rem'>
                    <Conditional isVisible={!wallet.isFetching}>
                        <DashboardOverviewItem label='Ledger Balance' value={formatAmount(wallet.data.ledger_balance)} />
                        <DashboardOverviewItem label='Total Payout' value={formatAmount(wallet.data.total_payout)} />
                        <DashboardOverviewItem label='Total Revenue' value={formatAmount(wallet.data.total_revenue)} />
                        <DashboardOverviewItem label='Pending Payout' value={formatAmount(wallet.data.pending_payout)} />
                    </Conditional>

                    <Conditional isVisible={wallet.isFetching}>
                        {SKELETON_LENGTH.map((length) => (
                            <DashboardOverviewItemSkeleton key={length} />
                        ))}
                    </Conditional>
                </Box>
            </Flex>

            <HStack mt='5.12rem' pb='1.5rem' borderBottomWidth={1} borderBottomColor='gray.50' justifyContent='space-between' alignItems='center'>
                <Box>
                    <Heading as='h4' fontWeight={700} lineHeight='2rem' fontSize='1.5rem' color='black.300'>{filtered.filteredTransactions.length} Transactions</Heading>
                    <Text fontWeight={500} lineHeight='1rem' fontSize='0.875rem' color='gray.400'>Your transactions for the last 7 days</Text>
                </Box>

                <HStack alignItems='center' spacing={3}>
                    <Button 
                        onClick={disclosure.onOpen}
                        bg='gray.50' 
                        rounded={100} 
                        rightIcon={<BiChevronDown size={10} />}>
                            <Text 
                                fontWeight={600}
                                fontSize='1rem'
                                lineHeight='1.5rem'
                                color='black.300'
                            >
                                Filter
                            </Text>
                           <Conditional isVisible={filtered.filtersApplied > 0}>
                                <Center bg='black.300' rounded={100} boxSize='1.25rem' ml={2}>
                                    <Text lineHeight='0.75rem' fontSize='0.75rem' color='white' fontWeight={500}>{filtered.filtersApplied}</Text>
                                </Center>
                           </Conditional>
                    </Button>
                   
                   <Conditional isVisible={filtered.filteredTransactions.length > 0}>
                        <ExportList data={filtered.filteredTransactions} />
                   </Conditional>
                </HStack>
            </HStack>

            <Box>
                <Conditional isVisible={filtered.isFetching}>
                    {SKELETON_LENGTH.map((length) => (
                        <RecentTransactionItemSkeleton key={length} />
                    ))}
                </Conditional>
                
                <Conditional isVisible={!filtered.isFetching}>
                    <Conditional isVisible={filtered.filteredTransactions.length > 0}>
                        {filtered.filteredTransactions.map((transaction) => {
                            const isWithdrawal = transaction.type === 'withdrawal';

                            return (
                                <RecentTransactionItem
                                    key={transaction.date + transaction.amount}
                                    isWithdrawal={isWithdrawal} 
                                    status={transaction.status} 
                                    title={transaction.metadata ? transaction.metadata.name : isWithdrawal ? 'Cash withdrawal' : transaction.type}
                                    value={formatAmount(transaction.amount)} 
                                    date={transaction.date}
                                />
                            );
                        })}
                    </Conditional>

                    <Conditional isVisible={filtered.filteredTransactions.length === 0}>
                        <EmptyTransactions />
                    </Conditional>
                </Conditional>
            </Box>

            <FilterModal isOpen={disclosure.isOpen} onClose={disclosure.onClose} />
        </Box>
	);
};

export default HomePage;
