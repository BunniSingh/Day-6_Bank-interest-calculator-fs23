import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart({principle, totalInterestGenerated , monthlyPayment}) {
  const data = {
    labels: ['Principle', 'Intrest'],
    datasets: [
      {
        label: '# of Votes',
        data: [principle, totalInterestGenerated],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="chart-container">
      <p>Monthly Payment: $ {monthlyPayment.toFixed(2)}</p>
      <Pie data={data} />
    </div>
  );
}
