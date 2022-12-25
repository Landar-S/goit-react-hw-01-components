import PropTypes from 'prop-types';
import {
  TableTransactions,
  TableTransactionsHead,
  TableTransactionsRows,
  TableTransactionsHeaders,
  TableTransactionsBody,
  TableTransactionsData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items = [] }) => {
  return (
    <TableTransactions>
      <TableTransactionsHead>
        <TableTransactionsRows>
          <TableTransactionsHeaders>Type</TableTransactionsHeaders>
          <TableTransactionsHeaders>Amount</TableTransactionsHeaders>
          <TableTransactionsHeaders>Currency</TableTransactionsHeaders>
        </TableTransactionsRows>
      </TableTransactionsHead>

      <TableTransactionsBody>
        {items.map(item => (
          <TableTransactionsRows key={item.id}>
            <TableTransactionsData>{item.type}</TableTransactionsData>
            <TableTransactionsData>{item.amount}</TableTransactionsData>
            <TableTransactionsData>{item.currency}</TableTransactionsData>
          </TableTransactionsRows>
        ))}
      </TableTransactionsBody>
    </TableTransactions>
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
