import React from "react";
import "../stylesheets/Testimonio.css";

function Testimonio(props) {
  function formatTestimonio(text) {
    return text
      .split(/(\*\*.*?\*\*)/g)
      .map((part, i) =>
        part.startsWith("**") ? (
          <strong key={i}>{part.replace(/\*\*/g, "").toUpperCase()}</strong>
        ) : (
          part
        ),
      );
  }

  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={`../src/imagenes/testimonio-${props.nomimage}.png`}
        alt={`Testimonio de ${props.nombre}`}
        title={`Testimonio de ${props.nombre}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <b>{props.empresa}</b>
        </p>
        <p className="texto-testimonio">{formatTestimonio(props.testimonio)}</p>
      </div>
    </div>
  );
}

export default Testimonio;
