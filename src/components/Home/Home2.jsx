import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/mypic.png";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="yellow"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            I am currently studies in Computer Science and Engineering
            Department in University of Moratuwa
            <br />I am fluent in classics like
            <i>
              <b className="yellow"> Python, Javascript and Java. </b>
            </i>
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b className="yellow">Web Technologies and Products </b> and also
              in areas related to <b className="yellow">Machine Learning.</b>
            </i>
            <br />
            Whenever possible, I also apply my passion for developing products
            with <b className="yellow">Node.js</b> and
            <i>
              <b className="yellow">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b className="yellow"> React.js and React Native</b>
            </i>
          </p>
        </Col>
        <Col md={4} className="home-about-description">
          <Tilt>
            <img
              src={myImg}
              className="img-fluid"
              alt="avatar"
              style={{ position: "relative" }}
            />
          </Tilt>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/ChamilG"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://web.facebook.com/chamilnethmina"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/chamil-gamage/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/chamilnethmina/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;
