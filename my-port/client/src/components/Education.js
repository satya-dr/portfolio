import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Education.css';

const educationData = [
  {
    degree: "B.Tech in CSE",
    institution: "Cooch Behar Government Engineering College(CGEC)",
    dept:"CSE",
    duration: "2024 – 2028",
    result: "Not Published Yet"
  },
  {
    degree: "Higher Secondary Education (Science)",
    institution: "Doon Heritage School, Darjeeling",
     dept:"SCIENCE (PCM)",
    duration: "2023 – 2024",
    result: "68.02% (CBSE)"
  },
  {
    degree: "Secondary (Madhyamik)",
    institution: "Jateswar High School, WB",
    duration: "2021 – 2022",
    dept:"CLASS X (Section A)",
    result: "84.5% (WBBSE)"
  }
];

const Education = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 py-2" style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
            }}>🎓 My Education</h2>
      <Row>
        {educationData.map((edu, index) => (
          <Col md={4} key={index} className="mb-4 d-flex justify-content-center">
            <div className="edu-flip-card">
              <div className="edu-flip-inner">
                <div className="edu-flip-front">
                  <h5 className="fw-bold">{edu.degree}</h5>
                  <p>{edu.institution} <br /> From <strong style={{fontWeight:'100px', color:'#ff0077ff'}}>{edu.dept} </strong> department</p>
                  
                  <p>{edu.duration}</p>
                </div>
                <div className="edu-flip-back">
                  <h6>📘 Result</h6>
                  <p>{edu.result}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Education;
