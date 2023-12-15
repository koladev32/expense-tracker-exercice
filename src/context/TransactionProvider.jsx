import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Storage } from 'helpers';

export const TransactionsContext = React.createContext({});

const storage = new Storage(localStorage, 'expense-trackers');

/**
 * Context provider component for managing transactions. It uses the TransactionsContext to
 * provide state and functions related to transactions to its children components. It initializes
 * the state with data from local storage, including functions for appending, removing, editing,
 * and resetting transactions. The component also utilizes the Storage helper for handling local
 * storage operations.
 *
 * @param {ReactNode} props.children - The child components to be wrapped by the provider.
 *
 * @returns {JSX.Element} The JSX representation of the TransactionsProvider component.
 */

const TransactionsProvider = ({ children }) => {
  const savedData = storage.getData('transactions');

  const [transactions, setTransactions] = useState(savedData?.data || []);

  const saveTransactions = useCallback((data) => {
    console.log(data);
    setTransactions(data);
    storage.setData('transactions', { data });
  }, []);

  const append = useCallback(
    ({ description, amount }) => {
      const date = new Date();
      const id = (+date).toString(36);
      saveTransactions([...transactions, { description, amount, date, id }]);
    },
    [transactions, saveTransactions]
  );

  const remove = useCallback(
    function (id) {
      const result = transactions.filter((item) => item.id !== id);
      saveTransactions(result);
    },
    [transactions, saveTransactions]
  );

  const edit = useCallback(
    (id, { description, amount }) => {
      const index = transactions.map((item) => item.id).indexOf(id);
      const result = [...transactions];
      result[index] = {
        description,
        amount,
        id,
        date: transactions[index]['date'],
      };
      saveTransactions(result);
    },
    [transactions, saveTransactions]
  );

  const reset = useCallback(() => saveTransactions([]), [saveTransactions]);

  const memoValues = useMemo(
    () => ({ transactions, append, remove, edit, reset }),
    [transactions, append, edit, remove, reset]
  );

  return <TransactionsContext.Provider value={memoValues}>{children}</TransactionsContext.Provider>;
};

TransactionsProvider.defaultProps = {
  children: null,
};

TransactionsProvider.propTypes = {
  children: PropTypes.node,
};

export default TransactionsProvider;
