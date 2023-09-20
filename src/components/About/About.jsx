import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import coding from "../../Assets/codinganimation.gif"
import AboutCard from "./AboutCard"
import SkillSet from "./SkillSet"

function About() {
  return (
    <Container fluid className='about-section' >
      <Container>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={7} style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>Know who <strong className='yellow'>I am </strong></h1>
                <AboutCard/>
            </Col>
            <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img">
                <img width={300} src={coding} alt='about'></img>
            </Col>
        </Row>
        <h1>Here is my <strong className='yellow'> Skill </strong> Set</h1>
        <SkillSet/>
      
      </Container>
    </Container >
  )
}

export default About;
