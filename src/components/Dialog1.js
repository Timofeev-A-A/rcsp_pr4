import * as React from "react";
import "../App.css";
import MessageItem from "./MessageItem";

function Dialog1() {

    var arr = [{name: "Phil",text: "Hi"},{name: "You",text: "Oh, hi!"},{name: "Phil",text: "I'm busy"},{name: "You",text: "TF?"}];
    return (
        <table className="App-table">
            <caption className="Left">Диалог с Phil</caption>
            <tbody>
            <MessageItem msg={arr[0]}/>
            <MessageItem msg={arr[1]}/>
            <MessageItem msg={arr[2]}/>
            <MessageItem msg={arr[3]}/>
            </tbody>
        </table>
    )
}

export default Dialog1;