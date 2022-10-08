import { Profile } from 'components/Task1/Profile/Profile';
import { Container } from './App.styled';
import { Statistics } from 'components/Task2/Statistics/Statistics';
import user from '../../json/user.json';
import data from '../../json/data.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics data={data} title="Upload stats"></Statistics>
    </Container>
  );
};
