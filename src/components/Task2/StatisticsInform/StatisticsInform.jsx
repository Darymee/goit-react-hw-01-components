import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './StatisticsInform.styled';

export const StatisticsInform = ({ data }) => {
  return (
    <StatisticsList>
      {data.map(info => (
        <StatisticsItem key={info.id}>
          <StatisticsLabel>{info.label}</StatisticsLabel>
          <StatisticsPercentage>{info.percentage}%</StatisticsPercentage>
        </StatisticsItem>
      ))}
    </StatisticsList>
  );
};

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
