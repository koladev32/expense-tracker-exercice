/**
 * Main component representing the Expense Tracker application.
 * It integrates various components such as Balance, IncomeExpense, TransactionList, and TransactionForm,
 * and utilizes the TransactionsProvider to manage state and provide context for transactions.
 *
 * @component App
 */

import 'assets/styles/index.css';
import { TransactionList, TransactionForm, Balance, IncomeExpense } from 'components';
import { TransactionsProvider } from 'context';

const App = () => {
  return (
    <TransactionsProvider>
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <TransactionForm />
      </div>
    </TransactionsProvider>
  );
};

export default App;
