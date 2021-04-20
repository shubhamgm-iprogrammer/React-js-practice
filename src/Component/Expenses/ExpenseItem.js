import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";
const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "car Insurance";
  //   const expenseAmount = "294.67";
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate Date={props.Date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.Amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
