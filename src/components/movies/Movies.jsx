import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";
import {Container} from "react-bootstrap";
import loggedIn from "../loggedin/LoggedIn.jsx";

const Movies = () => {

    const [tableData, setTableData] = useState([]);
    // const isAdmin = facade.loggedIn() && facade.readJwtToken().roles.includes("admin");

    const [userMovies, setUserMovie] = useState([]);

    useEffect(() => {
        facade.fetchUserMovies().then((res) => {
            if (res) {
                setUserMovie(res);
                // console.log(res);
            }
        });
    }, []);

    useEffect(() => {
        facade.fetchMovies().then((res) => {
            if (res) {
                setTableData(res);
                // console.log(res);
            }
        });
    }, []);
    console.log(tableData + "tableData");


    return (
        <div>
            <br></br>
            <h1>Movies fetched from Database</h1>
            {/*<h3>{tableData}</h3>*/}
            {tableData.map((item) => {
                return (
                    <Table className="table table-info" bordered hover>
                        <thead>
                        <tr>
                            <th style={{width: "5%"}}>Movie ID</th>
                            <th style={{width: "15%"}}>Name</th>
                            <th style={{width: "15%"}}>Duration</th>
                            <th style={{width: "15%"}}>Location</th>
                            <th style={{width: "15%"}}>Date</th>
                            <th style={{width: "15%"}}>Time</th>
                            <th style={{width: "15%"}}>Buy Ticket</th>
                            {/*<th style={{width: "15%"}}>*/}
                            {/*    Delete Movie*/}
                            {/*</th>*/}


                        </tr>
                        </thead>
                        <tbody key={item.id}>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.duration}</td>
                            <td>{item.location}</td>
                            <td>{item.startDate}</td>
                            <td>{item.startTime}</td>
                            <td>
                                <Button
                                    className={"btn btn-success"}
                                    onClick={() => {
                                        facade.addMovieToUser(item.id);}}>
                                    Buy Ticket
                                </Button>
                            </td>
                            {/*<td>*/}
                            {/*    /!*{facade.loggedIn() && facade.readJwtToken().roles.includes("admin") &&*!/*/}
                            {/*    <Button*/}
                            {/*        className={"btn btn-danger"}*/}
                            {/*        onClick={() => {*/}
                            {/*            facade.deleteMovie(item.id).then(r => console.log(r));*/}
                            {/*        }*/}
                            {/*        }>*/}
                            {/*        Delete Movie*/}
                            {/*    </Button>*/}
                            {/*    /!*}*!/*/}
                            {/*</td>*/}
                        </tr>
                        </tbody>
                    </Table>
                )
            })}
        </div>
    )


}

export default Movies;