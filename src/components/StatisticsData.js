import PropTypes from 'prop-types';
import s from './Statistics.module.css';


const StatisticsData=({ stats }) => {
  return (
    <ul className={s.stats}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} >
          <span className={s.label}>{label} </span>
          <span className ={s.quantity}>{percentage}% </span>
        </li>
      ))}
    </ul>
  );
}

StatisticsData.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatisticsData;
