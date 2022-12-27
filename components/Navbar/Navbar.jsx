
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'next/image'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";




export default function NavbarComponent (){
 
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="/logo-white.png"
              alt="Logo"
              border="0"
              width="250"
              height="50"
            />
          </Navbar.Brand>
          <Nav className="me-center">
            <h1 style={{ color: "white" }}>ORDENES DE TRABAJO</h1>
            <Nav.Link href="#home"></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Buscar</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

