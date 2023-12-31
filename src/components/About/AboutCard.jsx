import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { ImPointRight } from "react-icons/im";
import football from "../../Assets/football.jpg"

function AboutCard() {
const[clicked, setClicked] = useState(false);
const setOnClicked = () =>{
  if (clicked === false){ // there is bug in here need to click twice
    setClicked(true)
    console.log(clicked)
  }
  else{setClicked(false)}
}
  return (
    <Card className="quote-card-view">
        <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="yellow">Chamil Gamage </span>
            from <span className="purple"> Horana, Sri Lanka</span>
            <br /> I am an undergraduate student in University of Moratuwa.<br/> And I'm studying Data Science and Engineering stream <br/> under Computer Science and Engineering Department
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li style={{paddingBottom : "5px"}}>
                <ImPointRight/> Football
                <img src={football} alt="" className={clicked === false ?'about-image' : "about-image-move"} onClick={setOnClicked}/>
            </li>
            <li style={{paddingBottom : "5px"}}>
                <ImPointRight/> Singing
            </li>
            <li style={{paddingBottom : "5px"}}>
                <ImPointRight/> Playing Guitar
            </li>
            <li style={{paddingBottom : "5px"}}>
                <ImPointRight/> Reading
            </li>
            <li style={{paddingBottom : "5px"}}>
                <ImPointRight/> Travelling
            </li>
          </ul>
        </blockquote>
        
        </Card.Body>
    </Card>
  )
}

export default AboutCard
