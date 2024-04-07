
import { useQuery } from '@tanstack/react-query';
import APIClient from "../services/api-client";

interface WalletResponse {
    balance: number;
    ledger_balance: number;
    pending_payout: number;
    total_payout: number;
    total_revenue: number;
}

const initialData: WalletResponse = {
    balance: 0,
    ledger_balance: 0,
    pending_payout: 0,
    total_payout: 0,
    total_revenue: 0,
}

const useWallet = () => {
    const walletService = new APIClient<WalletResponse>('/wallet');

    return useQuery({
        queryKey: ['wallet'],
        queryFn: walletService.getAll,
        initialData,
    })
};

export default useWallet;