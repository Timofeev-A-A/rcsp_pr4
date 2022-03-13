import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Dialogs from "../components/Dialogs";
import "../App.css";
import Dialog1 from "../components/Dialog1";
import Dialog2 from "../components/Dialog2";
import Dialog3 from "../components/Dialog3";

function Routess() {
    return (
        <Routes>
            <Route path="/" element={<Dialogs />} />
            <Route path="/dialogs/1" element={<Dialog1 />} />
            <Route path="/dialogs/2" element={<Dialog2 />} />
            <Route path="/dialogs/3" element={<Dialog3 />} />
        </Routes>
    )
}
export default Routess;