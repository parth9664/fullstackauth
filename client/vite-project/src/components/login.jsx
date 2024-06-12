import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const handelinputchange = (event) => {
    const { name, value } = event.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:4000/auth/login",
        data: formdata,
      });

      const result = await response.data;
      console.log("result::", result);
      if (result.user._id) {
        navigate("/Dashboard");
        localStorage.setItem("token", result.token);
      } else {
        console.error("invalid crediantial ");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setFormdata({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <Container className="mt-5">
        <h2>Login</h2>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formdata.email}
              onChange={handelinputchange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formdata.password}
              onChange={handelinputchange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Login
          </Button>
          <p><Link to ="/forgotpassword">forgot-password?</Link></p>
          <p>
            don't have account?<Link to="/">signup</Link>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default Login;
