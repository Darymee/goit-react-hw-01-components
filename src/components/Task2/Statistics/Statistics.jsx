import PropTypes from 'prop-types';
import { StatisticsWrap, StatisticsTitle } from './Statistics.styled';
import { StatisticsInform } from '../StatisticsInform/StatisticsInform';

export const Statistics = ({ title, data }) => {
  return (
    <StatisticsWrap>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsInform data={data} />
    </StatisticsWrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};
