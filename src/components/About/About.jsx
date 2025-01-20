import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import coding from "../../Assets/codinganimation.gif";
import AboutCard from "./AboutCard";
import SkillSet from "./SkillSet";
import { AiOutlineDownload } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";

import pdf from "../../Assets/../Assets/ChamilGamageCV.pdf";

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
            <h1>
              Know who <strong className="yellow">I am </strong>
            </h1>
            <AboutCard />
            <Row
              style={{
                justifyContent: "left",
                position: "relative",
                paddingLeft: "10px",
              }}
            >
              <Button
                variant="warning"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <TiDocumentText />
                Download CV
              </Button>
            </Row>
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
