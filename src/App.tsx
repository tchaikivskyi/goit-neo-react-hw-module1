import Profile from "./components/Profile";
import userData from "./userData.json";

function App() {
  return (
    <>
      <Profile data={userData} />
    </>
  );
}

export default App;
