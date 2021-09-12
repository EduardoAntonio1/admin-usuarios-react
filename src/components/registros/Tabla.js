import classes from "./Tabla.module.css";
import TablaFila from "./TablaFila";

function Tabla({ dataArray, guardarConsultar }) {
  return (
    <div className={classes.contenedorTabla}>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Observaciones</th>
            <th>Estatus</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((data) => (
            <TablaFila
              key={data._id}
              data={data}
              guardarConsultar={guardarConsultar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
