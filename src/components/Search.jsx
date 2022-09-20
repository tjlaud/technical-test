import React from "react";

function Search(props) {
  return (
    <div>
      <form>
        <label>Case ID or User Name </label>
        <input
          type="text"
          value={props.textField}
          onChange={props.caseID}
        ></input>
        <button onClick={props.submitFunction}>Submit</button>
      </form>
    </div>
  );
}

export default Search;
