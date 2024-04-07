import { create } from 'zustand';
import { TransactionDataFilters } from '../utils/schema';

interface FilterData extends Omit<TransactionDataFilters, 'startDate' | 'endDate'> {
    startDate: Date | null, 
    endDate: Date | null
}

interface FilterQuery {
    data: FilterData;
	pageSize: number;
	currentPage: number;
}

interface FilterStore {
	filterQuery: FilterQuery;
    setFilterData: (data: TransactionDataFilters) => void;
	setPageSize: (pageSize: number) => void;
	setCurrentPage: (currentPage: number) => void;
    clearFilters: () => void;
}

const useFilterStore = create<FilterStore>((set) => ({
	filterQuery: {
        data: {
            startDate: null,
            endDate: null,
            transactionStatus: [],
            transactionType: []
        },
		pageSize: 10,
		currentPage: 1,
	},
	setFilterData: (data: TransactionDataFilters) =>
		set((store) => ({
			filterQuery: { ...store.filterQuery, data },
		})),
	setPageSize: (pageSize: number) =>
		set((store) => ({
			filterQuery: { ...store.filterQuery, pageSize },
		})),
	setCurrentPage: (currentPage: number) =>
		set((store) => ({
			filterQuery: { ...store.filterQuery, currentPage },
		})),
	clearFilters: () =>
		set((store) => ({
			filterQuery: { ...store.filterQuery, data: {
                startDate: null,
                endDate: null,
                transactionStatus: [],
                transactionType: []
            }},
		})),
}));

export default useFilterStore;
