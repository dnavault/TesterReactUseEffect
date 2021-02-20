import React from "react";

const WorkOrder = ({ workorder }) => {
  return (
    <>
      <div className="film-list">
        <h2>{workorder.name}</h2>
        <p>{workorder.description}</p>
      </div>
      <div>{workorder.deadline}</div>
    </>
  );
};
export default WorkOrder;
