import React, { useState } from "react";
import { Card } from "react-bootstrap";

function AboutCard() {
  const [clicked, setClicked] = useState(false);
  const setOnClicked = () => {
    if (clicked === false) {
      // there is bug in here need to click twice
      setClicked(true);
      console.log(clicked);
    } else {
      setClicked(false);
    }
  };
  return (
    <Card className="quote-card-view">
      <Card.Body>
        {/* <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="yellow">Chamil Gamage </span>
            from <span className="purple"> Horana, Sri Lanka</span>
            <br /> I am an undergraduate student in University of Moratuwa.
            <br /> And I'm studying Data Science and Engineering stream <br />{" "}
            under Computer Science and Engineering Department.
            <br />
            <br />
            Other than from coding, here are some other activities that I love
            to do!
          </p>
          <ul>
            <li style={{ paddingBottom: "5px" }}>
              <ImPointRight /> Football
            </li>
            <li style={{ paddingBottom: "5px" }}>
              <ImPointRight /> Singing
            </li>
            <li style={{ paddingBottom: "5px" }}>
              <ImPointRight /> Playing Guitar
            </li>
            <li style={{ paddingBottom: "5px" }}>
              <ImPointRight /> Reading
            </li>
            <li style={{ paddingBottom: "5px" }}>
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote> */}
        <h1>
          Know who <strong className="yellow">I am </strong>
        </h1>
        <ul className="about-info mt-4">
          <li>
            <strong>Name:</strong> Clark Thompson
          </li>
          <li>
            <strong>Date of birth:</strong> January 01, 1987
          </li>
          <li>
            <strong>Address:</strong> San Francisco CA 97987 USA
          </li>
          <li>
            <strong>Zip code:</strong> 1000
          </li>
          <li>
            <strong>Email:</strong> clarkthomp@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> +1-2234-5678-9-0
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
