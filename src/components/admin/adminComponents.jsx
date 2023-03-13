import React, { useState } from "react";
import "../../style/Admin/recuadro.css";
import Modal from "../../modal/Modal";
import { ModalProyect } from "./modalAdmin";
import Table from "react-bootstrap/Table";

export function Recuadro() {
  const [idModificar, setIdModificar] = useState(null);

  const [rows, setRows] = useState([
    {
        nombreProyecto: "Crear proyecto",
        description: "Crear un proyecto relacionado con las tecnologias enseñadas en IoT",
        fechIn: "2018-12-10T13:49:51.141Z",
        fechFin: "2018-12-10T13:49:51.141Z",
        resp: "Mario",
        state:"Finalizado",
        proyectIntegrante: ["Mario","sasaki kojiro"]
    }
  ]);

  const [formValues, setFormValues] = useState({
    id: 0,
    name: "",
    description: "",
    price: 0,
    images: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (idModificar !== null) {
      const indexModificar = rows.findIndex((row) => row.id === idModificar);
      const nuevosDatos = [...rows];
      nuevosDatos[indexModificar] = formValues;
      setRows(nuevosDatos);
      setIdModificar(null);
    } else {
      setRows((prevState) => [...prevState, formValues]);
    }
    setFormValues({ id: 0, name: "", description: "", price: 0, images: "" });
  };

  const eliminarDato = (id) => {
    const nuevosDatos = rows.filter((row) => row.id !== id);
    setRows(nuevosDatos);
  };

  const [mostrar, setMostrarProyect] = useState(false);

  const [contenido, setContenido] = useState(true);

  function otroProyecto() {
    setMostrarProyect(true);
  }

  

  return (
    <div className="Recuadro-contenedor container">
      <Modal isOpen={mostrar} onClose={() => setMostrarProyect(false)}>
        <ModalProyect />
      </Modal>
      <div className="Recuadro-Proyectos">
        <h2 className="Recuadro-Proyectos-titulo">Proyectos</h2>
        <hr className="Recuadro-hr" />
      </div>
      <div className="Recuadro-contenido">
        {contenido === false ? (
          <div className="Recuadro-contenido-sinContenido">
            <button
              className="Recuadro-contenido-sinContenido-boton"
              onClick={otroProyecto}
            >
              {" "}
              AGREGAR{" "}
            </button>
          </div>
        ) : (
          <div className="Recuadro-contenido-conContenido">
            <Table className="form-table" striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha Inicio</th>
                  <th>Fecha Final</th>
                  <th>Encargado</th>
                  <th>Estado</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td>{row.nombreProyecto}</td>
                    <td>{row.fechIn}</td>
                    <td>{row.fechFin}</td>
                    <td>{row.resp}</td>
                    <td>{row.state}</td>
                    <td>
                      <button
                        className="icon-pen"
                        onClick={() => setIdModificar(row.id)}
                      >
                        <i className="fa-regular fa-pen-to-square"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="icon-trash"
                        onClick={() => eliminarDato(row.id)}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
