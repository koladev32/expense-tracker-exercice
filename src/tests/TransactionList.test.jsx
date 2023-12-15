import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { TransactionList } from 'components';

describe('Testing TransactionList', () => {
  let providerProps;

  beforeEach(() => (providerProps = transactionsProps));

  test('Should show transaction list', () => {
    renderWithContext(<TransactionList />, { providerProps });

    expect(screen.getByText('More money')).toBeInTheDocument();
    expect(screen.getByText('+$100')).toBeInTheDocument();
    expect(screen.getByText('Less money')).toBeInTheDocument();
    expect(screen.getByText('-$20')).toBeInTheDocument();
    expect(screen.queryByText('Less money again')).not.toBeInTheDocument();
    expect(screen.queryByText('-$50')).not.toBeInTheDocument();
  });

  test('Should show transaction list after adding transactions', () => {
    providerProps.transactions = sampleTransactions.slice(0, 3);

    renderWithContext(<TransactionList />, { providerProps });

    expect(screen.getByText('More money')).toBeInTheDocument();
    expect(screen.getByText('+$100')).toBeInTheDocument();
    expect(screen.getByText('Less money')).toBeInTheDocument();
    expect(screen.getByText('-$20')).toBeInTheDocument();
    expect(screen.getByText('Less money again')).toBeInTheDocument();
    expect(screen.getByText('-$50')).toBeInTheDocument();
  });
});
