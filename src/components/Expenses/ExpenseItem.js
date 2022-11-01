import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expenseTitle);

  const clickHandler = () => {
    setTitle("Update");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
