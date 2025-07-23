import React from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import VSC from "../assets/vsc.png"; 
import ExpressLogo from "../assets/express.jpeg";


import { SiCplusplus, SiC, SiMysql, SiBootstrap } from "react-icons/si";

const skills = [
  { name: "Visual Studio Code", icon: ( <img src={VSC} alt="VS Code" width={50} height={50} style={{ borderRadius: "6px", backgroundColor: "#fff", padding: "0px",}}/> ), color: "#007ACC",level: 90},
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3", level:30},
  { name: "GitHub", icon: <FaGithub />, color: "#ffffff", level: 80 },
  { name: "HTML", icon: <FaHtml5 />, color: "#E44D26", level: 96 },
  { name: "CSS", icon: <FaCss3Alt />, color: "#264de4", level: 90 },
  { name: "React", icon: <FaReact />, color: "#61DBFB", level: 70 },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A", level: 75 },
  { name: "Express.js", icon: ( <img src={ExpressLogo} alt="Express.js" width={32} height={32} style={{ backgroundColor: "#fff", padding: "2px", borderRadius: "6px" }}  /> ), color: "#000000", level: 75},
  { name: "C++", icon: <SiCplusplus />, color: "#025087ff", level: 65 },
  { name: "C", icon: <SiC />, color: "#f9f9f9ff", level: 50 },
  { name: "JavaScript", icon: <FaJs />, color: "#F0DB4F", level: 70 },
  { name: "MongoDB", icon: <FaDatabase />, color: "#4DB33D", level: 70 },
  { name: "MySql", icon: <SiMysql />, color: "#00758F", level: 60 },
  { name: "Mongoose", icon: <FaDatabase />, color: "#880000", level: 60 }

];

const Skills = () => {
  return (
    <Container className="py-5">
      <motion.h2
        className="text-center mb-4 py-2"
        style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
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
                  background: "#1f1f1f",
                  border: "1px solid #444",
                  color: "#fff",
                }}
              >
                <div className="d-flex align-items-center mb-2 gap-3">
                  <div
                    className="fs-1"
                    style={{ color: skill.color, minWidth: "50px" }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h5 className="mb-0">{skill.name}</h5>
                    <small className="text-muted">
                      {skill.level}% Proficient
                    </small>
                  </div>
                </div>

                <ProgressBar
                  now={skill.level}
                  variant="info"
                  style={{ height: "10px" }}
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
