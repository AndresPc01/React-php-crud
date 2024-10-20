import "../../css/navbars/navbarGlobal.css";
import { Link, Outlet } from "react-router-dom";

const NavbarGlobal = () => {
  return (
    <>
      <section className="section_navbar">
        <nav>
          <ul>
            <li>
              <button>
                <Link to={"/"}>Home</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to={"Clientes"}>Agregar Cliente</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to={"Vendedores"}>Agregar Vendedor</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to={"Productos"}>Agregar Producto</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to={"Ventas"}>Agregar venta</Link>
              </button>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section_outlet">
        <Outlet />
      </section>
    </>
  );
};

export default NavbarGlobal;
