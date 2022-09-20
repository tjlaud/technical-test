import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Invoice from "./components/Invoice";

function App() {
  // State
  const [caseID, setCaseID] = useState();
  const [invoiceClassName, setInvoiceClassName] = useState("hidden");

  // Functions
  const searchFunction = (e) => {
    e.preventDefault();
    updateInvoice();
  };
  const updateCaseID = (event) => {
    setCaseID(event.target.value);
  };
  const updateInvoice = () => {
    invoiceClassName === "hidden"
      ? setInvoiceClassName("visible")
      : invoiceClassName("hidden");
  };

  return (
    <div className="App">
      <h1>Vet CT Invoice Request</h1>
      <Search
        submitFunction={searchFunction}
        caseID={updateCaseID}
        textField={caseID}
      />
      <Invoice invoiceDisplay={invoiceClassName} invoiceCaseID={caseID} />
    </div>
  );
}

export default App;
