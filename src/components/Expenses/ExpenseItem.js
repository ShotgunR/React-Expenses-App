import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expenseDate} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
