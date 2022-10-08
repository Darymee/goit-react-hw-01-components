import PropTypes from 'prop-types';
import { ProfileWrap } from './Profile.styled';
import { Description } from 'components/Task1/Description/Description';
import { Stats } from 'components/Task1/Stats/Stats';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <ProfileWrap>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats stats={stats} />
    </ProfileWrap>
  );
};

Profile.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    })
  ),
};
