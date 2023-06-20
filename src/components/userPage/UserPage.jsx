import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";
import * as userData from "react-bootstrap/ElementChildren";

function UserPage({user}) {

    const [userData, setUserData] = useState([]);
    // const [user, setUser] = useState("");

    useEffect(() => {
        user=(facade.readJwtToken(facade.getToken()).username);

    }, []);


    useEffect(() => {
        if (user !== "") {
            fetchAssignments(user);

        }
    }, []);


    const fetchAssignments = (user) => {
        facade.fetchUserAssignments(user)
            .then((res) => {
                setUserData(res);
            })
            .catch((err) => {
                console.log("Error fetching assignments", err);
            });
    };


    return (
        <div>
            <br></br>
            <h1>Events fetched from Database</h1>
            <h3>Hello, {facade.readJwtToken(facade.getToken()).username}</h3>
            {userData.map((item) => {
                    return (
                        <div>
                            <Table className="table table-info" bordered hover>
                                <thead>
                                <tr>
                                    <th style={{width: "20%"}}>Event Dish</th>
                                    <th style={{width: "20%"}}>Event Location</th>
                                    <th style={{width: "20%"}}>Event Time</th>
                                    <th style={{width: "20%"}}>Event Price</th>
                                </tr>
                                </thead>
                                <tbody key={item.dish}>
                                <tr>
                                    <td>{item.dish}</td>
                                    <td>{item.location}</td>
                                    <td>{item.time}</td>
                                    <td>{item.price}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    )
                }
            )}
        </div>
    )

}

export default UserPage;