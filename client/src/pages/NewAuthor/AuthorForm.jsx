import React from 'react';
import { Form } from 'react-bootstrap';

const AuthorForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Author Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AuthorForm;