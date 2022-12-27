
import Table from "react-bootstrap/Table";


export default function Tabla (){
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>CLIENTE</th>
            <th>FECHA</th>
            <th>DOMICILIO</th>
            <th>TRABAJO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ALCANTARILLADO GRUPAL</td>
            <td>01/01/2023</td>
            <td>Calle Malaga 4 Nave 39, 28343 Valdemoro Madrid </td>
            <td>Desatascos en bajante</td>
           
          </tr>
        </tbody>
      </Table>
    </>
  );
};


