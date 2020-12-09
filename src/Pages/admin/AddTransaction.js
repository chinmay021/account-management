import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("Credit");

  const { addTransaction } = useContext(GlobalContext);
  async function onSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      Name: text,
      Amount: +amount,
      Type: transactionType,
    };
    setAmount(0);
    setText("");
    setTransactionType("Credit");
    // console.log(newTransaction);
    const message = await addTransaction(newTransaction);
    window.alert(message);
  }

  return (
    <>
      <h3 className="recent">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="name">Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter description..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
          />
        </div>
        <div className="form-control">
          {/* <label htmlFor="amount">
          </label> */}

          <input
            className="transactions__type"
            type="radio"
            id="type1"
            name="transaction__type"
            value="credit"
            required
            onClick={() => setTransactionType("Credit")}
            // value={amount}
            // onChange={(e) => setAmount(e.target.value)}
          />
          <label htmlFor="credit">credit</label>
          <input
            className="transaction__type"
            type="radio"
            id="type2"
            name="transaction__type"
            value="debit"
            onClick={() => setTransactionType("Debit")}
            // value={amount}
            // onChange={(e) => setAmount(e.target.value)}
          />
          <label htmlFor="debit">debit</label>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
