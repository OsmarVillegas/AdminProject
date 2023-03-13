import React from "react";
import { Link } from "react-router-dom";
import "../../style/Admin/header.css";

export function HeaderAdmin() {
  return (
    <header className="HeaderAdmin-header">
      <Link to="/" >
      <i class="fa-sharp fa-regular fa-circle-left HeaderAdmin-return" />
      </Link>
      <h3 className="HeaderAdmin-Titulo">Administrador de proyectos</h3>
    </header>
  );
}