import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import sign_reco from "../../Assets/sign_reco.jpeg"
import emailclient from "../../Assets/emailClient.jpeg"
import bankApp from "../../Assets/bankapp.avif"
import LMS from "../../Assets/LMS.png"
import ChatApp from "../../Assets/ChatApp.webp"



function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>

      <h1 className="project-heading">
          My Recent <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sign_reco}
              isBlog={false}
              title="Sign Recognition (On going)"
              description="A computer vision app build by a CNN model in python to recognize ASL alphabet. I used the Kaggle's Sign Language MNIST dataset. I am hoping to develop this furthermore by adding new dataset and the model can identify gestures also"
              tech="Python, TensorFlow"
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emailclient}
              isBlog={false}
              title="Email Client"
              description="A simple CLI tool to send emails.Main functionalities are sending emails and keep track on receive and sent emails in addition you can send birthday wishes to your contacts via a email.This is semester 2 project which was focused on OOP concepts"
              tech="Java, OOP, Design Patterns"
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bankApp}
              isBlog={false}
              title="Bank Application"
              description="Bank and loan processing application which was a group project in semester 3. I was mainly involved in backend and database and some minor part in the frontend.This is a conventional bank app with basic functionalities with the capability of applying online loans"
              tech="React, Node, Express, MySQL"
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatApp}
              isBlog={false}
              title="Chat Application (On Going)"
              description="A Simple Chat application I am currently working on to learn firebase. I am hoping to Integrate a chat bot and voice recognition model as well"
              tech="React, Firebsae"
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LMS}
              isBlog={false}
              title="BOOK LIST (On Going)"
              description="A Library System management application which have the functionalities of rating the books, check the borrowings of the user. In addition I am trying to integrate this with a chat bot develop wih RASA model so that the user can interact with the chat bot to clarify about the app and books available"
              tech="Python, Django, RASA"
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
