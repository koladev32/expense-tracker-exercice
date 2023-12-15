import React, { useContext } from 'react';
import TransactionItem from './TransactionItem';
import { TransactionsContext } from 'context';

/**
 * Component to display a list of transactions. It uses the useContext hook to access the transactions,
 * edit, and remove functions from TransactionsContext. It maps through the transactions array and
 * renders an individual TransactionItem component for each transaction. The component also includes
 * a title for the transactions list.
 *
 * @returns {JSX.Element} The JSX representation of the TransactionList component.
 */

const TransactionList = () => {
  const { transactions, edit, remove } = useContext(TransactionsContext);
  return (
    <div>
      <h3>Transactions List</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          return <TransactionItem key={transaction.id} transaction={transaction} remove={remove} edit={edit} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
