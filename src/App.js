import React from "react";
import logo from "./assets/logo.png";
import "./styles.css";
import WorkOrderList from "./components/WorkOrderList";
import Employee from "./components/Employee";

function App() {
  return (
    <div className="App">
      <div className="logo_container">
        <img className="logo" src={logo} alt="studio ghibli official logo" />
        <h1>Work Orders</h1>
        <WorkOrderList />
      </div>
    </div>
  );
}

export default App;
