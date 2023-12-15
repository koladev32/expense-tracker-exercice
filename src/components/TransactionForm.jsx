import React, { useContext, useState } from 'react';
import { TransactionsContext } from 'context';

/**
 * Component for adding transactions. It uses the useContext hook to access the append function
 * from TransactionsContext, allowing the addition of new transactions. The form captures user input
 * for transaction description and amount, and on submission, it calls the append function with the
 * entered values. The component also manages local state for the description and amount input fields.
 *
 * @returns {JSX.Element} The JSX representation of the TransactionForm component.
 */

const TransactionForm = () => {
  const { append } = useContext(TransactionsContext);

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    append({ description, amount });
    setDescription('');
    setAmount('');
  };
  return (
    <div>
      <h3>Add transaction </h3>
      <form>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Entrer description ..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="Entrer amount ..."
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <button type="button" className="btn" onClick={handleSubmit}>
          {' '}
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
