import React from 'react'; 
import "./App.css";

function MostrarCita(nombreMascota, nombreDuenio, fecha, hora, sintomas)
{
    return(
        <div class="cita">
            <p>Mascota: <span>{nombreMascota}</span></p>
            <p>Dueño: <span>{nombreDuenio}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{fecha}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
        </div>
    );

}

