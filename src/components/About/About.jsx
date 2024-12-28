import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import coding from "../../Assets/codinganimation.gif";
import AboutCard from "./AboutCard";
import SkillSet from "./SkillSet";

function About() {
  return (
    <section className="about-section">
      <div className="heading-section">
        <h1 className="big">About</h1>
        <h2 className="mb-4">About</h2>
      </div>

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            className="align-items-center justify-content-center"
          >
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img width={400} src={coding} alt="about"></img>
          </Col>
        </Row>
        <h1>
          Here is my <strong className="yellow"> Skill </strong> Set
        </h1>
        <SkillSet />
      </Container>
    </section>
  );
}

export default About;
