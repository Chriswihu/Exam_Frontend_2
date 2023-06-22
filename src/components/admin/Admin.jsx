import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";
import {Container} from "react-bootstrap";
import CreateFestival from "../createPages/CreateFestival.jsx";
import CreateMovie from "../createPages/CreateMovie.jsx";
import CreateUser from "../createPages/CreateUser.jsx";
import "./admin.css"

function Admin() {
    // const [user, setUser] = useState({});
    //
    // useEffect(() => {
    //     facade.readJwtToken().then((res) => {
    //         if (res) {
    //             setUser(res);
    //         }
    //     }
    //     )
    // }, []);

    return (
        <div>
            <h1>Welcome to the Admin Page, {facade.readJwtToken(facade.getToken()).username}</h1>
            <div className="container">

                <br></br>
                <div className="card">
                    <h2>Do you want to Create a Movie, Festival or User?</h2>
                    <Button href="/admin/create" className={"btn btn-success"}>Create</Button>
                    <br/>

                    <h2>Do you want to update or delete a Movie?</h2>
                    <br/>
                    <Button href="/admin/movies" className={"btn btn-success"}>Movies</Button>
                    <br/>
                    <h2>Do you want to update or delete a Festivals?</h2>
                    <br/>
                    <Button href="/admin/festivals" className={"btn btn-success"}>Festivals</Button>
                    <br/>
                    {/*<h2>Do you want to see all Users?</h2>*/}
                    {/*<br/>*/}
                    {/*<Button href="/admin/users" className={"btn btn-success"}>Users</Button>*/}
                    {/*<br/>*/}
                </div>


                {/*<div className="create_container">*/}
                {/*    <CreateFestival/>*/}
                {/*    <CreateMovie/>*/}
                {/*    <CreateUser/>*/}
                {/*</div>*/}
            </div>
        </div>
    )

}

export default Admin;