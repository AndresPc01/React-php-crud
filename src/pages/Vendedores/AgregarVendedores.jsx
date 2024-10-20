import { Button, Input } from "@nextui-org/react";

import { useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";

const AgregarVendedores = () => {
  const [correo, setCorreo] = useState("");

  const validateEmail = (correo) =>
    correo.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (correo === "") return false;

    return validateEmail(correo) ? false : true;
  }, [correo]);

  return (
    <section className="section_form">
      <ToastContainer />
      <section className="flex w-full  justify-center h-1/2 items-center ">
        <div className="grid grid-rows-2 gap-4 w-[40%] items-center bg-black h-[30vh] justify-center  ">
          <div className="flex col-start-1 col-end-3">
            <div className="w-full">
              <Input
                variant="bordered"
                type="text"
                isRequired
                fullWidth
                label="Nombre"
                placeholder="Introduce tu nombre"
              />
            </div>
          </div>
          <div className="flex col-start-1 col-end-3 gap-4">
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
            <div className="w-full">
              <Input
                variant="bordered"
                type="number"
                label="Telefono"
                isRequired
                placeholder="Introduce tu telefono"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-800 text-small">+57</span>
                  </div>
                }
              />
            </div>
          </div>
          <div className="flex col-start-1 col-end-3 gap-4">
            <div className="w-full"></div>
          </div>
          <div className="flex col-start-1 mb-10 col-end-3 gap-4">
            <div className="w-full">
              <Button color="primary" fullWidth size="lg">
                Button
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AgregarVendedores;
