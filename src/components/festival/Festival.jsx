import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";
import {Container} from "react-bootstrap";

const Festivals = () => {

    // const [tableData, setTableData] = useState([]);
    //
    // useEffect(() => {
    //     facade.fetchEvents().then((res) => {
    //         if (res) {
    //             setTableData(res);
    //             console.log(res);
    //         }
    //     });
    // }, []);
    // console.log(tableData + "tableData");

    return (
        <div>
            <br></br>
            <h1>Festivals fetched from Database</h1>
            {/*/!*<h3>{tableData}</h3>*!/*/}
            {/*{tableData.map((item) => {*/}
            {/*    return (*/}
            {/*        <>*/}
            {/*            <Table className="table table-info" bordered hover>*/}
            {/*                <thead>*/}
            {/*                <tr>*/}
            {/*                    <th style={{width: "15%"}}>Event Dish</th>*/}
            {/*                    <th style={{width: "15%"}}>Event Location</th>*/}
            {/*                    <th style={{width: "15%"}}>Event Time</th>*/}
            {/*                    <th style={{width: "15%"}}>Event Price</th>*/}
            {/*                    <th style={{width: "10%"}}>Assign</th>*/}
            {/*                </tr>*/}
            {/*                </thead>*/}
            {/*                <tbody key={item.dish}>*/}
            {/*                <tr>*/}
            {/*                    <td>{item.dish}</td>*/}
            {/*                    <td>{item.location}</td>*/}
            {/*                    <td>{item.time}</td>*/}
            {/*                    <td>{item.price}</td>*/}
            {/*                    <td>*/}
            {/*                        <Button*/}
            {/*                            className={"btn btn-success"}*/}
            {/*                            onClick={() => {*/}
            {/*                                facade.assignEvent(item.id);}}>*/}
            {/*                            Assign User*/}
            {/*                        </Button>*/}
            {/*                    </td>*/}
            {/*                </tr>*/}
            {/*                </tbody>*/}
            {/*            </Table>*/}
            {/*        </>*/}
            {/*    )*/}
            {/*})}*/}
        </div>
    )


}

export default Festivals;