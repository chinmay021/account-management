import React, { createContext, useReducer } from "react";
import {
  fetchTransactions,
  sendTransactions,
  removeTransactions,
} from "../axios/requests";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

//Create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  async function deleteTransaction(transaction) {
    const message = await removeTransactions(transaction);
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: transaction._id,
    });
    return message;
  }

  async function addTransaction(transaction) {
    const message = await sendTransactions(transaction);
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
    return message;
  }

  async function getTransactions(clubname) {
    const data = await fetchTransactions(clubname);
    // console.log(data);
    dispatch({
      type: "GET_TRANSACTIONS",
      payload: data,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
