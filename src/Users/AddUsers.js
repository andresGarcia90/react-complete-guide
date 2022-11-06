import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import "./AddUsers.css";

const AddUsers = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [showModalError, setShowModalError] = useState(false);

  const errorModaHandle = (event) => {
    setShowModalError(false);
  };

  const usernameChangeHandle = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const ageChangeHandle = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModalError(true);
    if (event.target) {
      // props.newUser = {
      //     username: username,
      //     age: age
      // };
      setUsername("");
      setAge("");
    }
  };

  return (
    <>
      <ErrorModal
        title="UPS!"
        message="Something happen"
        onClick={errorModaHandle}
        show={showModalError}
      ></ErrorModal>
      <Card>
        <form>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandle}
            value={username}
          ></input>

          <label htmlFor="age">Age (Year)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandle}
            value={age}
          ></input>
          <Button type="submit" onClick={handleSubmit}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
