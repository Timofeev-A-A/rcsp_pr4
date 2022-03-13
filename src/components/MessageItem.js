import * as React from "react";
import "../App.css";

function MessageItem(props) {
    return (
        <tr><td className="App-listname">{props.msg.name}</td><td className="App-listext">{props.msg.text}</td></tr>
    )
}
export default MessageItem;