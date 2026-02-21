import React from "react";
import "../stylesheets/Testimonio.css";

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

class Testimonio extends React.Component {

  render() {
    return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={`../src/imagenes/testimonio-${this.props.nomimage}.png`}
        alt={`Testimonio de ${this.props.nombre}`}
        title={`Testimonio de ${this.props.nombre}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{this.props.nombre}</strong> en {this.props.pais}
        </p>
        <p className="cargo-testimonio">
          {this.props.cargo} en <b>{this.props.empresa}</b>
        </p>
        <p className="texto-testimonio">{formatTestimonio(this.props.testimonio)}</p>
      </div>
    </div>
  );
  }
}


export default Testimonio;
