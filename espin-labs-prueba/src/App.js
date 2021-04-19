import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

function App() {
  const arrPaises = [
    { id: 1, nombre: "Buenos Aires" },
    { id: 2, nombre: "Córdoba" },
    { id: 3, nombre: "Misiones" },
  ];

  const [data, setData] = useState(arrPaises);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [paisSeleccionado, setPaisSeleccionado] = useState({
    id: "",
    nombre: "",
  });

  const seleccionarPais = (elemento, caso) => {
    setPaisSeleccionado(elemento);
    caso === "Eliminar" ? setModalEliminar(true) : setModalEliminar(false);
  };

  const eliminar = () => {
    setData(data.filter((pais) => pais.id !== paisSeleccionado.id));
    setModalEliminar(false);
  };

  return (
    <div className="App">
      <br />
      <h2>Grilla de Paises</h2>
      <br />
      <br />
      <br />
      <div className="col-auto">
        <table className="table table-striped table-dark table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elemento) => (
              <tr key={elemento.id}>
                <td>{elemento.nombre}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => seleccionarPais(elemento, "Eliminar")}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          ¿Está seguro que desea eliminar el país{" "}
          {paisSeleccionado && paisSeleccionado.nombre}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
