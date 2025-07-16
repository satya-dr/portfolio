import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: '5 Tips to Master React as a Beginner',
    date: 'June 2024',
    platform: 'Hashnode',
    link: 'https://hashnode.com/@satyajit',
  },
  {
    title: 'How I built CGEC Times',
    date: 'April 2024',
    platform: 'Medium',
    link: 'https://medium.com/@satyajit',
  },
];

const Blogs = () => {
  return (
    <Container className="py-5">
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Blogs & Articles
      </motion.h2>
      <Row>
        {blogs.map((blog, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="shadow h-100">
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {blog.platform} — {blog.date}
                </Card.Subtitle>
                <Card.Link href={blog.link} target="_blank">
                  Read More
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
