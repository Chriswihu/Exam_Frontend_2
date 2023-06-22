import React, {useState, useEffect, Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from "./components/loginform/LoginForm.jsx";
import Home from "./components/home/Home.jsx";
import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import apiFacade from "./apiFacade";
import Library from "./components/library/Library.jsx";
import Contact from "./components/contact/Contact.jsx";
import Registration from "./components/registration/registration";
import UserPage from "./components/userPage/UserPage.jsx";
import Admin from "./components/admin/Admin.jsx";
import Movies from "./components/movies/Movies.jsx";
import Festivals from "./components/festival/Festival.jsx";
import AdminCreate from "./components/admin/AdminCreate.jsx";


function App() {
    const [loggedIn, setLoggedIn] = useState(apiFacade.loggedIn());
    const [user, setUser] = useState({username: "", roles: ""});

    // useEffect(() => {
    //     const token = apiFacade.getToken();
    //     if (!token) {
    //         return false;
    //     }
    // })

    return (
        <div>

            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>
            <BrowserRouter>
                <Routes>
                    {/*TODO opdater routes til at matche Eksamen*/}
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path="/festivals" element={<Festivals/>}/>
                    <Route path="/user" element={<UserPage/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/admin/create" element={<AdminCreate/>}/>
                    {/*<Route path="/admin/movies" element={<AdminMovies/>}/>*/}
                    {/*<Route path="/admin/festivals" element={<AdminFestivals/>}/>*/}
                    {/*<Route path="/admin/users" element={<AdminUser/>}/>*/}
                    {/*<Route path="/library" element={<Library/>}/>*/}
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login"
                           element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user}
                                           setUser={setUser}/>}/>

                </Routes>
            </BrowserRouter>

            {/*<Home/>*/}
            {/*<About/>*/}


        </div>
    )
}

export default App;