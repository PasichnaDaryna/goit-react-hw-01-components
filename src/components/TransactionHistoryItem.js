  
import PropTypes from 'prop-types';
import s from './TransactionHistiry.module.css';

const TransactionHistoryItem=({ id, type, amount, currency }) => {
  return (
    <tr className={s.tr}key={id} >
      <td className={s.td}>{type}</td>
      <td className={s.td}>{amount}</td>
      <td className={s.td}>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default TransactionHistoryItem;