import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import coding from "../../Assets/coding.png"
import AboutCard from "./AboutCard"
import SkillSet from "./SkillSet"

function About() {
  return (
    <Container fluid className='about-section' >
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={7} style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}>
                <h1>Know who <strong className='yellow'>I am </strong></h1>
                <AboutCard/>
            </Col>
            <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img">
                <img src={coding} alt='about'></img>
            </Col>
        </Row>
        <h1>Here is my <strong className='yellow'> skill set </strong> set</h1>
        <SkillSet/>
      
    </Container >
  )
}

export default About
