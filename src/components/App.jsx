import { Container } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import user from './data-json/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './data-json/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './data-json/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../components/data-json/transactions.json';
export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Container>
  );
};
