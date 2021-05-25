import React, { Fragment } from "react";
import Cards from "./components/Cards";
import TransactionTable from "./components/TransactionTable";

export default function App() {
  return (
    <Fragment>
      <Cards/>
      <TransactionTable/>
    </Fragment>
  );
}
