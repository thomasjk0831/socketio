import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  function handleSumbit(e) {
    e.preventDefault();
    //using useRef hook
    onIdSubmit(idRef.current.value);
  }

  return (
    //using bootstrap container
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSumbit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <Button variant="secondary">Login</Button>
      </Form>
    </Container>
  );
}
