import React, { createContext, useReducer, useContext } from "react";
import { AppReducer } from "./app-reducer";

const initialState = {
  transactions: [
    { id: 1, text: "flower", amount: -50 },
    { id: 2, text: "card", amount: 30 },
    { id: 3, text: "book", amount: 140 },
    { id: 4, text: "pen", amount: -20 },
  ],
};
//Global context
export const GlobalContext = createContext(initialState);

//Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(`useGlobalContext can be used with in GlobalProvider`);
  }

  return context;
};
