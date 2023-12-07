import React, { useContext } from 'react';
import { UserContext } from '../App';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css'; // Import the CSS file

const Header = () => {
  const { userData, setUserData } = useContext(UserContext);

  const logOut = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem('auth-token', '');
  };

  return (
    <div>
      <Navbar className="navbar-lightblue" expand="lg"> {/* Add the navbar-lightblue class */}
        <Container>
          <LinkContainer to="/">
            <Nav.Link><img src={require("../image/logoo.png")} alt="Login" style={{ width: "40px", height: "40px" }} /></Nav.Link>
          </LinkContainer>
          <LinkContainer to="/">
            <Navbar.Brand><t/></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/customerlist">
                <Nav.Link>Customer List</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/addcustomer">
                <Nav.Link>Add New Customer</Nav.Link>
              </LinkContainer>
            </Nav>
            {userData.user ? (
              <Nav className="ml-auto">
                <LinkContainer to="/profile">
                  <Nav.Link>Profile({userData.user.name})</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login" className="ml-2">
                  <Nav.Link onClick={logOut}>Log Out</Nav.Link>
                </LinkContainer>
              </Nav>
              
            )
             : (
              <Nav className="mr-auto">
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Log In</Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </div>
    
  );
};

export default Header;
