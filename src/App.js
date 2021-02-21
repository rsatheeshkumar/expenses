import React from "react";
import "./App.scss";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpenses from "./components/inc-exp-container";
import Transaction from "./components/transaction";
import AddTransaction from "./components/add-transaction";

import { GlobalProvider } from "./context/global-state";
const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transaction />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
