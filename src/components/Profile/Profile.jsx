import PropTypes from 'prop-types';
import { ProfileWrap } from './Profile.styled';
import { Description } from 'components/Profile/Description/Description';
import { Stats } from 'components/Profile/Stats/Stats';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <ProfileWrap id={tag}>
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
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }),
};
