import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import certificate1 from '../assets/cgec_certificate.png'; 
import certificate2 from '../assets/code_athon.png'; 
import certificate3 from '../assets/tech_quiz.png'; 
import certificate4 from '../assets/cube_solve.jpeg'; 
import certificate5 from '../assets/robo_socoor.jpeg'; 
import certificate6 from '../assets/devDraw.png'; 

const certificates = [
  {
    title: 'CGEC TIMES Certificate',
    provider: 'CGEC-TIMES',
    year: '2025',
    link: certificate1,
  },
  {
    title: 'Code-A-Thon in TECHNOVISTA',
    provider: 'Tech-o-Nicks',
    year: '2025',
    link: certificate2,
  },
  {
    title: 'Tech QUIZ in TECHNOVISTA',
    provider: 'Tech-o-nicks',
    year: '2025',
    link: certificate3,
  },
  {
    title: 'Cube Solve in ESPERANZA',
    provider: 'CGEC',
    year: '2025',
    link: certificate4,
  },
  {
    title: 'Robo Soccer in ESPERANZA',
    provider: 'CGEC',
    year: '2025',
    link: certificate5,
  },
  {
    title: 'Dev Draw in TECHNOVISTA',
    provider: 'Tech-o-nicks',
    year: '2025',
    link: certificate6,
  }
];

const Certificates = () => {
  return (
    <Container className="py-5">
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Certificates & Achievements
      </motion.h2>
      <Row>
        {certificates.map((cert, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="shadow h-100">
              <Card.Body>
                <Card.Title>{cert.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {cert.provider} — {cert.year}
                </Card.Subtitle>
                <Card.Link href={cert.link} >
                  View Certificate
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
       
      </Row>
    </Container>
  );
};

export default Certificates;
