// Step 6 - Create MovieCard with ICE
// Step 8 - Use passed props in MovieCard to render film data
import React, { useEffect, useState } from "react";
import axios from "axios";

const Employee = (props) => {
  console.log(props);

  const [employee, setEmployee] = useState([]);

  const getEmployee = (employeeId) => {
    // 4. the effect fn is pulled from the waiting room and fired!
    axios
      .get(`https://api.hatchways.io/assessment/workers/${props.employeeId}`)
      .then((response) => {
        console.log(response.data.worker);
        // 5. STATE CHANGE! update films to Array of film objs
        setEmployee(response.data.worker); // response.data = Array[film objs]
      })
      .catch((error) => console.log(error));
  };

  // 2. sees useEffect hook & queues like a waiting room the effect fn (first param)
  // 7. useEffect has dependency array of [], so effectFn IS NOT QUEUED.
  useEffect(getEmployee, []);

  // const film = props.film
  // const { film } = props

  /* Props --> "Properties of our component"

  There are a couple ways of accessing prop values. All are valid and you'll find different
  examples of these online & in future jobs.
  1. Props as a param (MovieCard = props => {}). Any reference of inner value would be with props.key 
  2. create const with key/value pair in props: const film = props.film
  3. use object destructuring to create const of key/value pair: const { film } = props
  NOTE ^^^ the name of the const needs to be the same name of key in props object
  4. use object destructuring in parameters: MovieCard = ({ film }) => {}
  */

  return (
    <div className="film-list">
      {/* Use dot notation to get key/value from film since it's an object*/}
      <h2>{employee.name}</h2>
    </div>
  );
};

export default Employee;
