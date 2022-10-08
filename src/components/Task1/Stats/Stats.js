import {
  StatsList,
  StatsItem,
  LabelBlock,
  QuantityBlock,
} from './Stats.styled';

export const Stats = ({ stats }) => {
  const { followers, views, likes } = stats;
  return (
    <StatsList>
      <StatsItem>
        <LabelBlock>Followers</LabelBlock>
        <QuantityBlock>{followers}</QuantityBlock>
      </StatsItem>

      <StatsItem>
        <LabelBlock>Views</LabelBlock>
        <QuantityBlock>{views}</QuantityBlock>
      </StatsItem>

      <StatsItem>
        <LabelBlock>Likes</LabelBlock>
        <QuantityBlock>{likes}</QuantityBlock>
      </StatsItem>
    </StatsList>
  );
};
