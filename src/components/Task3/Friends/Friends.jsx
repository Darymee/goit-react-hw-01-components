import PropTypes from 'prop-types';
import {
  FriendsList,
  Friend,
  Status,
  FriendName,
  FriendAvatar,
} from './Friends.styled';

export const Friends = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <Friend key={friend.id}>
          <Status status={friend.isOnline} />
          <FriendAvatar src={friend.avatar} alt={friend.name} width="48" />
          <FriendName>{friend.name}</FriendName>
        </Friend>
      ))}
    </FriendsList>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
