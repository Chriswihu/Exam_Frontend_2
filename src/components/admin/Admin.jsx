import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";
import {Container} from "react-bootstrap";
import CreateFestival from "../createPages/CreateFestival.jsx";
import CreateMovie from "../createPages/CreateMovie.jsx";
import "./admin.css"

function Admin() {

    return (
        <div>
            <div className="create_container">
                <CreateMovie/>
                <CreateFestival/>
            </div>
        </div>
    )

}

export default Admin;