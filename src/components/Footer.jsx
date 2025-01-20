import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="text-center">
        <Col>
          <div className="social-links" style={{ fontSize: "1.5rem" }}>
            <a
              href="https://web.facebook.com/chamilnethmina"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", margin: "0 10px" }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/chamilnethmina/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", margin: "0 10px" }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/ChamilG"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", margin: "0 10px" }}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/chamil-gamage/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", margin: "0 10px" }}
            >
              <FaLinkedin />
            </a>
          </div>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <h5>Copyright © {year} CN | All rights reserved</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
