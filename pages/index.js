
import NavbarComponent from "./../components/Navbar/Navbar";
import ModalForm from "./../components/Modal/Modal";
import Paginacion from "./../components/Pagination/Paginacion";
import Tabla from "./../components/Table/Table";

export default function Home() {
  return (
    <>
      <NavbarComponent />

      <Tabla />

      <ModalForm />

      <Paginacion />
    </>
  );
}
