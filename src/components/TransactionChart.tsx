import React, { useMemo } from 'react';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Transaction } from '../models/Transaction';
import { formatDate } from '../utils/utils';

interface TransactionChartProps {
    transactions: Transaction[];
}

interface ChartTickOptions {
    callback: (value: string | number, index: number, ticks: { value: number; }[]) => string | null;
    getLabelForValue: (value: string | number) => string; 
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    radius: 0,
    maintainAspectRatio: false,
    responsive: true,
    scales: {
          x: {
              grid: {
                  display: false,
              },
              ticks: {
                    callback: function(value: string | number, index: number, ticks: { value: number; }[]): string | null {
                        const visibleTickIndexes = [0, ticks.length - 1];
                        if (visibleTickIndexes.includes(index)) {
                            return (this as ChartTickOptions).getLabelForValue(value);
                        }

                        return null
                    }
              }
          },
          y: {
              display:false,
              grid: {
                  display: false,
              },
              ticks: {
                  display: false,
              }
          },
    },
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
};

const TransactionChart: React.FC<TransactionChartProps> = ({ transactions }) => {
   const data = useMemo(() => {
        const labels = transactions.map((transaction) => formatDate(transaction.date));
        
        return {
          labels,
          datasets: [
            {
              label: 'Dataset 1',
              data: transactions.map((transaction) => transaction.amount),
              borderColor: '#FF5403',
              backgroundColor: '#FF5403',
              borderWidth: 1,
              tension: 0.5,
            },
          ],
        };
    }, [transactions]);

  return <Line data-testid='transaction-chart' options={options} data={data} />;
};

export default TransactionChart
