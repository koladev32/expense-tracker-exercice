import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { IncomeExpense } from 'components';

describe('Testing IncomeExpense', () => {
  let providerProps;

  beforeEach(() => (providerProps = transactionsProps));

  test('Should show subtotals', () => {
    renderWithContext(<IncomeExpense />, { providerProps });

    expect(screen.getByText('Expense').closest('div')).toHaveTextContent('-$20');
    expect(screen.getByText('Income').closest('div')).toHaveTextContent('+$100');
  });

  test('Should show subtotals after adding transactions', () => {
    providerProps.transactions = sampleTransactions.slice(0, 3);

    renderWithContext(<IncomeExpense />, { providerProps });

    expect(screen.getByText('Expense').closest('div')).toHaveTextContent('-$70');
    expect(screen.getByText('Income').closest('div')).toHaveTextContent('+$100');
  });
});
