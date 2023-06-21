import facade from "../../apiFacade.js";
import {useEffect, useState} from "react";
import "./create.css"

function CreateMovie() {

    // const [movie, setMovie] = useState({
    //     name: "",
    //     duration: "",
    //     city: "",
    //     location: "",
    //     startDate: "",
    //     startTime: "",
    // });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(movie);
        facade.createMovie(movie).then(r => console.log(r));
    };

    const [movie, setMovie] = useState([]);

    const [name, setName] = useState("");
    const handleName = (event) => {
        setName(event.target.value);
    }

    const [duration, setDuration] = useState("");
    const handleDuration = (event) => {
        setDuration(event.target.value);
    }

    const [location, setLocation] = useState("");
    const handleLocation = (event) => {
        setLocation(event.target.value);
    }

    const [startDate, setStartDate] = useState("");
    const handleStartDate = (event) => {
        setStartDate(event.target.value);
    }

    const [startTime, setStartTime] = useState("");
    const handleStartTime = (event) => {
        setStartTime(event.target.value);
    }

    useEffect(() => {
        setMovie({
            name: name,
            duration: duration,
            location: location,
            startDate: startDate,
            startTime: startTime
        })
    }, [name, duration, location, startDate, startTime]);

    // const handleChange = (event) => {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //     setMovie({
    //         ...movie,
    //         [name]: value,
    //     });
    //
    //
    // };


    return (
        <div className="createForm">

            <h1>Create Movie</h1>
            <div className="form-body">
                <form className="form__label" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            className="form__input"
                            name="name"
                            type="text"
                            value={movie.name}
                            onChange={handleName}
                            placeholder="Movie Name"
                        />
                    </label>
                    <br/>
                    <label>
                        Duration:
                        <input
                            className="form__input"
                            name="duration"
                            type="text"
                            value={movie.duration}
                            onChange={handleDuration}
                            placeholder="Movie Duration"
                        />
                    </label>
                    <br/>
                    <label>
                        Location:
                        <input
                            className="form__input"
                            name="location"
                            type="text"
                            value={movie.location}
                            onChange={handleLocation}
                            placeholder="location"
                        />
                    </label>
                    <br/>
                    <label>
                        Start Date:
                        <input
                            className="form__input"
                            name="startDate"
                            type="text"
                            value={movie.startDate}
                            onChange={handleStartDate}
                            placeholder="Start Date"
                        />
                    </label>
                    <br/>
                    <label>
                        Start Time:
                        <input
                            className="form__input"
                            name="startTime"
                            type="text"
                            value={movie.startTime}
                            onChange={handleStartTime}
                            placeholder="Start Time"
                        />
                    </label>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>

            </div>
        </div>
    )
}

export default CreateMovie;