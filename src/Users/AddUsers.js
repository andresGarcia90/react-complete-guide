import React from "react";
import Card from "../UI/Card";
import "./AddUsers.css";

const AddUsers = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    if(event.target){
        props.newUser = {
            username: event.target.username.value,
            age: event.target.age.value
        };
        event.target.username.value = "";
        event.target.age.value = "";
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>

        <label htmlFor="age">Age (Year)</label>
        <input id="age" type="number"></input>

        <button type="submit">Add user</button>
      </form>
    </Card>
  );
};

export default AddUsers;
