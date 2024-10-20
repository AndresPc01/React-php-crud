import { useEffect, useState } from "react";
import "../../css/productos/Productos.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AgregarProductos = () => {
  const [Codigo, setCodigo] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Valor, setValor] = useState("");
  const [Stock, setStock] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [errorVacio, setErrorVacio] = useState({
    nombre: false,
    valor: false,
    stock: false,
    descripcion: false,
  });
  const ObtenerCodigo = () => {
    const url =
      "http://localhost/Proyectos/EvaProject/app/backend/php/ObtenerCodigo.php";
    axios.get(url).then(function (res) {
      if (res.data.error) {
        const newvalor = (1).toString().padStart(10, "0");
        setCodigo(newvalor);
      } else {
        const newvalor = (parseInt(res.data.CodigoProducto) + 1)
          .toString()
          .padStart(10, "0");
        setCodigo(newvalor);
      }
    });
  };

  const EnviarFormulario = (e) => {
    e.preventDefault();
    const url =
      "http://localhost/Proyectos/EvaProject/app/backend/php/AgregarProducto.php";
    const data = new FormData();
    data.append("Codigo", Codigo);
    data.append("Nombre", Nombre);
    data.append("Valor", Valor);
    data.append("Stock", Stock);
    data.append("Descripcion", Descripcion);
    axios.post(url, data).then(function (res) {
      if (res.data.error) {
        toast.error(res.data.error);

        if (res.data.error === "Campos vacios") {
          setErrorVacio((prevstate) => ({
            ...prevstate,
            nombre: true,
            valor: true,
            stock: true,
            descripcion: true,
          }));
        } else if (res.data.existente === "true") {
          setErrorVacio((prevstate) => ({
            ...prevstate,
            nombre: true,
            descripcion: true,
          }));
        }
      }
      if (res.data.success) {
        toast.success(res.data.success);
        setErrorVacio((prevstate) => ({
          ...prevstate,
          nombre: false,
          valor: false,
          stock: false,
          descripcion: false,
        }));
        setNombre("");
        setStock("");
        setValor("");
        setDescripcion("");
        ObtenerCodigo();
      }
    });
  };

  useEffect(() => {
    ObtenerCodigo();
  }, []);

  return (
    <>
      <section className="section_form">
        <form>
          <ToastContainer />
          <section className="section_groups">
            <div className="group_codigo">
              <input
                type="number"
                required
                readOnly
                value={Codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
            </div>
            <div className="group_inputs">
              <input
                type="text"
                className={errorVacio.nombre ? "error_input" : ""}
                required
                value={Nombre}
                onChange={function (e) {
                  const value = e.target.value;
                  setNombre(value);
                  if (value.length > 1) {
                    setErrorVacio((prevstate) => ({
                      ...prevstate,
                      nombre: false,
                    }));
                  }
                }}
              />
              <span>Nombre</span>
            </div>

            <div className="group_inputs">
              <input
                type="number"
                className={errorVacio.valor ? "error_input" : ""}
                required
                value={Valor}
                onChange={function (e) {
                  const value = e.target.value;
                  setValor(value);
                  if (value.length > 1) {
                    setErrorVacio((prevstate) => ({
                      ...prevstate,
                      valor: false,
                    }));
                  }
                }}
              />
              <span>Valor</span>
            </div>

            <div className="group_inputs">
              <input
                type="number"
                className={errorVacio.stock ? "error_input" : ""}
                required
                value={Stock}
                onChange={function (e) {
                  const value = e.target.value;
                  setStock(value);
                  if (value.length > 1) {
                    setErrorVacio((prevstate) => ({
                      ...prevstate,
                      stock: false,
                    }));
                  }
                }}
              />
              <span>Stock</span>
            </div>

            <div className="Descripcion">
              <textarea
                id="descripcion"
                className={errorVacio.descripcion ? "error_input" : ""}
                value={Descripcion}
                onChange={function (e) {
                  const value = e.target.value;
                  setDescripcion(value);
                  if (value.length > 1) {
                    setErrorVacio((prevstate) => ({
                      ...prevstate,
                      descripcion: false,
                    }));
                  }
                }}
              />
            </div>
            <div className="btn-frm">
              <button
                type="submit"
                id="btn-frm"
                onClick={(e) => EnviarFormulario(e)}
              >
                Registrar Producto
              </button>
            </div>
          </section>
        </form>
      </section>
    </>
  );
};

export default AgregarProductos;
