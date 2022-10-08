import {
  FriendItem,
  Status,
  FriendName,
  FriendAvatar,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <FriendItem>
      <Status status={isOnline} />
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
