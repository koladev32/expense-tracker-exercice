import React, { useContext } from 'react';
import { TransactionsContext } from 'context';

/**
 * Component to display the total income and expense based on the transactions stored in the TransactionsContext.
 * It uses the useContext hook to access the transactions data from the context, filters the amounts for income
 * and expense, calculates their respective totals, and renders them along with titles.
 *
 * @returns {JSX.Element} The JSX representation of the IncomeExpense component.
 */

const IncomeExpense = () => {
  const { transactions } = useContext(TransactionsContext);

  const amountList = transactions.map((transaction) => Number(transaction.amount));

  const incomeTotal = amountList.filter((item) => item > 0).reduce((acc, item) => acc + item, 0);

  const expenseTotal = amountList.filter((item) => item < 0).reduce((acc, item) => acc + item, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expenseTotal)} </p>
      </div>
      <div>
        <h4>Income</h4>
        <p className="money plus">+${Math.abs(incomeTotal)} </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
