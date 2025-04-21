import { useState } from "react";
import "./App.css";  

const Formulario = () => {
    return (
        <form className="formulario">
        <h2>Agrega una Nueva Cita</h2>
        {/* Campos del formulario */}
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value="" />
  
        <label>Nombre Dueño</label>
        <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value="" />
  
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" value="" />
  
        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" value="" />
  
        <label>Síntomas</label>
        <textarea name="sintomas" className="u-full-width"></textarea>
  
        <button type="submit">Agregar Cita</button>
      </form>
    );
  };
  