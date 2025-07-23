// Frontend: React (Contact.js)
import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      alert("❌ Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong. Please check console.");
  }
};


  return (
    <Container className="py-5" id="contact">
      <h2 className="text-center mb-4 py-2" style={{
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: 'white'
      }}>Contact Me</h2>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formSubject" className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-4">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={5}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button
            variant="warning"
            type="submit"
            className="fw-bold px-4 py-2 d-flex align-items-center gap-2 mx-auto"
          >
            <FaPaperPlane /> Send Message
          </Button>
        </div>
      </Form>

      {submitted && (
        <Alert variant="success" className="mt-4 text-center fw-semibold">
          ✅ Thank you! Your message has been submitted successfully.
        </Alert>
      )}
    </Container>
  );
};

export default Contact;