import React, {useEffect, useState} from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";

const Admin_User = () => {

    const [Users, setUsers] = useState([]);

    const [dataFromServer, setDataFromServer] = useState("Waiting...");

    useEffect(() => {
        facade.fetchUser().then((res) => {
            if (res) {
                setUsers(res);
                console.log(res)
            }
        });
    }, []);

    const fetchData = async () => {
        const res = await facade.fetchUser();
        console.log(res);
        const JsonData = await res.json();

        setUsers(JsonData);
    }

    return (
        <div>
            <br></br>
            <h1>Users in Database</h1>
            <h3>{Users}</h3>

            <table>
                <thead>
                <tr>
                    <th style={{width: "8%"}}>Username</th>
                    <th style={{width: "8%"}}>Password</th>
                    <th style={{width: "9%"}}>Role</th>
                    <th style={{width: "9%"}}>Edit User</th>
                </tr>
                </thead>
                <tbody>
                {Users.map((item) => {
                        return (
                            <tr>
                                <td>{item.username}</td>
                                <td>{item.password}</td>
                                <td>{item.role}</td>
                                <td><Button className="btn btn-primary">Edit User</Button></td>
                            </tr>
                        );
                    }
                )}
                </tbody>
            </table>
        </div>
    );


}

export default Admin_User;