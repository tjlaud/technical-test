import React from "react";

function Invoice(props) {
  let data = ["Fido", "John Smith", "Magic Vets", "£300"]; //Placeholder data.

  return (
    <div className={props.invoiceDisplay}>
      <p>Invoice data displayed here</p>
      <p>Case ID: {props.invoiceCaseID}</p>
      <p>Patient: {data[0]}</p>
      <p>Owner: {data[1]}</p>
      <p>Hospital: {data[2]}</p>
      <p>Price: {data[3]}</p>
    </div>
  );
}

export default Invoice;
