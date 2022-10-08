import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem.jsx';

import { FriendsUl } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsUl>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        />
      ))}
    </FriendsUl>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
