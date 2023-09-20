import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import sign_reco from "../../Assets/sign_reco.jpeg"
import emailclient from "../../Assets/emailClient.jpeg"
import chatapp from "../../Assets/ChatApp.webp"
import bankapp from "../../Assets/bankapp.avif"
import LMS from "../../Assets/LMS.png"



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
              ghLink="#"
              demoLink="#"
              text= "Python, TensorFlow"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emailclient}
              isBlog={false}
              title="Email Client"
              description="A simple CLI tool to send emails.Main functionalities are sending emails and keep track on receive and sent emails in addition you can send birthday wishes to your contacts via a email.This is semester 2 project which was focused on OOP concepts"
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
              description="Bank and loan processing application which was a group project in semester 3. I was mainly involved in backend and database and some minor part in the frontend.This is a conventional bank app with basic functionalities with the capability of applying online loans"
              ghLink="https://github.com/EshSub/S3_DBMS_project"
              demoLink="#"
              tech= "React, Node, Express, MySQL"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Chat Application"
              description="A Simple Chat application I am currently working on to learn firebase. I am hoping to Integrate a chat bot and voice recognition model as well"
              ghLink="https://github.com/ChamilG/Chatter"
              demoLink="#"
              tech= "React, Firebsae"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LMS}
              isBlog={false}
              title="BOOK LIST"
              description="A Library System management application which have the functionalities of rating the books, check the borrowings of the user. In addition I am trying to integrate this with a chat bot develop wih RASA model so that the user can interact with the chat bot to clarify about the app and books available"
              ghLink="https://github.com/ChamilG/LMS"
              demoLink="#"
              tech = "Python, Django"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
