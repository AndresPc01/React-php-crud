import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AgregarProductos from "./pages/productos/AgregarProductos";
import NavbarGlobal from "./components/Navbars/NavbarGlobal";
import AgregarClientes from "./pages/Clientes/AgregarClientes";
import AgregarVentas from "./pages/Ventas/AgregarVentas";
import AgregarVendedores from "./pages/Vendedores/AgregarVendedores";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<NavbarGlobal />}>
          <Route path="/" element={<HomePage />} />
          <Route path="Clientes" element={<AgregarClientes />} />
          <Route path="Vendedores" element={<AgregarVendedores />} />
          <Route path="Productos" element={<AgregarProductos />} />
          <Route path="Ventas" element={<AgregarVentas />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
