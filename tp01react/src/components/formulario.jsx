import { useState } from "react";
import "./App.css";  

const Formulario = () => {
    return (
      <form className="formulario">
        <h2>Agrega una Nueva Cita</h2>
        {/* Campos del formulario */}
        <input type="text" placeholder="Texto de la cita" />
        <input type="text" placeholder="Autor de la cita" />
        <button type="button">Agregar Cita</button>
      </form>
    );
  };
  