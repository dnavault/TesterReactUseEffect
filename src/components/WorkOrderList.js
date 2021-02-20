import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkOrder from "./WorkOrder";
import Employee from "./Employee";

export default function WorkOrderList() {
  const [workorders, setWorkOrders] = useState([]);

  const getWorkOrders = () => {
    axios
      .get(`https://api.hatchways.io/assessment/work_orders`)
      .then((response) => {
        setWorkOrders(response.data.orders);
        console.log(response.data.orders);
      })
      .catch((error) => console.log(error));
  };
  useEffect(getWorkOrders, []);

  return (
    <div className="film">
      {workorders.map((workorder) => (
        <div>
          <WorkOrder key={workorder.id} workorder={workorder} />
          <Employee employeeId={workorder.workerId} />
        </div>
      ))}
    </div>
  );
}
