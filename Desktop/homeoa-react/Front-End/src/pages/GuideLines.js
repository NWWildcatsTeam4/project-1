import React
// , { useContext ,useState } 
from "react";
// import UserContext from "../utils/UserContext";
import { Row, Container } from "../components/Grid";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
// import Moment from 'react-moment';
import Header from "../components/Header";
import { useHistory } from "react-router-dom";





export default function GuidLines () {



















    return(
        <div className="homepage-main-cont">
            <Header />
            <Container>
            <Row>
                <Col size="lg-12">
                <div className="aboutUsContent" style={{marginLeft:"5%", height: "470px", width: "90%", border: "solid black 1px", backgroundColor: "white", marginTop:"5%", marginBottom:"5%" }}>
                <p style={{ fontSize: "22px", padding:"2%" , fontFamily: 'Poppins sans-serif Quicksand sans-serif'}}>
              Coronavirus has impacted our world in many ways, one of which being the recent skyrocket in animal adoption rates.
              Shelters everywhere have been cleared by people looking for four-legged friends, and while staying home with them 24/7 was initially great, our pups are getting just as stir-crazy as we are.
              That’s where Canine Cupid comes in.
              </p>
              <p style={{ fontSize: "22px", padding: "2%" ,fontFamily: 'Karla sans-serif Poppins sans-serif Quicksand sans-serif'}} >
              Canine Cupid is the dog-matching app you and your pup have been waiting for.
              Just make an account outlining your dog’s likes, dislikes, and personality traits to match them with a friend that is just as special as they are.
              </p>
              <p style={{ fontSize: "22px", padding: "2%" , fontFamily: 'Karla sans-serif Poppins sans-serif Quicksand sans-serif' }}>
              Grab your mask, your pup’s leash and head out for a (socially-distanced) playdate!
              </p>
                </div>
                </Col>

            </Row>

            </Container>
            </div>
    )















}