import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkOrder from "./WorkOrder";
import Employee from "./Employee";
import SortByLatestToggleButton from "../components/SortByLatestToggleButton";

export default function WorkOrderList() {
  const [workorders, setWorkOrders] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortByLatest, setSortByLatest] = useState(true);

  const onChangeFilter = (evt) => {
    const search = evt.target.value;
    setFilter(search);
  };

  const onClickSortByLatest = (evt) => {
    console.log(evt);
  };

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
    <>
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
        <SortByLatestToggleButton onClick={(e) => onClickSortByLatest(e)} />
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
          .map((workorder) => (
            <div>
              <WorkOrder key={workorder.id} workorder={workorder} />
              <Employee employeeId={workorder.workerId} />
            </div>
          ))}
      </div>
    </>
  );
}
