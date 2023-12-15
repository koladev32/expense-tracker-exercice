import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { TransactionItem } from 'components';

describe('Testing TransactionItem', () => {
  const transaction = sampleTransactions[0];
  const edit = jest.fn();
  const remove = jest.fn();

  test('Should show item', () => {
    render(<TransactionItem transaction={transaction} edit={edit} remove={remove} />, {});
    expect(screen.getByText('More money')).toBeInTheDocument();
    expect(screen.getByText('+$100')).toBeInTheDocument();
  });

  test('Should edit item', () => {
    const { container } = render(<TransactionItem transaction={transaction} edit={edit} remove={remove} />, {});
    fireEvent.click(screen.getByTestId('action-edit'));
    fireEvent.change(container.querySelector('#description'), {
      target: { value: 'Testing edit transaction' },
    });
    fireEvent.change(container.querySelector('#amount'), {
      target: { value: '500' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(edit).toHaveBeenCalledWith(transaction.id, {
      description: 'Testing edit transaction',
      amount: '500',
    });
  });

  test('Should remove item', () => {
    render(<TransactionItem transaction={transaction} edit={edit} remove={remove} />, {});
    fireEvent.click(screen.getByTestId('action-remove'));
    expect(remove).toHaveBeenCalledTimes(1);
  });
});
