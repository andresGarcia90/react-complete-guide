import React from "react";
import { useState } from "react";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");
  const filterExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  let expensesContent = <p>No expenses found.</p> ;

  if( filterExpenses.length > 0 ) {
    expensesContent = 
    filterExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        expenseTitle={expense.title}
        expenseAmount={expense.amount}
        expenseDate={expense.date}
      ></ExpenseItem>))
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler}></ExpensesFilter>
      { expensesContent }
       
    </Card>
  );
}
