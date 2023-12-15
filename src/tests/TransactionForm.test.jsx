import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import { TransactionForm } from 'components';

describe('Testing TransactionForm', () => {
  let providerProps;

  beforeEach(() => (providerProps = transactionsProps));

  test('Should show balance', () => {
    const { container } = renderWithContext(<TransactionForm />, {
      providerProps,
    });
    fireEvent.change(container.querySelector('#description'), {
      target: { value: 'Testing new transaction' },
    });
    fireEvent.change(container.querySelector('#amount'), {
      target: { value: '200' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(providerProps.append).toHaveBeenCalledTimes(1);
  });
});
