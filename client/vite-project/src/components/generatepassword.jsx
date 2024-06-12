// import React, { useState } from "react";
// import { Container, Form, Button } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";


// const Generatepassword = () => {
//     const navigate = useNavigate();
//     const { mailId } = useParams();
//     const [formdata, setFormdata] = useState({
//       password: "",
//     });
  
//     const handelinputchange = (event) => {
//       const { name, value } = event.target;
//       setFormdata({
//         ...formdata,
//         [name]: value,
//       });
//     };
  
  
//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         try {
//           const response = await axios.post(
//             `http://localhost:4000/auth/setpassword/${mailId}`,
//             { password: formdata.password }
//           );
//           console.log(response);
//           if (response.status === 200) {
//             navigate("/login");
//           } else {
//             console.error("Invalid credentials");
//           }
//         } catch (error) {
//           console.error("Error resetting password:", error.message);
//         }
//       };
  
  
  
  
  
//     return (
//     <>
//           <Container className="mt-5">
//         <h2>Generate Password</h2>
//         <Form>
//           <Form.Group>
//             <Form.Label>password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Enter password to Generate"
//               name="password"
//               value={formdata.password}
//               onChange={handelinputchange}
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit" onClick={handleSubmit}>
//             reset
//           </Button>
//         </Form>
//       </Container>

//     </>
//   )
// }

// export default Generatepassword



import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Generatepassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [formdata, setFormdata] = useState({
    password: "",
    confirmPassword :""
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
      if (formdata.password === formdata.confirmPassword) {
        console.log("inside this block");
        const response = await axios.post(
          `http://localhost:4000/auth/setpassword/${token}`,
          { password: formdata.password }
        );
        console.log("response is", response);

        if (response.status === 200) {
          alert("Password generated successfully");
          navigate("/login");
        } else {
          console.error("Invalid credentials");
        }
      } else {
        alert("Confirm password is not the same");
      }
    } catch (error) {
      console.error("Error for generating password:", error.message);
    }
  };
  
  
  return (
    <>
      <Container className="mt-5">
        <h2>Generate Password</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password to generate"
              name="password"
              value={formdata.password}
              onChange={handelinputchange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>confirm Password</Form.Label>
            <Form.Control
              type="confirmPassword"
              placeholder="confirm password"
              name="confirmPassword"
              value={formdata.confirmPassword}
              onChange={handelinputchange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Generate
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Generatepassword;
