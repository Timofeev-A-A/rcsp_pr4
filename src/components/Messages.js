import * as React from "react";
import "../App.css";
import MessageItem from "./MessageItem";

function Messages(props) {
    var str;
    props.msgs.forEach(function(item) {
        str += <MessageItem msg={item} />.toString();
    })
    return str;
}

export default Messages;