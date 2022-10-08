import PropTypes from 'prop-types';
import { Profile } from 'components/Task1/Profile/Profile';
import { Container } from './App.styled';
import { Statistics } from 'components/Task2/Statistics/Statistics';
import user from '../../json/user.json';
import data from '../../json/data.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user} tag={user.tag} />
      {/* <Statistics data={data}></Statistics> */}
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
    })
  ),
};
