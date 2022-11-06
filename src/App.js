import React, { useState } from "react";
import AddUsers from "./Users/AddUsers";
import ListUsers from "./Users/ListUsers";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandle = (username, age) => {
    setUsersList((prevUserList) => [
      ...prevUserList,
      { username: username, age: age, id: Math.ceil(Math.random() * 100) },
    ]);
  };
  return (
    <div>
      <AddUsers onAddUser={addUserHandle}></AddUsers>
      <ListUsers users={usersList}></ListUsers>
    </div>
  );
}

export default App;
