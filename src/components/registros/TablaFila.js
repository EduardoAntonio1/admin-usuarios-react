import React from "react";
import { Link, withRouter } from "react-router-dom";
const TablaFila = (props) => {
  const { data, guardarConsultar } = props;
  const { nombre, apellido, correo, status, observaciones, _id } = data;

  function eliminarUsuario(id) {
    fetch(`https://evening-scrubland-79852.herokuapp.com/eliminar/${id}`, {
      method: "DELETE",
    }).then((result) => {
      guardarConsultar(true);
      props.history.push("/");
    });
  }

  return (
    <tr>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{correo}</td>
      <td>{observaciones}</td>
      <td>{status ? "Activo" : "Inactivo"}</td>
      <div>
        <td>
          <Link className="button buttonEditar" to={`/editar/${_id}`}>
            Editar
          </Link>
        </td>
        <td>
          <button
            className="button buttonEliminar"
            onClick={() => eliminarUsuario(_id)}
          >
            Eliminar
          </button>
        </td>
      </div>
    </tr>
  );
};

export default withRouter(TablaFila);
