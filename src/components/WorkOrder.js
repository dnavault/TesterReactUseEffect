import React from "react";

const WorkOrder = ({ workorder }) => {
  const epochDeadline = workorder.deadline;
  let dateWorkOrder = new Date(0);
  dateWorkOrder.setUTCSeconds(epochDeadline);
    
  return (
    <>
      <div className="work-order-list">
        <h2>{workorder.name}</h2>
        <div className="work-order-deadline">{dateWorkOrder.toLocaleString()}</div>
        <p>{workorder.description}</p>
      </div>
     
    </>
  );
};
export default WorkOrder;
