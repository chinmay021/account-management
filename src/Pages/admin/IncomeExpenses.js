import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions.map((transaction) => {
    if (transaction.Type === "Credit") {
      return transaction.Amount;
    } else {
      return +0;
    }
  });
  // console.log(income);
  const totalIncome = income.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = transactions.map((transaction) => {
    if (transaction.Type === "Debit") {
      return transaction.Amount;
    } else {
      return +0;
    }
  });
  // console.log(expense);
  const totalExpense = expense
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">&#8377; {totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">&#8377; {totalExpense}</p>
      </div>
    </div>
  );
};
