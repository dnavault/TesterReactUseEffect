import React from "react";
import "./styles.css";
import WorkOrderList from "./components/WorkOrderList";
import ReactAG from "./components/ReactAG";

function App() {
  return (
    <div className="App">
      <div>
        <div><ReactAG/></div>
        <h1>Work Orders</h1>
        <WorkOrderList />
      </div>
    </div>
  );
}

export default App;
