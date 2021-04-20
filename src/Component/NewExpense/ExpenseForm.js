import React, { useState } from "react";
import "./ExpenseFrom.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [open, setOpen] = useState(false);
  //  const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandLer = (event) => {
    setEnteredAmount(event.target.value);
  };

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    const expenseData = {
      title: enteredTitle,
      Date: new Date(enteredDate),
      Amount: enteredAmount,
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
    event.preventDefault();
  };

  const handleFormDisplay = () => {
    setOpen((open) => !open);
  };
  return (
    <div>
      {!open ? (
        <button onClick={handleFormDisplay}>Add New Expenses</button>
      ) : (
        <form onSubmit={submitHandler}>
          <div className='new-expense__controls'>
            <div className='new-expense__control'>
              <lable>Title</lable>
              <input
                value={enteredTitle}
                type='text'
                onChange={titleChangeHandler}
              />
            </div>
            <div className='new-expense__control'>
              <lable>Amount</lable>
              <input
                type='number'
                min='0.01'
                step='0.01'
                value={enteredAmount}
                onChange={amountChangeHandLer}
              />
            </div>
            <div className='new-expense__control'>
              <lable>Date</lable>
              <input
                value={enteredDate}
                type='Date'
                min='2019-01-01'
                max='2022-12-31'
                onChange={DateChangeHandler}
              />
            </div>
          </div>

          <div className='new-expense__actions'>
            <button onClick={handleFormDisplay}>Cancle</button>
            <button type='submit'>Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
