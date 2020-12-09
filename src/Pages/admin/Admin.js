import React from "react";
import "./Admin.css";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { Redirect, Link } from "react-router-dom";
function Admin({ clubName }) {
  if (
    !sessionStorage.getItem("token") ||
    sessionStorage.getItem("clubName") !== clubName
  ) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div className="admin__wrapper">
        <div className="admin">
          <Link
            style={{ textDecoration: "none", color: "rgb(51 51 51)" }}
            to={`/login/sucess/${sessionStorage.getItem(
              "clubName"
            )}/add_member`}
          >
            <h3 className="member__button1">add member</h3>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "rgb(51 51 51)" }}
            to={`/login/sucess/${sessionStorage.getItem(
              "clubName"
            )}/remove_member`}
          >
            <h3 className="member__button2">remove member</h3>
          </Link>

          <h2 style={{ textTransform: "uppercase" }}>
            {clubName} club expense
          </h2>
          <div className="admin__container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
