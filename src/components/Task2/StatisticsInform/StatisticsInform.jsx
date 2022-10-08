import {
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './StatisticsInform.styled';

export const StatisticsInform = ({ data }) => {
  data.map(info => (
    <StatisticsList>
      <StatisticsItem>
        <StatisticsLabel>{info.label}</StatisticsLabel>
        <StatisticsPercentage>{info.percentage}</StatisticsPercentage>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsLabel>{info.label}</StatisticsLabel>
        <StatisticsPercentage>{info.percentage}</StatisticsPercentage>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsLabel>{info.label}</StatisticsLabel>
        <StatisticsPercentage>{info.percentage}</StatisticsPercentage>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsLabel>{info.label}</StatisticsLabel>
        <StatisticsPercentage>{info.percentage}</StatisticsPercentage>
      </StatisticsItem>
    </StatisticsList>
  ));
};
