import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.Type === "Credit" ? "+" : "-";
  return (
    <>
      <li className={transaction.Type === "Credit" ? "plus" : "minus"}>
        {transaction.Name}
        <span>
          {sign} &#8377; {transaction.Amount}
        </span>
        <button
          className="delete-btn"
          onClick={async () =>
            window.alert(await deleteTransaction(transaction))
          }
        >
          x
        </button>
      </li>
    </>
  );
};
