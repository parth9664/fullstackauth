import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Resetpassword = () => {
  const navigate = useNavigate();
  const { tokenId } = useParams();
  const [formdata, setFormdata] = useState({
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
      const response = await axios.post(
        `http://localhost:4000/auth/resetpassword/${tokenId}`,
        { password: formdata.password }
      );
      console.log(response);
      if (response.status === 200) {
        navigate("/login");
      } else {
        console.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error resetting password:", error.message);
    }
  };

  return (
    <>
      <Container className="mt-5">
        <h2> Password</h2>
        <Form>
          <Form.Group>
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password to create"
              name="password"
              value={formdata.password}
              onChange={handelinputchange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            create
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Resetpassword;
