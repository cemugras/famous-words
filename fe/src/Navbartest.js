import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export const Navbartest = () => {
  return (
      <div>
          <Navbar bg="light" expand="lg" className="justify-content-between">
              <div className="container d-flex align-items-center">
                  <Navbar.Brand href="#home" className="rounded-circle overflow-hidden">
                      <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ataturk1930s.jpg/444px-Ataturk1930s.jpg" // Logo dosyanızın yolu burada olmalı
                          width="50"
                          height="50"
                          className="d-inline-block align-top rounded-circle"
                          alt="Logo"
                      />
                  </Navbar.Brand>
                  <Nav className="mr-auto">
                      <NavDropdown title="Keşfet" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Seçenek 1</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Seçenek 2</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                  <div className="d-flex align-items-center">
                      <FormControl type="text" placeholder="Ara" className="mr-2" style={{ width: "600px", borderRadius: "0.5rem" }} />
                      <div style={{ marginRight: "10px" }}></div>
                      <Button variant="outline-success" style={{ borderRadius: "0.5rem" }}>Ara</Button>
                  </div>
                  <Button variant="primary" style={{ borderRadius: "0.5rem" }}>Sağ Buton</Button>
              </div>
          </Navbar>
      </div>
  )
}

export default Navbartest


