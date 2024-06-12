import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    name: "",
    email: ""
  });

  const handelinputchange = (event) => {
    const { name, value } = event.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("formData::", formdata);
  //   // console.log(formdata, ">>>>>>>>>>>>>>>>>>>>>");

  //   try {
  //     const response = await axios({
  //       method: "POST",
  //       url: "http://localhost:4000/auth/signup",
  //       data: formdata,
  //     });

  //     const result = await response.data;
  //     console.log("result::", result);
  //     if (result._id) {
  //       navigate("/Login");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setFormdata({
  //       name: "",
  //       email: "",
  //       password: "",
  //     });
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios({
      //   method: "POST",
      //   url: "http://localhost:4000/auth/signup",
      //   data: formdata,
      // });
      const response = await axios.post("http://localhost:4000/auth/signup", formdata);
      console.log("responce >>>>>>.",response);

  
      const sendMailForPassword = await axios.post("http://localhost:4000/auth/generatePassword", formdata)
      console.log(response);

      if (response.data) {
        alert("check your email to set password"+)
        navigate("/login");
      } else {
        console.error("invalid crediantial ");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setFormdata({
        name:"",
        email: ""
      });
    }
  };



  return (
    <>
      <Container className="mt-5">
        <h2>Signup</h2>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your First Name"
              name="name"
              value={formdata.name}
              onChange={handelinputchange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formdata.email}
              onChange={handelinputchange}
            />
          </Form.Group>
          {/* <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formdata.password}
              onChange={handelinputchange}
            />
          </Form.Group> */}

          <Button variant="primary" onClick={handleSubmit}>
            Sign up
          </Button>
          <p>already have account?<Link to ="/login">login</Link></p>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
