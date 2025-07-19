import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Form, Button } from "react-bootstrap";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      credentials.username === "admin" &&
      credentials.password === "admin123"
    ) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/menu");
    } else {
      alert("invalid Credentials");
    }
  };

  return (
    <div>
      <Container className='d-flex justify-content-center align-items-center vh-100'>
        <Card>
          <Card.Body>
            <h4 className='mb-4'>Admin Login</h4>
            <Form onSubmit={handleLogin}>
              <Form.Group className='mb-3'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name='username'
                  value={credentials.username}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  name='password'
                  value={credentials.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type='submit' className='w-100'>
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AdminLogin;
