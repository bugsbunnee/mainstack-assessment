
import { useQuery } from '@tanstack/react-query';
import { Transaction } from '../models/Transaction';

import APIClient from "../services/api-client";

const useTransactions = () => {
    const transactionsService = new APIClient<Transaction[]>('/transactions');

    return useQuery({
        queryKey: ['transactions'],
        queryFn: transactionsService.getAll,
        initialData: [],
    })
};

export default useTransactions;