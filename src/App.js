import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const App = () => {
  const [value, setValue] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "http://starlord.hackerearth.com/bankAccount"
    );

    setValue(response.data);
    // setAcc(
  };
  return (
    <div className="App">
      <h1>Bank Details</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
        {value &&
          value.map((data, index) => {
            if (index >= 10) return;
            // const Account_No =
            // const Transaction_Details =
            return (
              <div className="list-group container">
                <h4 className={"list-group-item"}>
                  Transaction Details: {data["Transaction Details"]}
                </h4>
                <p className={"list-group-item"}>
                  Account No: {data["Account No"]}
                </p>
                <p className={"list-group-item"}>
                  {" "}
                  Withdrawal AMT: {data["Withdrawal AMT"]}
                </p>
                <p className={"list-group-item"}>
                  Deposit AMT: {data["Deposit AMT"]}
                </p>
                <p className={"list-group-item"}>
                  Balance AMT: {data["Balance AMT"]}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
