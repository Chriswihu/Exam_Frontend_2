import facade from "../../apiFacade.js";
import {useEffect, useState} from "react";
import "./create.css"

function CreateUser() {

    const [user, setUser] = useState([]);
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

    useEffect(() => {
        setUser({
            name: name,
            password: password,
            role: role
        })
    }, [name, password, role]);


    return (
        <div className="createForm">
            <h1>Create User</h1>
            <div className="form-body">
                <form className="form__label" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            className="form__input"
                            name="name"
                            type="text"
                            value={user.name}
                            onChange={handleName}
                            placeholder="User Name"
                        />
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input
                            className="form__input"
                            name="password"
                            type="text"
                            value={user.password}
                            onChange={handlePassword}
                            placeholder="User Password"
                        />
                    </label>
                    <br/>
                    <label>
                        Role:
                        <input
                            className="form__input"
                            name="role"
                            type="text"
                            value={user.role}
                            onChange={handleRole}
                            placeholder="User Role"
                        />
                    </label>
                    <br/>
                    <input className="form__submit" type="submit" value="Submit"/>
                </form>

            </div>
        </div>
    )
}

export default CreateUser;