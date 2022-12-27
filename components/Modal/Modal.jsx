
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function ModalForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{position: "absolute",width: "100%",margin:'auto', textAlign: 'center'}} variant="primary" onClick={handleShow}>
        Crear Orden
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Orden</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>CLIENTE</Form.Label>
              <Form.Control type="text" placeholder="Cliente" autoFocus />
              <Form.Label>DOMICILIO</Form.Label>
              <Form.Control type="text" placeholder="Domicilio" autoFocus />
              <Form.Label>CONTACTO</Form.Label>
              <Form.Control
                type="text"
                placeholder="Teléfono o Mail"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Trabajos</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Notas</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Editar
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


