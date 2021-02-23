import React from "react";
import Employee from "./Employee";


const WorkOrder = ({ workorder }) => {
  const epochDeadline = workorder.deadline;
  let dateWorkOrder = new Date(0);
  dateWorkOrder.setUTCSeconds(epochDeadline);

  return (
    <>
      <div className="work-order-list">
        <div className="work-order-header">
          <div className="work-order-name">{workorder.name}</div>
          <div className="seperator"></div>
          <div className="work-order-deadline">
            {dateWorkOrder.toLocaleString()}
          </div>
        </div>
        <div>{workorder.description}</div>
        <Employee className="employeeItem" employeeId={workorder.workerId} />
      </div>
    </>
  );
};
export default WorkOrder;
