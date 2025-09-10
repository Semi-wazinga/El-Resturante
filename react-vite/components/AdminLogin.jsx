import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // call backend
      const res = await axios.post(
        "http://localhost:3000/auth/login",
        credentials,
        { withCredentials: true }
      );

      const user = res.data.user || res.data; // fallback if backend sends raw data

      if (!user || !user.role) {
        alert("Login failed: No role found");
        return;
      }

      console.log("Login response:", user);

      if (user.role === "admin") {
        navigate("/admin");
      } else if (user.role === "customer") {
        navigate("/reservation");
      } else {
        alert("Unauthorized role");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div>
      <Container className='d-flex justify-content-center align-items-center vh-100'>
        <Card>
          <Card.Body>
            <h4 className='mb-4'>Login</h4>
            <Form onSubmit={handleLogin}>
              <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  value={credentials.email}
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
