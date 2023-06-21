import facade from "../../apiFacade.js";
import {useState} from "react";

function CreateUser() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        facade.createUser(user).then(r => console.log(r));
    }

    const [name, setName] = useState("");
    const handleName = (event) => {
        setName(event.target.value);
    }

    const [password, setPassword] = useState("");
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const [role, setRole] = useState("");
    const handleRole = (event) => {
        setRole(event.target.value);
    }


    return (
        <div>
            <h1>Create User</h1>
        </div>
    )
}