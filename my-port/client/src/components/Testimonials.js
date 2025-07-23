import React from 'react';
import { Container, Card, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';

const testimonialData = [
  {
    name: 'CGEC Times  Tech Lead',
    text: 'Satyajit is a dedicated web developer. His work on our team’s website was exceptional!',
    role: 'Frontend Mentor – CGEC Times'
  },
  {
    name: 'E-Cell Tech Coordinator',
    text: 'Great team player! His contribution to E-Cell website boosted our impact.',
    role: 'E-Cell, CGEC'
  }
];

const Testimonials = () => {
  return (
    <Container className="py-5">
      <motion.h2
        className="text-center mb-5 py-2"
        style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
            }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        💬 Testimonials
      </motion.h2>

      <Carousel indicators={false} controls={true} interval={4000}>
        {testimonialData.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <Card className="text-center shadow-lg border-0 mx-auto" style={{ maxWidth: '600px' }}>
              <Card.Body>
                <Card.Text className="fs-5">“{testimonial.text}”</Card.Text>
                <Card.Title className="mt-3 fw-bold">{testimonial.name}</Card.Title>
                <Card.Subtitle className="text-muted">{testimonial.role}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
