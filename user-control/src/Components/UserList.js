import Card from "./Card";
function UserList(props) {
  console.log(props.users);
  return (
    <Card mode="list">
      <div>
      {props.users.map((user) => (
        <div key={user.id}>
            {user.name}   (Aged {user.age}) years   <hr/>
        </div>
  
      ))}
      </div>
    </Card>
  );
}

export default UserList;
