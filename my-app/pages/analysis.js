import React from 'react';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Required for Chart.js to work properly

function BudgetTracker() {
  // Mock Data
  const budgetLimit = 1000; // Budget limit
  const transactions = [
    { date: '2025-01-01', description: 'Groceries', amount: -200 },
    { date: '2025-01-03', description: 'Utilities', amount: -100 },
    { date: '2025-01-05', description: 'Shopping', amount: -150 },
    { date: '2025-01-07', description: 'Coffee', amount: -50 },
    { date: '2025-01-10', description: 'Salary', amount: 1000 },
  ];

  // Calculate totals
  const totalExpenses = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + Math.abs(t.amount), 0);
  const remainingBudget = budgetLimit - totalExpenses;

  // Chart Data
  const dates = transactions.map(t => t.date);
  const spending = transactions.map((t, i) =>
    transactions.slice(0, i + 1).reduce((acc, txn) => acc + txn.amount, 0)
  );

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Budget Tracking',
        data: spending,
        fill: false,
        borderColor: '#4CAF50',
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', textAlign: 'center' }}>
      <h1>Budget Tracker</h1>

      <div style={{ marginBottom: '20px' }}>
        <h2>Budget Summary</h2>
        <p>Total Expenses: <strong>${totalExpenses.toFixed(2)}</strong></p>
        <p>Budget Limit: <strong>${budgetLimit.toFixed(2)}</strong></p>
        <p>Remaining Budget: <strong>${remainingBudget.toFixed(2)}</strong></p>

        {remainingBudget < 200 && remainingBudget > 0 && (
          <p style={{ color: 'orange' }}>⚠️ You are close to exceeding your budget!</p>
        )}
        {remainingBudget <= 0 && (
          <p style={{ color: 'red' }}>❌ You have exceeded your budget!</p>
        )}
      </div>

      <div style={{ margin: '0 auto', maxWidth: '600px' }}>
        <Line data={data} />
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Transactions</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4', borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '10px' }}>Date</th>
              <th style={{ padding: '10px' }}>Description</th>
              <th style={{ padding: '10px' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px', textAlign: 'center' }}>{txn.date}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>{txn.description}</td>
                <td style={{ padding: '10px', textAlign: 'center', color: txn.amount < 0 ? 'red' : 'green' }}>
                  ${txn.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BudgetTracker;
