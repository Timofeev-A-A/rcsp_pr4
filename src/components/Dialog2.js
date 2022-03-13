import * as React from "react";
import "../App.css";
import MessageItem from "./MessageItem";

function Dialog2() {

    var arr = [{name: "You",text: "How do you say “Yes, you look good” in Spanish?"},{name: "Dragon",text: "Si…"},{name: "You",text: "See Deez Nuts!"}];
    return (
        <table className="App-table">
            <caption className="Left">Диалог с Dragon</caption>
            <tbody>
            <MessageItem msg={arr[0]}/>
            <MessageItem msg={arr[1]}/>
            <MessageItem msg={arr[2]}/>
            </tbody>
        </table>
    )
}

export default Dialog2;