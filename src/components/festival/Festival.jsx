import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";
import {Container} from "react-bootstrap";

const Festivals = () => {

    const [festivals, setFestivals] = useState([]);

    useEffect(() => {
        facade.fetchFestivals().then((res) => {
            if (res) {
                setFestivals(res);
                // console.log(res);
            }
        });
    }, []);
    console.log(festivals + "festivals");

    return (
        <div>
            <br></br>
            <h1>Festivals fetched from Database</h1>

            {festivals.map((item) => {
                    return (
                        <>
                            <Table className="table table-info" bordered hover>
                                <thead>
                                <tr>
                                    <th style={{width: "5%"}}>Festival ID</th>
                                    <th style={{width: "15%"}}>Name</th>
                                    <th style={{width: "15%"}}>City</th>
                                    <th style={{width: "15%"}}>Date</th>
                                    <th style={{width: "15%"}}>Duration</th>
                                    <th style={{width: "15%"}}>Buy Ticket</th>
                                    {/*<th style={{width: "15%"}}></th>*/}
                                </tr>
                                </thead>
                                <tbody key={item.id}>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.city}</td>
                                    <td>{item.startDate}</td>
                                    <td>{item.duration}</td>
                                    <td>
                                        <Button
                                            className={"btn btn-success"}
                                            // onClick={() => {
                                            //     facade.addMovie(item.id);}}
                                        >
                                            Buy Ticket
                                        </Button>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </>
                    )
                }
            )}

        </div>
    )


}

export default Festivals;