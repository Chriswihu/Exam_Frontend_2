import React, {useEffect, useState} from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";
import * as rentals from "react-bootstrap/ElementChildren";

const Admin = () => {
    const [rentals, setRentals] = useState([]);

    const [dataFromServer, setDataFromServer] = useState("Waiting...");

    useEffect(() => {
        facade.fetchRentals().then((res) => {
            if (res) {
                setRentals(res);
                console.log(res)
            }
            setDataFromServer(res.msg);
        });
    }, []);

    return (
        <div>
            <br></br>
            <h1>Rentals in Database</h1>
            <h3>{dataFromServer}</h3>

            {rentals.map((item) => {
                return (
                    <>
                        <br/>
                        <Table className="table table-info" bordered hover>
                            <thead>
                            <tr>
                                <th style={{width: "8%"}}>Start Date</th>
                                <th style={{width: "8%"}}>End Date</th>
                                <th style={{width: "9%"}}>Price Annual</th>
                                <th style={{width: "9%"}}>Deposit</th>
                                <th style={{width: "44%"}}>Contact Person</th>
                                <th style={{width: "9%"}}>Edit Rental</th>
                                <th style={{width: "9%"}}>Delete Rental</th>
                            </tr>
                            </thead>
                            <tbody key={item.id}>
                            <tr>
                                <td>{item.startDate}</td>
                                <td>{item.endDate}</td>
                                <td>{item.priceAnnual}</td>
                                <td>{item.deposit}</td>
                                <td>{item.contactPerson}</td>
                                <td>
                                    <Button
                                        onClick={() => {
                                            facade.editRental(item.id, newRental);
                                        }}
                                    >
                                        Edit Rental
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        onClick={() => {
                                            facade.deleteRental(item.id);
                                        }}
                                    >
                                        Delete Rental
                                    </Button>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </>
                );
            })}
        </div>
    );
}

export default Admin;


