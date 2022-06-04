import logo from "./logo.svg";
import "./App.css";
import UserInput from "./Components/UserInput";
import Dailog from "./Components/Dailog";
import UserList from "./Components/UserList";

function App() {
  return (
    <div className="App">
      <UserInput />
      <UserList />
    </div>
  );
}

export default App;
