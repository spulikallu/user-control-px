import TextBox from "./TextBox";
import Card from "./Card";
import Button from "./Button";
import { useState } from "react";
import Dailog from "./Dailog";

const UserInput = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      setShowModal(false);
    }
  };

  const onCloseModelHandler = () => {
    setShowModal(false);
  };

  let formData = [
    {
      label: "UserName",
      text: userName,
    },
    {
      label: "Age (Years)",
      text: userAge,
    },
  ];

  return (
    <Card mode="input">
      <TextBox
        label={formData[0].label}
        text={formData[0].text}
        role="name"
        onTextChangeHandler={onTextChangeHandler}
      />{" "}
      <TextBox
        label={formData[1].label}
        text={formData[1].text}
        role="age"
        onTextChangeHandler={onTextChangeHandler}
      />
      <Button fromData={formData} onAddUserHandler={onAddUserHandler} />
      <Dailog
        open={showModal}
        onCloseModelHandler={onCloseModelHandler}
        message={errorMessage}
      />
    </Card>
  );
};

export default UserInput;
