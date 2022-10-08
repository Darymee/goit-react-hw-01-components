import {
  DescriptionWrap,
  DescriptionName,
  Avatar,
  DescriptionBlock,
} from './Description.styled';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <DescriptionWrap>
      <Avatar src={avatar} alt={username} />
      <DescriptionName>{username}</DescriptionName>
      <DescriptionBlock>@{tag}</DescriptionBlock>
      <DescriptionBlock>{location}</DescriptionBlock>
    </DescriptionWrap>
  );
};
