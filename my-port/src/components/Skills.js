import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaDatabase,
} from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact />, color: '#61DBFB', level: 90 },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#3C873A', level: 75 },
  { name: 'JavaScript', icon: <FaJs />, color: '#F0DB4F', level: 85 },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E44D26', level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4', level: 90 },
  { name: 'GitHub', icon: <FaGithub />, color: '#ffffff', level: 80 },
  { name: 'MongoDB', icon: <FaDatabase />, color: '#4DB33D', level: 70 },
];

const Skills = () => {
  return (
    <Container className="py-5">
      <motion.h2
        className="text-center mb-4"
        style={{
          background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>

      <Row className="g-4 justify-content-center">
        {skills.map((skill, index) => (
          <Col xs={12} md={6} lg={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="shadow-sm p-3"
                style={{
                  background: '#1f1f1f',
                  border: '1px solid #444',
                  color: '#fff',
                }}
              >
                <div className="d-flex align-items-center mb-2 gap-3">
                  <div
                    className="fs-1"
                    style={{ color: skill.color, minWidth: '50px' }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h5 className="mb-0">{skill.name}</h5>
                    <small className="text-muted">{skill.level}% Proficient</small>
                  </div>
                </div>

                <ProgressBar
                  now={skill.level}
                  variant="info"
                  style={{ height: '10px' }}
                  animated
                />
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
