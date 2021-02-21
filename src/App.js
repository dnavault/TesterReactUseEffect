import React from "react";
import logo from "./assets/logo.png";
import "./styles.css";
import WorkOrderList from "./components/WorkOrderList";

function App() {
  return (
    <div className="App">
      <div className="logo_container">
        <h1>Work Orders</h1>
        <WorkOrderList />
      </div>
    </div>
  );
}

export default App;
