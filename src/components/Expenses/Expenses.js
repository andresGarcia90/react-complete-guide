import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
  return props.expenses.map((expense, index) => (
    <ExpenseItem
      key={index}
      expenseDate={expense.date}
      expenseTitle={expense.title}
      expenseAmount={expense.amount}
    ></ExpenseItem>
  ));
}
