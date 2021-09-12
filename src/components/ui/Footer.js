import classes from "./Footer.module.css";
function Footer() {
  return (
    <footer className={classes.footer}>
      <p>
        App developed by{" "}
        <span className={classes.bold}>Eduardo Antonio Zamora Hernández</span>
      </p>
      <p>
        API used for this exercise was made by{" "}
        <span className={classes.bold}>Emmanuel Said Jiménez Oliva</span>
      </p>
    </footer>
  );
}

export default Footer;
