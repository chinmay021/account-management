import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Transaction } from "./Transaction";
import { Link } from "react-router-dom";

export const TransactionList = () => {
  // const { transactions } = useContext(GlobalContext);
  // console.log(transactions);
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions(sessionStorage.getItem("clubName"));
    // const recentTransactions = transactions.slice(
    //   Math.max(transactions.length - 5, 0)
    // );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Link
        to={`/login/sucess/${sessionStorage.getItem("clubName")}/transactions`}
        style={{ textDecoration: "none" }}
      >
        <h2 className="all__transactions__button">All transactions </h2>
      </Link>
      <h3 className="recent">Recent Transactions</h3>
      <ul className="recent__list">
        {/* <li className="plus">
          College Funding <span>&#8377; 25000</span>
          <button className="delete-btn">x</button>
        </li>
        <li className="minus">
          Zygon <span>&#8377; 15000</span>
          <button className="delete-btn">x</button>
        </li>
        <li className="minus">
          Dance Competition <span>&#8377; 3000</span>
          <button className="delete-btn">x</button>
        </li> */}
        {transactions
          .slice(Math.max(transactions.length - 3, 0))
          .map((transaction) => (
            <Transaction key={transaction._id} transaction={transaction} />
          ))}
      </ul>
    </div>
  );
};
