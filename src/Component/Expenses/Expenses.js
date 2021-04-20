import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../Ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "../Expenses/ExpensesChart";
const Expenses = (props) => {
  const [year, setYear] = useState("");

  const handleExpenseFilter = (year) => {
    console.log("in expenses");
    setYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.Date.getFullYear().toString() === year;
  });
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selectedYear={year}
          onExpenseFilter={handleExpenseFilter}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length === 0 ? (
          <p>Nothing to show</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              Amount={expense.Amount}
              Date={expense.Date}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;
