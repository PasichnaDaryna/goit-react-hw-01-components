import PropTypes from 'prop-types';
import StatisticsData from './StatisticsData';



const Statistics = ({title, stats}) => {
    return (

        <section>
             <h2>{title}</h2>
        <StatisticsData stats={stats} />

        </section>
        
    );
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default Statistics;



/* <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
                    <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
    <li class="item">
    <span class="label">{label }</span>
    <span class="percentage">{percentage}</span>
    </li>
  </ul>
</section> */