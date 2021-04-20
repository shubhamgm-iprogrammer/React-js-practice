import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import ExpenseItem from "./Component/ExpenseItem";
import Expenses from "./Component/Expenses/Expenses";
import NewExpense from "./Component/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { title: "Toilet-paper", Amount: "249", Date: new Date(2021, 2, 28) },
  { title: "New Tv", Amount: "249", Date: new Date(2021, 2, 28) },
  { title: "car insaurance", Amount: "249", Date: new Date(2021, 2, 28) },
  { title: "car insaurance", Amount: "249", Date: new Date(2021, 2, 28) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log("in App.js");
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
