import { render, screen } from '@testing-library/react'
import { Transaction } from '../src/models/Transaction';

import AvailableBalance from '../src/components/AvailableBalance';
import TransactionChart from '../src/components/TransactionChart';

describe('HomePage', () => {
  it('renders available balance', () => {
    render(<AvailableBalance balance='USD 500' />);
  
    const matcher = screen.getByTestId('available-balance-container');
    expect(matcher).toHaveTextContent('Available balance');
  });

  it('renders all transactions', () => {
    const transactions: Transaction[] = [
        {
          amount: 500,
          metadata: {
            name: "John Doe",
            type: "digital_product",
            email: "johndoe@example.com",
            quantity: 1,
            country: "Nigeria",
            product_name: "Rich Dad Poor Dad"
          },
          payment_reference: "c3f7123f-186f-4a45-b911-76736e9c5937",
          status: "successful",
          type: "deposit",
          date: "2022-03-03"
        },
        {
          amount: 400,
          metadata: {
            name: "Fibi Brown",
            type: "coffee",
            email: "fibibrown@example.com",
            quantity: 8,
            country: "Ireland"
          },
          payment_reference: "d28db158-0fc0-40cd-826a-4243923444f7",
          status: "successful",
          type: "deposit",
          date: "2022-03-02"
        },
        {
          amount: 350.56,
          metadata: {
            name: "Delvan Ludacris",
            type: "webinar",
            email: "johndoe@example.com",
            quantity: 1,
            country: "Kenya",
            product_name: "How to build an online brand"
          },
          payment_reference: "73f45bc0-8f41-4dfb-9cae-377a32b71d1e",
          status: "successful",
          type: "deposit",
          date: "2022-03-01"
        },
    ];

    render(<TransactionChart transactions={transactions} />);
  
    const matcher = screen.getByTestId('transaction-chart');
    expect(matcher).toBeInTheDocument();
  });
})