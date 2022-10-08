import PropTypes from 'prop-types';
import { StatisticsWrap, StatisticsTitle } from './Statistics.styled';
import { StatisticsInform } from '../StatisticsInform/StatisticsInform';

export const Statistics = ({ data }) => {
  return (
    <StatisticsWrap>
      <StatisticsTitle>Upload stats</StatisticsTitle>
      <StatisticsInform data={data} />
    </StatisticsWrap>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
