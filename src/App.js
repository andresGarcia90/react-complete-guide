import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expense/NewExpense";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Toilet Paper",
      amount: 100.01,
      date: new Date(2021, 7, 14),
    },
    {
      id: 2,
      title: "Car Insurance",
      amount: 1100.01,
      date: new Date(2021, 7, 14),
    },
    {
      id: 3,
      title: "Rent Apartment",
      amount: 1200.01,
      date: new Date(2021, 7, 14),
    },
    { id: 4, title: "Extra", amount: 1025.35, date: new Date(2021, 7, 14) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense></NewExpense>
      <div className="expenses">
        <Expenses expenses={expenses}></Expenses>
      </div>
    </div>
  );
}

export default App;
