import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

const Employee = (props) => {
  const [employee, setEmployee] = useState({});

  const getEmployee = (employeeId) => {
    axios
      .get(`https://api.hatchways.io/assessment/workers/${props.employeeId}`)
      .then((response) => {
        setEmployee(response.data.worker);
      })
      .catch((error) => console.log(error));
  };
  useEffect(getEmployee, []);

  return (
    <div>
      <div key={employee.id}>
        <img
          className="employee-image text-wrap-img"
          width="50px"
          height="50px"
          src={employee.image}
          alt=""
        />
        <div>{employee.name}</div>
        <div className="employeeCompany">{employee.companyName}</div>
        <div className="employeeEmail">{employee.email}</div>
      </div>
    </div>
  );
};

export default Employee;
