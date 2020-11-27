import PropTypes from 'prop-types';


const StatisticsData=({ stats }) => {
  return (
    <ul>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} >
          <span >{label}</span>
          <span>{percentage}%</span>
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
