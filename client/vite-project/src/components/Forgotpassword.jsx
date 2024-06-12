import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Forgotpassword = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: ""
  });
  
  const handelinputchange = (event) => {
    const { name, value } = event.target;
    setFormdata({
      ...formdata,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:4000/auth/forgotpassword",
        data: formdata,
      });
      console.log(response);
      if (response.data.message) {
        alert("check your email to rest password")
        navigate("/login");
      } else {
        console.error("invalid crediantial ");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setFormdata({
        email: ""
      });
    }
  };

  return (
    <>
      <Container className="mt-5">
        <h2>forgot Password</h2>
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

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            send mail
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Forgotpassword;



// $2b$10$tR2280q2MNFz8d5jc5h53OZxm2JbUEekE9Qysj.uxLCe5AK.x4Z6e
