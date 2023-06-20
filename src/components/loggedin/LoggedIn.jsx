import React, { useState,useEffect } from "react"
import facade from "../../apiFacade.js";
function LoggedIn({user}){

    // const [dataFromServer, setDataFromServer] = useState("Loading...")
    // useEffect(() => {
    //     if(facade.loggedIn()){
    //   const url = userPage.roles.split(',').includes('userPage') ? '/api/info/userPage' : '/api/info/admin';
    //   facade.fetchData(url).then(res => {
    //     console.log(res);
    //     setDataFromServer(res.msg)});
    //     }
    // },[])
  
    return (
      <div>
        <label>Hello, {facade.readJwtToken(facade.getToken()).username}</label>
        {/*<h4>{userPage.username} with roles: {userPage.roles}</h4>*/}
      </div>
    )
  }
export default LoggedIn;