import { Container } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from '../../json/user.json';
import data from '../../json/data.json';
import friends from '../../json/friends.json';
import transactions from '../../json/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics data={data} title="Upload stats" />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
