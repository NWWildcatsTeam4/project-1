import React from "react";
import { Row, Container } from "../components/Grid";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
// import Moment from 'react-moment';
// import { useHistory } from "react-router-dom";


let HomePage = (props) => {
    return (
        <div>
            <Navbar />
            <div>
                <h1 style={{fontWeight:"bolder"}}>In prog</h1>
            </div>
        </div>
    )
}

export default HomePage;