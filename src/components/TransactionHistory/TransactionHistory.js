import TransactionHistoryItem from '../TransactionHistory/TransactionHistoryItem'
import PropTypes from 'prop-types'
import s from './TransactionHistiry.module.css'


const TransactionHistory = ({items }) => {
    return (
        <table className={s.table}>
  <thead className={s.thead}>
    <tr className={s.tr}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={s.tbody}>{items.map(TransactionHistoryItem)}</tbody>
</table>)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default TransactionHistory