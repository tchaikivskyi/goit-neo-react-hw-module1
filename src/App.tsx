import userData from "./data/userData.json";
import friendsData from "./data/friendsData.json";
import transactionsData from "./data/transactions.json";

import Profile from "./components/Profile";
import FriendsList from "./components/FriendsList";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <>
      <Profile data={userData} />
      <FriendsList data={friendsData} />
      <TransactionHistory data={transactionsData} />
    </>
  );
}

export default App;
