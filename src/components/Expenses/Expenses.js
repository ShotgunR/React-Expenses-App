import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, updateSelectedYear] = useState("2020");
  const [expenseFilter, updateExpenseFilter] = useState("");

  const expenseFilterHandler = (expenseFilter) => {
    console.log("updated");
    updateExpenseFilter(expenseFilter);
    updateSelectedYear(expenseFilter);
  };
  const filteredExpenses = props.items.filter(
    (element) => element.date.getFullYear() == expenseFilter
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onUpdateExpenseFilter={expenseFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
