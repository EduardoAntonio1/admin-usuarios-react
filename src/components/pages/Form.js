import { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Form.module.css";
const Form = (props) => {
  const history = useHistory();
  const { modoEditar, usuario, guardarConsultar } = props;

  const [jsonBody, setJsonBody] = useState({
    nombre: usuario ? usuario.nombre : "",
    apellido: usuario ? usuario.apellido : "",
    correo: usuario ? usuario.correo : "",
    observaciones: usuario ? usuario.observaciones : "",
  });

  function changeHandler(name, event) {
    setJsonBody({ ...jsonBody, [name]: event.target.value });
  }

  function submitHandler(event) {
    event.preventDefault();

    if (modoEditar) {
      fetch(
        `https://evening-scrubland-79852.herokuapp.com/editar/${usuario._id}`,
        {
          method: "PUT",
          body: JSON.stringify(jsonBody),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((result) => {
        guardarConsultar(true);
        history.replace("/");
      });
    } else {
      fetch("https://evening-scrubland-79852.herokuapp.com/crear", {
        method: "POST",
        body: JSON.stringify(jsonBody),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((result) => {
        guardarConsultar(true);
        history.replace("/");
      });
    }
  }
  return (
    <div className={classes.card}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre Usuario"
            name="nombre"
            value={jsonBody.nombre}
            onChange={(e) => changeHandler("nombre", e)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            placeholder="Apellido Usuario"
            name="apellido"
            value={jsonBody.apellido}
            onChange={(e) => changeHandler("apellido", e)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="correo">Correo</label>
          <input
            type="text"
            id="correo"
            placeholder="Correo Usuario"
            name="correo"
            value={jsonBody.correo}
            onChange={(e) => changeHandler("correo", e)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="observaciones">Observaciones</label>
          <textarea
            name="observaciones"
            id="observaciones"
            rows="6"
            value={jsonBody.observaciones}
            onChange={(e) => changeHandler("observaciones", e)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>{modoEditar ? "Editar Usuario" : "Crear Usuario"}</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
