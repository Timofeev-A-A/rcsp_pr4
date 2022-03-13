import * as React from "react";
import "../App.css";
import DialogItem from "./DialogItem";


function Dialogs(props) {
    return (
        <>
        <p>
            Check these dialogs of yours
        </p>
        <div>
            <DialogItem name="Phil" id="1" />
            <DialogItem name="Dragon" id="2" />
            <DialogItem name="Puton" id="3" />
        </div>
        </>
    )
}

export default Dialogs;
