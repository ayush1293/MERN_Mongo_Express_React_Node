import React from 'react';
import { useState } from "react";
import UserService from "../services/user.service";

export default function UpdateOrder() {

    const [oderID, setOderID] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        if (oderID === "") {
            alert(`Please enter Order Id !!`)
        } else {
            UserService.deleteOrder(oderID).then(window.location.reload(false))}}

    return <div>
        <h3>Delete The Order</h3>
        <form onSubmit={handleSubmit}>
            <label>
                Enter your OrderID : <input type="text" value={oderID} onChange={(e) => setOderID(e.target.value)} />
            </label>
            <input type="submit" />
        </form>
    </div>
};