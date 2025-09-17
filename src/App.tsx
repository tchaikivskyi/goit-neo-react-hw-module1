import Profile from "./components/Profile";
import userData from "./data/userData.json";
import friendsData from "./data/friendsData.json";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <>
      <Profile data={userData} />
      <FriendsList data={friendsData} />
    </>
  );
}

export default App;
