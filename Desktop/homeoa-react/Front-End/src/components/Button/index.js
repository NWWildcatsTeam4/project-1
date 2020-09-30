import React
// , { useContext ,useState } 
from "react";
// import UserContext from "../utils/UserContext";
import { Row, Container } from "../Header";
import Col from "../Col";
import Navbar from "../Navbar";
// import Moment from 'react-moment';
import Header from "../Header";



export default function button () {
    const history = useHistory();
    function handleClick() {
        history.push("/signup");
    }
    return (
        <button 
        className="btn" 
        onClick={handleClick} >
           <p className="btn-login" > My Profile </p>
        </button>
    );
}

export function aboutUsBtn () {
    const history = useHistory();
    function handleClick() {
        history.push("/aboutus");
    }
    return (
        <button 
        className="btn" 
        onClick={handleClick} >
           <p className="btn-login" > My Profile </p>
        </button>
    );
}


export function contactUsBtn () {
    const history = useHistory();
    function handleClick() {
        history.push("");
    }
    return (
        <button 
        className="btn" 
        onClick={handleClick} >
           <p className="btn-login" > My Profile </p>
        </button>
    );
}

export function guideLinesBtn () {
    const history = useHistory();
    function handleClick() {
        history.push("/signup");
    }
    return (
        <button 
        className="btn" 
        onClick={handleClick} >
           <p className="btn-login" > My Profile </p>
        </button>
    );
}

// function homepageBtn () {

// }

export function newsBtn () {
    const history = useHistory();
    function handleClick() {
        history.push("/signup");
    }
    return (
        <button 
        className="btn" 
        onClick={handleClick} >
           <p className="btn-login" > My Profile </p>
        </button>
    );

}

export function profileBtn () {
    const history = useHistory();
    function handleClick() {
        history.push("/signup");
    }
    return (
        <button 
        className="btn" 
        onClick={handleClick} >
           <p className="btn-login" > My Profile </p>
        </button>
    );
}

export function signUpBtn () {
    const history = useHistory();
    function handleClick() {
        history.push("/signup");
    }
    return (
        <button 
        className="btn" 
        onClick={handleClick} >
           <p className="btn-login" > My Profile </p>
        </button>
    );
}
