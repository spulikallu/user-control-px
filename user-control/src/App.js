import logo from "./logo.svg";
import "./App.css";
import UserInput from "./Components/UserInput";
import Dailog from "./Components/Dailog";
import UserList from "./Components/UserList";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);

  const onTextChangeHandler = (role, text) => {
    if (role === "name") {
      setUserName(text);
    } else {
      setUserAge(text);
    }
  };

  const onAddUserHandler = () => {
    if (!userName || userName.trim() === "") {
      setUserName("");
      setErrorMessage("user name should not be empty");
      setShowModal(true);
    } else if (!userAge || userAge.trim() === "") {
      setUserAge("");
      setErrorMessage("age should not be empty");
      setShowModal(true);
    } else if (isNaN(userAge) || userAge < 0 || userAge > 100) {
      setErrorMessage("Please enter valid error message between 0 and 100");
      setShowModal(true);
    } else {
      setUsers((prevUsers) => {
        return [
          ...prevUsers,
          {
            name: userName,
            age: userAge,
            id: prevUsers.length + 1,
          },
        ];
      });
      setShowModal(false);
    }
  };

  const onCloseModelHandler = () => {
    setShowModal(false);
  };

  return (
    <div
      className="App"
      onClick={() => {
        showModal && setShowModal(false);
      }}
    >
      <UserInput
        userName={userName}
        userAge={userAge}
        onChange={onTextChangeHandler}
        addUser={onAddUserHandler}
      />
      <UserList users={users} />
      <Dailog
        open={showModal}
        onCloseModelHandler={onCloseModelHandler}
        message={errorMessage}
      />
    </div>
  );
}

export default App;
