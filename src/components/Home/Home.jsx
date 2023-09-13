import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import HomeAnimation from "./HomeAnimation";
import Type from "./Type";
import Home2 from "./Home2";
function Home() {
  return (
    <section className="home-section">
        <Container  id='home'>
        <div className="home-content">
            <Row>
                <Col md={7} className="home-header">
                <h1 className="heading-name">
                Hello{" "}
                <span className="wave">
                👋🏻
                </span>
                </h1>
                <h1 className="heading-name">
                I AM
                <strong className="main-name"> Chamil Gamage</strong>
              </h1>
                <div style={{ padding: 10, textAlign: "left" }} className="heading-name">
                  <Type />
                </div>
                </Col>
                <Col md={5}>
                <HomeAnimation/>
                </Col>
            </Row> 
        </div>
        <Home2/>    
    </Container>
  </section>
  );
}

export default Home;
