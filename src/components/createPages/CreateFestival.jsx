import facade from "../../apiFacade.js";
import {useEffect, useState} from "react";
import "./create.css"

function CreateFestival() {

    // const [festival, setFestival] = useState({
    //     name: "",
    //     city: "",
    //     startDate: "",
    //     duration: ""
    //
    // });
    //
    // const handleChange = (event) => {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //     setFestival({
    //         ...festival,
    //         [name]: value,
    //     });
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(festival);
        facade.createFestival(festival).then(r => console.log(r));
    };

    const [festival, setFestival] = useState([]);

    const [name, setName] = useState("");
    const handleName = (event) => {
        setName(event.target.value);
    }

    const [city, setCity] = useState("");
    const handleCity = (event) => {
        setCity(event.target.value);
    }

    const [startDate, setStartDate] = useState("");
    const handleStartDate = (event) => {
        setStartDate(event.target.value);
    }

    const [duration, setDuration] = useState("");
    const handleDuration = (event) => {
        setDuration(event.target.value);
    }


    useEffect(() => {
        setFestival({
            name: name,
            city: city,
            startDate: startDate,
            duration: duration
        })
    }, [name, city, startDate, duration]);


    return (
        <div className="createForm">

            <h1>Create Festival</h1>
            <div className="form-body">
                <form className="form__label" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            className="form__input"
                            name="name"
                            type="text"
                            value={festival.name}
                            onChange={handleName}
                            placeholder="Festival Name"
                        />
                    </label>
                    <br/>
                    <label>
                        City:
                        <input
                            className="form__input"
                            name="city"
                            type="text"
                            value={festival.city}
                            onChange={handleCity}
                            placeholder="City"
                        />
                    </label>
                    <br/>
                    <label>
                        Start Date:
                        <input
                            className="form__input"
                            name="startDate"
                            type="text"
                            value={festival.startDate}
                            onChange={handleStartDate}
                            placeholder="Start Date"
                        />
                    </label>
                    <br/>
                    <label>
                        Duration:
                        <input
                            className="form__input"
                            name="duration"
                            type="text"
                            value={festival.duration}
                            onChange={handleDuration}
                            placeholder="Duration"
                        />
                    </label>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>

            </div>
        </div>
    )
}

export default CreateFestival