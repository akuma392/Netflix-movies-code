import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MDBBtn } from "mdb-react-ui-kit";
import { Context } from "../Context/DarkContext";

function Header() {
  const { darkMode, setDarkMode } = useContext(Context);
  const handleDarkMode = (e) => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
    >
      <Container>
        <Navbar.Brand href="#home">Netflix-Movie-list</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Geners</Nav.Link>
            <NavDropdown title="Suggestions" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Recommended
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tv series</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Actors</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Random movies
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {!darkMode ? (
              <MDBBtn onClick={handleDarkMode} color="dark" noRipple>
                Dark mode
              </MDBBtn>
            ) : (
              <MDBBtn
                onClick={handleDarkMode}
                color="light"
                rippleColor="dark"
                noRipple
              >
                Light mode
              </MDBBtn>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
