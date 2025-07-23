import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <Container className="py-5 px-5" style={{backgroundColor:'#25293acf',borderRadius:'20px'}}>
      <motion.h2
        className="text-center mb-4 py-2"
        style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
            }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <Row className="gy-4">

        <Col md={6}>
          <motion.div
            className="bg-gradient p-4 rounded shadow text-white h-100"
            style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
            }}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h4 className="fw-bold">CGEC Times</h4>
            <p>
              I am the web developer of <strong>CGEC Times</strong>, the official departmental newsletter website of CGEC. It features dynamic updates, events, and clubs with responsive frontend.
            </p>
            <ul>
              <li>Built with React, Bootstrap, and animations</li>
              <li>Mobile-friendly design</li>
              <li>Live updates & team section</li>
            </ul>
            <div className="d-flex gap-3 mt-3">
              <Button
                variant="light"
                href="https://satya-dr.github.io/C.TIMES/"
                target="_blank"
              >
                <FaExternalLinkAlt className="me-2" />
                Live Site
              </Button>
              <Button
                variant="outline-light"
                href="https://github.com/satya-dr/C.TIMES.git"
                target="_blank"
              >
                <FaGithub className="me-2" />
                GitHub
              </Button>
            </div>
          </motion.div>
        </Col>

        
        <Col md={6}>
          <motion.div
            className="bg-gradient p-4 rounded shadow text-white h-100"
            style={{
              background: 'linear-gradient(135deg, #f7971e, #ffd200)',
              color: '#000',
            }}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h4 className="fw-bold">CGEC E-Cell Website</h4>
            <p>
              As the official web developer of the <strong>Entrepreneurship Cell (E-Cell)</strong> at CGEC, I created a website to showcase initiatives, events, and the entrepreneurial spirit of students.
            </p>
            <ul>
              <li>Clean React frontend with event registration modules</li>
              <li>Visually appealing animations and club highlights</li>
              <li>Responsive and easily maintainable</li>
            </ul>
            <div className="d-flex gap-3 mt-3">
              <Button
                variant="light"
                href="https://satya-dr.github.io/e-cell/" 
                target="_blank"
              >
                <FaExternalLinkAlt className="me-2" />
                Live Site
              </Button>
              <Button
               variant="outline-light"
                href="https://github.com/satya-dr/e-cell.git" 
                target="_blank"
              >
                <FaGithub className="me-2" />
                GitHub
              </Button>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
