import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import sign_reco from "../../Assets/sign_reco.jpeg";
import emailclient from "../../Assets/emailClient.jpeg";
import chatapp from "../../Assets/ChatApp.webp";
import bankapp from "../../Assets/bankapp.avif";
import LMS from "../../Assets/LMS.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <div className="heading-section">
        <h1 className="big">Projects</h1>
        <h2 className="mb-4">Projects</h2>
      </div>
      <Container>
        <div className="project-cotent">
          <Row
            style={{
              justifyContent: "center",
              paddingBottom: "10px",
            }}
          >
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={sign_reco}
                isBlog={false}
                title="Sign Recognition"
                description="A computer vision app build by a CNN model in python to recognize ASL alphabet. "
                ghLink="#"
                demoLink="#"
                tech="Python, TensorFlow"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={emailclient}
                isBlog={false}
                title="Email Client"
                description="A simple CLI tool to send emails."
                ghLink="https://github.com/ChamilG/Email-Client"
                demoLink="#"
                tech="Java, OOP, Design Patterns"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bankapp}
                isBlog={false}
                title="Bank Application"
                description="Bank and loan processing application"
                ghLink="https://github.com/EshSub/S3_DBMS_project"
                demoLink="#"
                tech="React, Node, Express, SQL"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatapp}
                isBlog={false}
                title="Chat Application"
                description="A Simple Chat application "
                ghLink="https://github.com/ChamilG/Chatter"
                demoLink="#"
                tech="React, Firebsae"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={LMS}
                isBlog={false}
                title="Cab Service"
                description="An online cab booking service for JCS"
                ghLink="https://github.com/ChamilG/LMS"
                demoLink="#"
                tech="Python,Django"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={LMS}
                isBlog={false}
                title="Multi Fixer"
                description="Multi line bug fixer for java applications"
                ghLink="https://github.com/ChamilG/LMS"
                demoLink="#"
                tech="CLM,Python,Understand api"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={LMS}
                isBlog={false}
                title="Assessment and Feedback System"
                description="For evaluation on student summaries"
                ghLink="https://github.com/dan-niles/student-summary-evaluator"
                demoLink="#"
                tech="LLM, NextJs, Django, Python"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
