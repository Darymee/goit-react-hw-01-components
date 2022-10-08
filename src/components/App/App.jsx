import { Container } from './App.styled';
import { Profile } from 'components/Task1/Profile/Profile';
import { Statistics } from 'components/Task2/Statistics/Statistics';
import { Friends } from 'components/Task3/Friends/Friends';

import user from '../../json/user.json';
import data from '../../json/data.json';
import friends from '../../json/friends.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics data={data} title="Upload stats" />
      <Friends friends={friends} />
    </Container>
  );
};
