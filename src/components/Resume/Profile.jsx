import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Profile() {
  const timelineData = [
    {
      title: "Bachelor of Science in Computer Science and Engineering",
      institution: "University of Moratuwa",
      period: "2021  2025 January",
      description:
        "Currently pursuing a Master of Science in Artificial Intelligence at the University of Moratuwa.",
      type: "education",
      side: "left",
    },
    {
      title: "GCE Advanced Level",
      institution: "D.S Senanayake College Colombo 07",
      period: "2019",
      description:
        "Graduated from UCSC in 2022 with a second class lower division.",
      type: "education",
      side: "right",
    },
    {
      title: "GCE Olevel",
      institution: "D.S Senanayake College Colombo 07",
      period: "2014",
      description: "",
      type: "experience",
      side: "left",
    },
    {
      title: "Associate Software Engineer",
      institution: "promiseQ GmbH",
      period: "2024 May - 2024 November",
      description:
        "Guide the technical strategy, make key architectural decisions, and lead robust microservices development.",
      type: "experience",
      side: "right",
    },
    {
      title: "Intern",
      institution: "promiseQ GmbH",
      period: "2023 November - 2024 May",
      description:
        "Delivered custom, high-quality software solutions leveraging TypeScript, Python, Firebase, and JavaScript.",
      type: "experience",
      side: "left",
    },
  ];

  return (
    <section className="timeline-section">
      <div className="heading-section">
        <h1 className="big">Profile</h1>
        <h2 className="mb-4">Profile</h2>
      </div>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              item.side === "left" ? "left" : "right"
            }`}
          >
            <div className="timeline-content">
              <h4>{item.title}</h4>
              <h5>{item.institution}</h5>
              <span className="timeline-period">{item.period}</span>
              <p>{item.description}</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
}

export default Profile;
