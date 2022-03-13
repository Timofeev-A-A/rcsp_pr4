import * as React from "react";
import "../App.css";
import MessageItem from "./MessageItem";

function Dialog3() {

    var arr = [{name: "You",text: "Do you want to come with me to the West Indies?"},{name: "Puton",text: "The West Indies?"},{name: "You",text: "Yes, in Deez Nuts!"}];
    return (
        <table className="App-table">
            <caption className="Left">Диалог с Puton</caption>
            <tbody>
            <MessageItem msg={arr[0]}/>
            <MessageItem msg={arr[1]}/>
            <MessageItem msg={arr[2]}/>
            </tbody>
        </table>
    )
}

export default Dialog3;