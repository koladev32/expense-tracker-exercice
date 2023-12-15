import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionProvider';

/**
 * Component to display the total balance based on the transactions stored in the TransactionsContext.
 * It uses the useContext hook to access the transactions data from the context, calculates the total
 * balance, and renders it along with a title.
 *
 * @returns {JSX.Element} The JSX representation of the Balance component.
 */

export const Balance = () => {
  const { transactions } = useContext(TransactionsContext);

  const amountList = transactions.map((transaction) => Number(transaction.amount));

  const total = amountList.reduce((acc, item) => acc + item, 0);

  return (
    <div>
      <h4>Total Balance</h4>
      <h1 data-testid="balance-total">${total}</h1>
    </div>
  );
};

export default Balance;
