import TextBox from "./TextBox";
import Card from "./Card";
import Button from "./Button";
import { useState } from "react";
import Dailog from "./Dailog";

const UserInput = () => {
  const [userName, setUserName] = useState("abc");
  const [userAge, setUserAge] = useState(100);
  const [showModal, setShowModal] = useState(false);

  const onTextChangeHandler = (role, text) => {
    if (role === "name") {
      setUserName(text);
    } else {
      setUserAge(text);
    }
  };

  const onAddUserHandler = () => {
    setShowModal(true);
  };

  const onCloseModelHandler = () => {
      setShowModal(false);
  }

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
      <Dailog open={showModal} onCloseModelHandler={onCloseModelHandler}/>
    </Card>
  );
};

export default UserInput;
