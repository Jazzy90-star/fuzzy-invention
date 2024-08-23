import React, { useState } from "react";
import Navs from "./navbar";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    comments: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
  };

  return (
    <>
      <Navs />
      <Form onSubmit={handleSubmit}>
        {/* Form fields and layout remain the same */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;