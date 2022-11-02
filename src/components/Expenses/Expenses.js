import React from "react";
import { useState } from "react";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");
  const filterExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };


  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler}></ExpensesFilter>
      <ExpensesList items={filterExpenses}></ExpensesList>
    </Card>
  );
}
