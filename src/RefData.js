import { useEffect,useState } from "react";
import axios from "axios";


export default function RefData(){
  const [workorders, setWorkOrders] = useState([]);
  const getWorkOrders = () => {
    axios
      .get(`https://api.hatchways.io/assessment/work_orders`)
      .then((response) => {
        setWorkOrders(response.data.orders);
        console.log("called");
      })
      .catch((error) => console.log(error));
  };
  useEffect(getWorkOrders, []);

}


