import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HomeAnimation from "./HomeAnimation";
import me from "../../Assets/1696069027241.jpeg";
import Type from "./Type";
import Home2 from "./Home2";
import { Link } from "react-router-dom";

function Home() {
  const handleEmail = () => {
    window.location.href = "mailto:chamilnethmina@gmail.com";
  };
  return (
    <section className="home-section">
      <div className="hero hero-primary">
        <Container id="home">
          <div className="home-content">
            <Row className="justify-content-center align-items-center">
              <Col md={7} className="home-header text-center">
                {/* <h1 className="heading-name">
                  Hello! <span className="wave">👋🏻</span>
                </h1>
                <h1 className="">
                  I am
                  <strong className="main-name"> Chamil Gamage</strong>
                </h1>
                <div
                  style={{ padding: 10, textAlign: "center" }}
                  className="heading-name-type"
                >
                  <Type />
                </div> */}

                <h4 className="hero-subtitle">
                  HELLO!<span className="wave">👋🏻</span>
                </h4>
                <h1 className="hero-title">
                  I'm <span className="highlight-text">Chamil</span>
                  <br />
                  <span className="highlight-text">Gamage</span>
                </h1>
                <h3 className="hero-description">
                  <Type />
                </h3>
                <div className="hero-buttons">
                  <Button className="btn-hire-me" onClick={handleEmail}>
                    Hire Me
                  </Button>
                  <Link to="/projects">
                    <Button variant="outline-light" className="btn-my-works">
                      My Works
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col md={5} className="img text-center">
                <div className="hero-img-container">
                  <img width={300} src={me} alt="about" className="hero-img" />
                  <div className="hero-img-overlay"></div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <Home2 />
      </div>
    </section>
  );
}

export default Home;
