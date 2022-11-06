import React from "react";
import Card from "../UI/Card";

const ListUsers = (props) => {
  if (!props.users.length > 0) {
    return;
  }

  return (
    <Card>
      <ul>
        {props.users.map((user) => {
            console.log(user);
          return (
            <li key={user.id}>
              {user.username}- {user.age}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default ListUsers;
