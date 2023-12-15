import { render } from '@testing-library/react';
import { TransactionsContext } from 'context';

/**
 *
 * source: https://stackoverflow.com/questions/56828017/testing-usecontext-with-react-testing-library
 * @param {*} children
 * @param {*} param1
 * @returns
 */
global.renderWithContext = (children, { providerProps, ...renderOptions }) => {
  return render(
    <TransactionsContext.Provider value={providerProps}>{children}</TransactionsContext.Provider>,
    renderOptions
  );
};

global.sampleTransactions = [
  {
    description: 'More money',
    amount: '100',
    id: '12ejideddjeodkedkeo',
    date: new Date(),
  },
  {
    description: 'Less money',
    amount: '-20',
    id: 'dekdkeodkedkeodede',
    date: new Date(),
  },
  {
    description: 'Less money again',
    amount: '-50',
    id: 'zertyuio15534',
    date: new Date(),
  },
];

global.transactionsProps = {
  transactions: sampleTransactions.slice(0, 2),
  append: jest.fn(function ({ description, amount }) {
    providerProps.transactions.append({
      description,
      amount,
      date: new Date(),
      id: 'lkjghfdsxcvbn4556',
    });
  }),
  reset: jest.fn(function () {
    providerProps.transactions = [];
  }),
};
