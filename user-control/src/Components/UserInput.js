import TextBox from "./TextBox";
import Card from "./Card";
import Button from "./Button";
import { useState } from "react";
import Dailog from "./Dailog";

const UserInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onTextChangeHandler = (role, text) => {
    props.onChange(role, text);
  };

  const onAddUserHandler = () => {
    props.addUser();
   };

  let formData = [
    {
      label: "UserName",
      text: props.userName,
    },
    {
      label: "Age (Years)",
      text: props.userAge,
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
    </Card>
  );
};

export default UserInput;
