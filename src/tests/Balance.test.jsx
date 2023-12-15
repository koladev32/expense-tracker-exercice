import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { Balance } from 'components';

describe('Testing Balance', () => {
  let providerProps;

  beforeEach(() => (providerProps = transactionsProps));

  test('Should show balance', () => {
    renderWithContext(<Balance />, { providerProps });
    expect(screen.getByTestId('balance-total')).toHaveTextContent('$80');
  });

  test('Should show balance after adding transactions', () => {
    providerProps.transactions = sampleTransactions.slice(0, 3);
    renderWithContext(<Balance />, { providerProps });
    expect(screen.getByTestId('balance-total')).toHaveTextContent('$30');
  });
});
