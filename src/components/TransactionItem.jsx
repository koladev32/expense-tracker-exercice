import React, { useState } from 'react';

/**
 * Component representing an individual transaction item in a list. It includes functionality
 * for displaying and editing the transaction details. The component manages local state for
 * handling edit mode, description, and amount. Depending on whether the transaction is being
 * edited or not, it renders either an input form for editing or the transaction details. It
 * also includes buttons for removing and editing the transaction.
 *
 * @param {Object} props.transaction - The transaction object containing details like description, amount, and id.
 * @param {Function} props.remove - The function to remove the transaction.
 * @param {Function} props.edit - The function to edit the transaction.
 *
 * @returns {JSX.Element} The JSX representation of the TransactionItem component.
 */

const TransactionItem = ({ transaction, remove, edit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  let sign = transaction.amount >= 0 ? '+' : '-';
  return (
    <div>
      <li className={transaction.amount >= 0 ? 'plus' : 'minus'}>
        {isEdit && (
          <div>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <input type="number" id="amount" value={amount} onChange={(event) => setAmount(event.target.value)} />
            <button
              onClick={() => {
                edit(transaction.id, { description, amount });
                setIsEdit(false);
              }}
            >
              Save
            </button>
          </div>
        )}
        {!isEdit && (
          <div>
            {transaction.description}
            <span data-testid="listamount" className="listamount">
              {sign}${Math.abs(transaction.amount)}
            </span>
            <button data-testid="action-remove" className="listbutton1" onClick={() => remove(transaction.id)}>
              {' '}
              X
            </button>
            <button
              data-testid="action-edit"
              className="listbutton2"
              onClick={() => {
                setDescription(transaction.description);
                setAmount(transaction.amount);
                setIsEdit(true);
              }}
            >
              M
            </button>
          </div>
        )}
      </li>
    </div>
  );
};

export default TransactionItem;
