import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    toggleForm();
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button type="button" onClick={toggleForm}>
          Add New Expense
        </button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
