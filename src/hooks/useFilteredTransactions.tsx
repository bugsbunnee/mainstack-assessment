import { useMemo } from "react";
import _ from "lodash";

import useFilterStore from "../store/filters";
import useTransactions from "./useTransactions";

const useFilteredTransactions = () => {
    const { startDate, endDate, transactionStatus, transactionType } = useFilterStore().filterQuery.data;
    const transactions = useTransactions();

    const filtered = useMemo(() => {
        let filtersApplied = 0;
        let filteredTransactions = transactions.data;

        if (startDate && endDate) {
            filtersApplied += 1;
            filteredTransactions = filteredTransactions.filter((transaction) => new Date(transaction.date) >= startDate && new Date(transaction.date) <= endDate);
        }

        if (transactionStatus.length > 0) {
            filtersApplied += 1;
            filteredTransactions = filteredTransactions.filter((transaction) => _.find(transactionStatus, ['value', transaction.status]));
        }

        if (transactionType.length > 0) {
            filtersApplied += 1;
            filteredTransactions = filteredTransactions.filter((transaction) => _.find(transactionType, ['value', transaction.type]));
        }

        const sortedFilteredTransactions = _.orderBy(filteredTransactions, ['date'], ['asc']);
        return { filteredTransactions: sortedFilteredTransactions, filtersApplied }
    }, [startDate, endDate, transactionStatus, transactionType, transactions.data]);

    return { ...transactions, ...filtered };
};

export default useFilteredTransactions;