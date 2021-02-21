import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkOrder from "./WorkOrder";
import Employee from "./Employee";
import Switch from "@material-ui/core/Switch";

export default function WorkOrderList() {
  const [workorders, setWorkOrders] = useState([]);
  const [filter, setFilter] = useState("");
  const [checked, setChecked] = useState(true);

  const handleChangeSortByLatest = (event) => {
    setChecked(event.target.checked);
  };

  const sortByLatestDeadline = (a, b) => {
    return b.deadline > a.deadline ? 1 : -1;
  };

  const sortByEarliestDeadline = (a, b) => {
    return a.deadline > b.deadline ? 1 : -1;
  };

  const onChangeFilter = (event) => {
    const search = event.target.value;
    setFilter(search);
  };

  const getWorkOrders = () => {
    axios
      .get(`https://api.hatchways.io/assessment/work_orders`)
      .then((response) => {
        setWorkOrders(response.data.orders);
      })
      .catch((error) => console.log(error));
  };
  useEffect(getWorkOrders, []);

  return (
    <>
      {console.log(checked)}
      <div>
        <input
          class="input-name"
          type="text"
          placeholder="Search"
          id="name-input"
          onChange={(e) => onChangeFilter(e)}
        />
      </div>
      <div className="sort-by-latest">
        <Switch
          checked={checked}
          onChange={(e) => handleChangeSortByLatest(e)}
          name="checked"
        />
      </div>
      <div className="work-order">
        {workorders
          .filter((data) => {
            if (filter === null) {
              console.log(data);
              return data;
            } else {
              if (data.name.toLowerCase().includes(filter.toLowerCase())) {
                console.log(data);
                return data;
              }
            }
          })
          .sort(checked ? sortByLatestDeadline : sortByEarliestDeadline)
          .map((workorder) => (
            <div>
              <WorkOrder key={workorder.id} workorder={workorder} />
              <Employee employeeId={workorder.workerId} />
            </div>
          ))
          .sort()}
      </div>
    </>
  );
}
