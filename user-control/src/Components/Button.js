const Button = (props) => {
  const addUserHandler = () => {
    props.onAddUserHandler();
  };

  return <button onClick={addUserHandler}>Add User</button>;
};

export default Button;
