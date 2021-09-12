import { Link } from "react-router-dom";
import classes from "./Header.module.css";
function Header() {
  return (
    <div className={classes.contenedor}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <Link to="/">
            <h1>Administrador de Usuarios</h1>
          </Link>
        </div>
        <nav className={classes.nav}>
          <Link to="/crear">Crear Usuario</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
