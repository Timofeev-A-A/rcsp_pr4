import {Link} from "react-router-dom";
import * as React from "react";

function DialogItem(props) {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <Link className="App-link" to={path}>{props.name}</Link>
        </div>
    )
}
export default DialogItem;