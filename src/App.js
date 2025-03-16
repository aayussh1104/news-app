import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";

import NewsList from "./Components/NewsList";

function App() {

  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setCategory(category)
    setSearchTerm("");
  };

  const handleSearch = (event) =>{
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  }

  return (
    <>
      <Navbar bg="dark" expand="lg" className="mb-4 custom-navbar">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4 align-items-center">
          <img href="/" src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">

              <Dropdown>
                <Dropdown.Toggle className="custom-dropdown">Categories</Dropdown.Toggle>
                {/* Dropdown menu */}
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCategoryClick("world")}>World</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("business")}>Business</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("technology")}>Technology</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("sports")}>Sports</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("entertainment")}>Entertainment</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            </Nav>

            {/* Searching */}
            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl type="text" placeholder="search" className="me-2 custom-search" name="search" />
              <Button className="btn btn-primary" type="submit">Search</Button>
            </Form>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          {/* Category section */}
          <Col xs={12} md={3} className="custom-sidebar-container">
            <h5 className="category-title">Categories</h5>
            <Nav className="flex-column custom-sidebar">
              <Nav.Link onClick={() => handleCategoryClick("world")}>World</Nav.Link>

              <Nav.Link onClick={() => handleCategoryClick("business")}>Business</Nav.Link>

              <Nav.Link onClick={() => handleCategoryClick("technology")}>Technology</Nav.Link>

              <Nav.Link onClick={() => handleCategoryClick("sports")}>Sports</Nav.Link>

              <Nav.Link onClick={() => handleCategoryClick("entertainment")}>Entertainment</Nav.Link>
            </Nav> 
            
            {/* Contact us section */}
            <div className="contact-us mt-4">
              <h5 className="contact-title">Contact Us</h5>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                </Form.Group>
                <Button className="mt-3" variant="primary" type="submit">Submit</Button>
              </Form>
            </div>

          </Col>
          
          {/* News Section */}
          <Col xs={12} md={9}>
            <NewsList category={category} searchTerm={searchTerm} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
