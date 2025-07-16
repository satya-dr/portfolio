import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram,FaDownload } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg'; 

const Hero = () => {
  return (
    <Container
  fluid
  className="py-5"
  style={{
    background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
    color: 'white',
  }}
>

      <Row className="align-items-center">
        
        <Col md={4} className="text-center mb-4 mb-md-0">
          <motion.img
            src={profileImg}
            alt="profile"
            className="img-fluid rounded-circle shadow"
            style={{ width: '180px', height: '180px', objectFit: 'cover' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />

         
          <div className="mt-3 d-flex justify-content-center gap-3">
            <a
              href="https://github.com/satya-dr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-4"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/satyajit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-4"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/satyajitan21.official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-4"
            >
              <FaInstagram />
            </a>
          </div>
        </Col>

        
        <Col md={8}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-5 fw-bold">Hi, I'm Satyajit Roy</h1>
            <p className="lead">A Learner Full-Stack Web Developer from CGEC 💻</p>
            <Button variant="warning" className="fw-bold px-4 py-2">
              <a
  href="/Satyajit_Roy_Resume.pdf"
  download
  className="btn btn-warning fw-bold px-4 py-2"
>
  <FaDownload /> Download Resume
</a>

            </Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
