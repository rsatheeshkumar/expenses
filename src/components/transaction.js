import React, { useContext } from "react";
import { GlobalContext } from "../context/global-state";
import TransactionList from "./transaction-list";

const Transaction = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          return (
            <TransactionList key={transaction.id} transaction={transaction} />
          );
        })}
      </ul>
    </div>
  );
};

export default Transaction;
