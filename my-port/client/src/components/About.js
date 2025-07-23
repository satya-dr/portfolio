import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import aboutImg from '../assets/me1.jpg'; // Use a clean, centered image

const About = () => {
  return (
    <Container className="py-5">
      <motion.h2
        className="text-center mb-4 py-2"
        style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
            }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        👨‍💻 About Me
      </motion.h2>
      <Row className="align-items-center">
        <Col md={5} className="text-center mb-4 mb-md-0">
          <motion.img
            src={aboutImg}
            alt="About"
            className="img-fluid rounded shadow"
            style={{ width: '100%', maxWidth: '350px', height: 'auto', objectFit: 'cover' }}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </Col>

        <Col md={7}>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="lead">
              I'm <strong>Satyajit Roy</strong>, a 2nd year Computer Science Engineering student at CGEC. 
              I'm passionate about full-stack web development and enjoy building responsive, functional, and animated websites.
              <br /><br />
              Apart from coding, I love collaborating on projects, participating in hackathons, and continuously learning new tech.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
