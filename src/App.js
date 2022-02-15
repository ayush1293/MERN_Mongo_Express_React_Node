// import logo from './logo.svg';
import './App.css';
import Header from "./MyComp/Header";       //default export
import {Footer} from "./MyComp/Footer";     //Named export
import Orders from "./MyComp/Orders";
import UpdateOrder from "./MyComp/UpdateOrder";
import DeleteOrders from "./MyComp/DeleteOrders";
import UserService from "./services/user.service";
import React, { useState, useEffect } from "react"; 


function App() {

//Setting states
const [content, setContent] = useState("");
  useEffect(() => {
  UserService.getPublicContent().then((response) => {
    setContent(response.data);
  },(error) => {
    const _content =
      (error.response && error.response.data) ||
      error.message ||
      error.toString();
    setContent(_content);
  }
);}, []);


return (
    <>
      <Header title="My Order app" searchBar={true} />
      <Orders />
      <UpdateOrder />
      <DeleteOrders />
      {/* <h3>{console.log(Object.entries(content).map(data => data[1].customer_name))}</h3> */}
      <div>
      <h3>Today's Order</h3>
      <tbody >
        <tr>
          <th>customer_name&nbsp;&nbsp;&nbsp;</th>
          <th>customer_order&nbsp;&nbsp;</th>
          <th>bill_amount&nbsp;&nbsp;</th>
          <th>Order_id</th>
        </tr>
        <tr>
          <td>
          {Object.entries(content).map(data => <>{data[1].customer_name}<br/></>)}
          </td>
          <td>
          {Object.entries(content).map(data => <>&nbsp;&nbsp;{data[1].customer_order}<br/></>)}
          </td>
          <td>
          {Object.entries(content).map(data => <>{data[1].bill_amount}<br/></>)}
          </td>
          <td>
          {Object.entries(content).map(data => <>{data[1]._id}<br/></>)}
          </td>
        </tr>
      </tbody>
      </div>
      <Footer />
    </>
  );
}

export default App;
