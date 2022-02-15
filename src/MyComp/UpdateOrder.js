import React from 'react';
import { useState } from "react";
import UserService from "../services/user.service";

export default function UpdateOrder() {

    const [oderID, setOderID] = useState("")
    const [showDiv, setShowDiv] = useState(true)
    const [content, setContent] = useState("");
    const [name, setName] = useState("")
    const [food_name, setFoodName] = useState("")
    const [money, setMoney] = useState("")
    // let postObj = { customer_name: name, customer_order: food_name, bill_amount: money }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (oderID === "") {
            alert(`Please enter Order Id !!`)
            setShowDiv(true)
        } else {
            UserService.getSingleOrder(oderID).then((response) => {
                setContent(response.data)
            }, (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                setContent(_content);
            }
            );
        }

    }
    const handleSubmit1 = (event) => {
        event.preventDefault()
        // alert(`the name entered and food and Bill : ${name} ${food_name} ${money}`)
        if (name === "" && food_name === "" & money === "") {
          alert(`Please enter the values.`)
        } else if (name !== ""){
            let postObj = {customer_name: name}
          console.log(postObj)
          UserService.patchTheOrder(oderID,postObj).then(window.location.reload(false))
        } else if (food_name !== ""){
            let postObj = {customer_order: food_name}
          console.log(postObj)
          UserService.patchTheOrder(oderID,postObj).then(window.location.reload(false))
        } else if (money !== ""){
            let postObj = {bill_amount: money}
          console.log(postObj)
          UserService.patchTheOrder(oderID,postObj).then(window.location.reload(false))
        }
      }
    const clicked = () => setShowDiv(false)

    return <><div>
        <h3>Update The Order</h3>
        <form onSubmit={handleSubmit}>
            <label>
                Enter your OrderID : <input type="text" value={oderID} onChange={(e) => setOderID(e.target.value)} />
            </label>
            <input type="submit" onClick={clicked} />
        </form>
    </div>
        <div hidden={showDiv}>
            <form onSubmit={handleSubmit1}>
                <label>
                    customer_name : <input type="text"  defaultValue={content.customer_name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    customer_order : <input type="text" defaultValue={content.customer_order} onChange={(e1) => setFoodName(e1.target.value)} />
                </label>
                <label>
                    bill_amount : <input type="text" defaultValue={content.bill_amount} onChange={(e2) => setMoney(e2.target.value)} />
                </label>
                <input type="submit" />
            </form>
        </div>
    </>
};
