import PropTypes from 'prop-types';

import {
  TransactionTable,
  TransactionTableHead,
  TransactionHeadLine,
  TransactionBodyLine,
  TransactionBodyСolumn,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionTableHead>
        <tr>
          <TransactionHeadLine>Type</TransactionHeadLine>
          <TransactionHeadLine>Amount</TransactionHeadLine>
          <TransactionHeadLine>Currency</TransactionHeadLine>
        </tr>
      </TransactionTableHead>

      <tbody>
        {items.map(item => (
          <TransactionBodyLine key={item.id}>
            <TransactionBodyСolumn>{item.type}</TransactionBodyСolumn>
            <TransactionBodyСolumn>{item.amount}</TransactionBodyСolumn>
            <TransactionBodyСolumn>{item.currency}</TransactionBodyСolumn>
          </TransactionBodyLine>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
