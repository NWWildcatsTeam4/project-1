import React
// , { useContext ,useState } 
from "react";
// import UserContext from "../utils/UserContext";
import { Row, Container } from "../Header";
import Navbar from "../Navbar";
// import Moment from 'react-moment';
import Header from "../Header";


function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size} {...props} />;
}

export default Col;