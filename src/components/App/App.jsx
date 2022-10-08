import { Container } from './App.styled';
import { Profile } from 'components/Task1/Profile/Profile';
import { Statistics } from 'components/Task2/Statistics/Statistics';
import { Friends } from 'components/Task3/Friends/Friends';
import { TransactionHistory } from 'components/Task4/TransactionHistory/TransactionHistory';

import user from '../../json/user.json';
import data from '../../json/data.json';
import friends from '../../json/friends.json';
import transactions from '../../json/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics data={data} title="Upload stats" />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
