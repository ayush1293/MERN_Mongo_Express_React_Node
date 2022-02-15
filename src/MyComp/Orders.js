import React from 'react';
import { useState } from "react";
import UserService from "../services/user.service";

export default function Orders(props) {
const [name, setName] = useState("")
const [food_name, setFoodName] = useState("")
const [money, setMoney] = useState("")
let postObj = {customer_name:name,customer_order:food_name,bill_amount:money}
const handleSubmit = (event) => {
  event.preventDefault()
  // alert(`the name entered and food and Bill : ${name} ${food_name} ${money}`)
  if (name === "" || food_name === "" || money === "") {
    alert(`Please enter the values.`)
  } else {
    console.log(postObj)
    UserService.postTheOrder(postObj).then(window.location.reload(false))
  }
}

  return <div className='selectOrder'>
    <h3>Order Your Food</h3>
    {/* {props.orders.map((order) => (
      <><p>{order.Customer_name}<br />{order.Order_food}<br />{order.Bill_amount}</p></>))} */}
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name : <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
          Enter your Food : <input type="text" value={food_name} onChange={(e1) => setFoodName(e1.target.value)}/>
        </label>
        <label>
          Bill : <input type="text" value={money} onChange={(e2) => setMoney(e2.target.value)}/>
        </label>
        <input type="submit"/>
      </form>
    </div>
};
