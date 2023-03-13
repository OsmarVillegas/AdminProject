import "../../style/Admin/modal.css";

export function ModalProyect() {
  return (
    <div className="ModalProyect-container">
      <h2 className="ModalProyect-titulo">Creando proyecto</h2>
      <div className="ModalProyect-form">
        <form action="">

          <div className="ModalProyect-form-Nombre">
            <label>Nombre del proyecto</label>
            <input type="text" />
          </div>

          <div className="ModalProyect-form-Description">
            <label>Description</label>
            <textarea
              name="proyectDescription"
              id="ProyectDesc"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="ModalProyect-form-FechaIn">
            <label>Fecha Inicio</label>
            <input type="date" />
          </div>

          <div className="ModalProyect-form-FechaFin">
            <label>Fecha Final</label>
            <input type="date" />
          </div>

          <div className="ModalProyect-form-Integrantes">
            <label>Integrantes</label>
            <input type="text" className="ModalProyect-text" />
            <div className="ModalProyect-form-contenido">
              <div className="ModalProyect-form-Integrantes-options">
                <label>Nombre ApellidoPaterno ApellidoMaterno</label>
                <input type="checkbox" name="" id="" />
              </div>
              <div className="ModalProyect-form-Integrantes-miembros">
                <label>Nombre ApellidoPaterno ApellidoMaterno</label>
                <input type="radio" id="responsable" name="responsable" value="responsable" />
                <button className="form-Integrantes-Drop"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
          </div>

          <div className="ModalProyect-form-Estado">
            <label>Estado</label>
            <div className="ModalProyect-form-Estado-values">
              <label>Activo</label>
              <input type="radio" id="activo" name="Estado" value="Activo" />
              <label>Pausado</label>
              <input type="radio" id="pausado" name="Estado" value="Pausado" />
              <label>Finalizado</label>
              <input
                type="radio"
                id="finalizado"
                name="Estado"
                value="FInalizado"
              />
            </div>
          </div>

          <div className="ModalProyect-form-Btn">
            <button>Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
