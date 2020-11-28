import './App.css';
import user from './data/user.json'
import Profile from './components/Profile'
import Statistics from './components/Statistics'
import Container from './components/Container'
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import FriendList from './components/FriendList';
import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory'




function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
    
  );
}

export default App;
