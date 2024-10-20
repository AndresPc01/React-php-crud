import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import { useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";

const AgregarClientes = () => {
  const [tipodocumento, setTipodocumento] = useState("");
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [correo, setCorreo] = useState("");

  const validateEmail = (correo) =>
    correo.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (correo === "") return false;

    return validateEmail(correo) ? false : true;
  }, [correo]);

  const enviarDatos = () => {
    const url = "";
    const data = new FormData();
    data.append("tipodocumento", tipodocumento);
    data.append("documento", documento);
    data.append("nombre", nombre);
    data.append("direccion", direccion);
    data.append("ciudad", ciudad);
    data.append("correo", correo);
    axios.post(url, data).then(function (res) {
      console.log(res);
    });
  };

  return (
    <section className="section_form">
      <ToastContainer />
      <section className="flex w-full  justify-center h-1/2 items-center ">
        <div className="grid grid-rows-2 gap-4 w-[40%] items-center bg-black h-[40vh] justify-center  ">
          <div className="flex col-start-1 col-end-3 gap-4">
            <div className="w-full">
              <Select
                variant="bordered"
                label="Tipo de documento"
                placeholder="Selecciona"
                onChange={(e) => setTipodocumento(e.target.value)}
                isRequired
                fullWidth
              >
                <SelectItem key={"CC"}>CC</SelectItem>
                <SelectItem key={"TI"}>TI</SelectItem>
              </Select>
            </div>
            <div className="w-full">
              <Input
                variant="bordered"
                type="text"
                isRequired
                fullWidth
                label="Documento"
                onValueChange={setDocumento}
                placeholder="Introduce tu documento"
              />
            </div>
          </div>
          <div className="flex col-start-1 col-end-3 gap-4">
            <div className="w-full">
              <Input
                variant="bordered"
                type="text"
                isRequired
                fullWidth
                label="Nombre"
                onValueChange={setNombre}
                placeholder="Introduce tu nombre"
              />
            </div>

            <div className="w-full">
              <Input
                variant="bordered"
                type="text"
                label="Ciudad"
                isRequired
                onValueChange={setCiudad}
                placeholder="Introduce tu ciudad"
              />
            </div>
          </div>
          <div className="flex col-start-1 col-end-3 gap-4">
            <div className="w-full">
              <Input
                variant="bordered"
                type="text"
                isRequired
                onValueChange={setDireccion}
                label="Direccion"
                placeholder="Introduce tu direccion"
              />
            </div>
            <div className="w-full">
              <Input
                variant="bordered"
                value={correo}
                type="email"
                label="Email"
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "success"}
                errorMessage="Please enter a valid email"
                onValueChange={setCorreo}
              />
            </div>
          </div>
          <div className="flex col-start-1 mb-10 col-end-3 gap-4">
            <div className="w-full">
              <Button color="primary" onClick={enviarDatos} fullWidth size="lg">
                Button
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AgregarClientes;
