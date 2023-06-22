import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";
import {Container} from "react-bootstrap";
import CreateFestival from "../createPages/CreateFestival.jsx";
import CreateMovie from "../createPages/CreateMovie.jsx";
import CreateUser from "../createPages/CreateUser.jsx";
import "./admin.css"

function AdminCreate() {

    return (
        <div>
            <h1>Admin Create Page</h1>
            <br></br>
            <div className="container">
                <h2>Want to Return to Admin Page?</h2>
                <Button href="/admin" className={"btn btn-success"}>Admin</Button>
                <br></br>
                <div className="create_container">
                    <CreateFestival/>
                    <CreateMovie/>
                    <CreateUser/>
                </div>
            </div>
        </div>
    )

}

export default AdminCreate;