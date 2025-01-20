import React from "react";

function Profile() {
  const educationData = [
    {
      title: "Bachelor of Science in Computer Science and Engineering",
      institution: "University of Moratuwa",
      period: "2021 - present",
      description:
        "Currently pursuing a Master of Science in Artificial Intelligence at the University of Moratuwa.",
      type: "education",
      side: "left",
    },
    {
      title: "GCE Advanced Level",
      institution: "D.S Senanayake College Colombo 07",
      period: "2019",
      description: "I did my Advanced Level in Physical Stream : 3A pass",
      type: "education",
      side: "right",
    },
    {
      title: "GCE Ordinary level",
      institution: "D.S Senanayake College Colombo 07",
      period: "2014",
      description: "8A 1B pass",
      type: "experience",
      side: "left",
    },
  ];

  const experienceData = [
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
      title: "Software Engineering Intern",
      institution: "promiseQ GmbH",
      period: "2023 November - 2024 May",
      description:
        "Delivered custom, high-quality software solutions leveraging TypeScript, Python, Firebase, and JavaScript.",
      type: "experience",
      side: "left",
    },
  ];

  return (
    <section className="profile-section">
      <div className="heading-section">
        <h1 className="big">Profile</h1>
        <h2 className="mb-4">Profile</h2>
      </div>
      <div className="timeline-section">
        <div>
          <h2>Education</h2>
        </div>
        <div className="timeline-container">
          {educationData.map((item, index) => (
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
        <div>
          <h2>Experinces</h2>
        </div>
        <div className="timeline-container">
          {experienceData.map((item, index) => (
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
      </div>
    </section>
  );
}

export default Profile;
