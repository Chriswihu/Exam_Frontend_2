import React, {useEffect, useState} from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";

const Admin_User = () => {

    const [users, setUsers] = useState([]);

    const [dataFromServer, setDataFromServer] = useState("Waiting...");

    useEffect(() => {
        facade.fetchUser().then((res) => {
            if (res) {
                setUsers(res);
                console.log(res)
            }
            setDataFromServer(res.msg)
        });
    }, []);


    return (
        <div>
            <br></br>
            <h1>Users in Database</h1>
            <h3>{dataFromServer}</h3>

            {users.map((item) => {
                return (
                        <>
                            <br/>
                            <Table className="table table-info" bordered hover>
                                <thead>
                                <tr>
                                    <th style={{width: "8%"}}>Username</th>
                                    <th style={{width: "8%"}}>Password</th>
                                    <th style={{width: "9%"}}>Role</th>
                                    <th style={{width: "9%"}}>Edit User</th>
                                </tr>
                                </thead>
                                <tbody key={item.id}>
                                <tr>
                                    <td>{item.username}</td>
                                    <td>{item.password}</td>
                                    <td>{item.role}</td>
                                    <td><Button className="btn btn-primary">Edit User</Button></td>
                                </tr>
                                </tbody>
                            </Table>

                        </>

                    );
                }
            )}

        </div>
    );


}

export default Admin_User;