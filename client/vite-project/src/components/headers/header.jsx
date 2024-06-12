import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Header = ({ user }) => {
  const isLoggedIn = localStorage.getItem('token'); 
  const navigate = useNavigate()
  
  const handleSubmit =async (e) => {
    e.preventDefault();
   try {
     
     const cleartoken = await localStorage.removeItem('token');
     console.log("logout succesful");
     navigate("/Login")

   } catch (error) {
    console.log(error);
   }
  };

  return (
    <Navbar bg={isLoggedIn ? "dark" : "danger"} variant="dark" expand="lg">
      <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {isLoggedIn? (<Nav>
          <Nav.Link href="#logout" onClick={handleSubmit}>Logout</Nav.Link>
        </Nav>)
        :
        (<Nav>
          <Nav.Link href="#login" onClick={handleSubmit}>Login</Nav.Link>
        </Nav>)}
        {/* <Nav>
          <Nav.Link href="#logout" onClick={handleSubmit}>Logout</Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

