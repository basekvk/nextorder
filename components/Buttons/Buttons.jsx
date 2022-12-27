'use client'
import Button from "react-bootstrap/Button";

function ButtonSucess() {
  return (
    <>
      <Button variant="success">Ver</Button>
    </>
  );
}

function ButtonDanger() {
  return (
    <>
      <Button variant="danger">Eliminar</Button>
    </>
  );
}

function ButtonWarning() {
    return (
        <>
        <Button variant="warning">Editar</Button>
        </>
    );
    }

export {ButtonSucess, ButtonDanger, ButtonWarning};
