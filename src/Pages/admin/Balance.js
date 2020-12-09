import React, { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";
export const Balance = () => {
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
  // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const total = totalIncome - totalExpense;
  // console.log(total);

  return (
    <>
      <h4 className="balance__title">Your Balance</h4>
      <h1 className="balance__amount"> &#8377; {total} </h1>
    </>
  );
};
